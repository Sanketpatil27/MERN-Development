import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


// inserting data
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {       // it specifies what should res contain if doesn't specify select it will contain all result of email, passowrd, ...
            id: true,
            firstName: true
        }
    });

    console.log(res);
}
// insertUser('spider@gmail.com', 'dlfja', "Spider", "Man");


// updating user
interface UpdateParams {
    firstName: string,
    lastName: string
}

// 2nd argument is what should be updated(its object with we add type)
async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        },
    });

    console.log(res);
}

// updateUser('Thor@gmail.com', {
//                 firstName: 'lightning Thor', 
//                 lastName: 'Ragnorok'
//             });


// getting user
async function getUser(username: string) {
    const res = await prisma.user.findUnique({
        where: {email: username},
    });

    console.log(res);
}

getUser("Thor@gmail.com");