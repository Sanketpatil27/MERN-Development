import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
    username: string,
    password: string,
    firstname?: string,
    lastname?: string
}
async function addUser(user: User) {
    const res = await prisma.user.create({
        data: {
            username: user.username,
            password: user.password, 
            firstname: user.firstname,
        }
    });

    console.log(res);
}
// addUser({username: "IronMan", password: "dfae2", firstname: "Geek"});


async function addTodos(userId: number) {
    try {
        const res = await prisma.todo.create({
            data: {
                title: "todo 1",
                description: "first todo",
                userId: userId
            }
        });   
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
addTodos(1);

async function getTodos(userId: number) {
    const res = await prisma.todo.findMany({
        where: { userId },
        select: {
            title: true,
            description: true,
            user: true                  // like join 2 tables
        }
    });

    console.log(res);
}
// getTodos(1);