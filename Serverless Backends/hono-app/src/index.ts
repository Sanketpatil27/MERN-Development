import { Hono } from 'hono'

const app = new Hono()

// using middlewares
async function authMiddleware(c: any, next: any) {
  if(c.req.header("Authorization")) {
    // do validation
    await next();
  } else {
    return c.text("You don't have access");
  }
}

app.use(authMiddleware);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// you can get body, headers, query parameters, middlewares, connecting to database
app.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.text("Hii there!");
})

export default app

1.38 mins ------------------------