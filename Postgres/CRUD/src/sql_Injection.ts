import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"   
});

async function insertData(username: string, email: string, password: string) {
    try {
        await client.connect();

        // cause SQL injection:
        // const res = await client.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);

        // use parameterised query to prevent SQL Injection
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) ";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);

        console.log('Insertion success', res);
    } catch(err) {
        console.error("Error during the insertion:", err);
    } finally {
        await client.end(); // close client connection
    }
}

insertData('Iron Man', 'irony@gmail.com', '123iron');

// query with SQL injection: 
// NOT WORKED!!!!!!!!!!!
// insertData('DELETE FROM users;', 'inject2@gmail.com', 'inject');