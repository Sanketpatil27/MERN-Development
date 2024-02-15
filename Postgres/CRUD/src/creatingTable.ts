// write a function to create a users table in your database
import { Client } from "pg";

// for connection
const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require",
    // host: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require",
    // port: 5334,
    // database: "user",
    // password: 'secret'
});


async function createUsersTable() {
    await client.connect();     // connect with db

    try {
        const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
            
        console.log(result);    

    } catch (error) {
        console.error('Error occured while conneting!', error);
    } finally {
        await client.end();
    }
}



createUsersTable();