import { Hono } from 'hono'
// import { router } from "./routes/users";                 // used to import routes but giving error below while routeing
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { cors } from 'hono/cors';
import { z } from "zod"
import { SECRET } from './config';
import { authMiddleware } from './middlewares';

const app = new Hono();

app.use('/api/*', cors());
// app.route("api/v1/users", router);       // giving the *** 🤬 error


const prisma = new PrismaClient({
    datasourceUrl:
        "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNzg4YzY3YmItODU5OC00MTMwLTk1MDgtNWYzNmI0OTUzN2VkIiwidGVuYW50X2lkIjoiM2IyOWM4OGM1M2NiOTgwYTQyM2MwM2UzMDM0YTI2YWEzYmVmN2Y4ZGI2MmFjM2M3MjFiOWJiMzE0OWM5YjY1NiIsImludGVybmFsX3NlY3JldCI6IjkxY2ZhODU3LTYxMzgtNDBhMS05NjViLWRiYzhmYjBlNDQ2MiJ9.cP0K_tWHw63MGb3GusK5Uv1303XJITsx6n4c3yQsVo0"
}).$extends(withAccelerate());

const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string()
});

const singinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})


// // user routes:
app.post('/users/signup', async (c) => {

    const body = await c.req.json();
    console.log("userBody: ", body);

    const res = signupSchema.safeParse(body);

    if (!res.success) {
        return c.json({ msg: "provide valid info!" });
    }

    // check if user already exist!
    const isUser = await prisma.user.findFirst({
        where: { email: body.email }
    });
    console.log("isUser: ", isUser);

    if (isUser) {
        return c.json({ msg: "email already exist!" });
    }

    const newUser = await prisma.user.create({
        data: {
            username: body.username,
            email: body.email,
            password: body.password
        }
    });

    console.log("new User: ", newUser);
    return c.json({ msg: "User created Successfully!" });
})

app.post("/users/signin", async (c) => {
    const body = await c.req.json();
    const res = singinSchema.safeParse(body);

    if (!res.success)
        return c.json({ msg: "Wrong credentials!!!" });

    // now check if email exists in database or not?
    const isUser = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    });

    if (!isUser)
        return c.json({ msg: "User not found!!!" });

    const token = await sign(body.email, SECRET);

    console.log("sign in success!: Token: ", token);
    return c.json({ token });
})


app.get('/posts', async (c) => {
    const res = await prisma.blog.findMany();
    return c.json({ blogs: res });
})

app.post('/posts', authMiddleware, async (c) => {
    const body = await c.req.json();        // { title, description }

    const res = await prisma.blog.create({
        data: {
            title: body.title,
            description: body.description
            // have to add it with associated user
        }
    });

    console.log(res);
    return c.json({ msg: "posts created successfully..." });
})

app.get('/posts/:id', async (c) => {
    const id = parseInt(c.req.param('id'));             // have to convert string id to int(id) coz 'typescript'
    const blog = await prisma.blog.findFirst({
        where: { id }
    });

    return c.json({ blog })
});

app.put('/posts/:id', authMiddleware, async (c) => {
    const body = await c.req.json();
    const id = parseInt(c.req.param('id'));

    const res = await prisma.blog.update({
        where: { id }, 
        data: {
            title: body.title,
            description: body.description
        }
    });

    console.log(res);
    return c.json({msg: "Blog updated successfully"});
});

app.delete('/posts/:id', authMiddleware, async (c) => {
    const id = parseInt(c.req.param('id'));
    const res = await prisma.blog.delete({
        where: { id }
    });

    console.log(res);
    return c.json({msg: "Blog deleted successfully"});
})

export default app