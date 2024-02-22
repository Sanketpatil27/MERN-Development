// import { Hono } from "hono";
// import { PrismaClient } from "@prisma/client/extension";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { z } from "zod";
// import { Context } from "hono";

// export const router = new Hono();

// const prisma = new PrismaClient({
// 	datasourceUrl: "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNzg4YzY3YmItODU5OC00MTMwLTk1MDgtNWYzNmI0OTUzN2VkIiwidGVuYW50X2lkIjoiM2IyOWM4OGM1M2NiOTgwYTQyM2MwM2UzMDM0YTI2YWEzYmVmN2Y4ZGI2MmFjM2M3MjFiOWJiMzE0OWM5YjY1NiIsImludGVybmFsX3NlY3JldCI6IjkxY2ZhODU3LTYxMzgtNDBhMS05NjViLWRiYzhmYjBlNDQ2MiJ9.cP0K_tWHw63MGb3GusK5Uv1303XJITsx6n4c3yQsVo0"
// }).$extends(withAccelerate());

// const signupSchema = z.object({
// 	username: z.string(),
// 	email: z.string().email(),
// 	password: z.string()
// });


// router.post('/signup', async (c) => {

// 	const body = await c.req.json();
// 	console.log("userBody: ", body);

// 	const res = signupSchema.safeParse(body);

// 	if (!res.success) {
// 		return c.json({ msg: "provide valid info!" });
// 	}

// 	// check if user already exist!
// 	const isUser = await prisma.user.findFirst({
// 		where: { email: body.email }
// 	});
// 	console.log("isUser: ", isUser);

// 	if (isUser) {
// 		return c.json({ msg: "email already exist!" });
// 	}

// 	const newUser = await prisma.user.create({
// 		data: {
// 			username: body.username,
// 			email: body.email,
// 			password: body.password
// 		}
// 	});

// 	console.log("new User: ", newUser);
// 	return c.json({ msg: "User created Successfully!" });
// })


// router.get('/posts', (c) => {
// 	console.log('adfa');
// 	return c.text('Hello!')
// })