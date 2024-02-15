import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
})

async function getUser(email:string) {
    try {
        await client.connect();
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const res = await client.query(query, values);

        if(res.rows.length > 0) 
            console.log("User found:", res.rows[0]);    // return the user
         
        else 
            console.log("User not found!");
        
    } catch (err) {
        console.error("error during featching user");
    } finally {
        await client.end();
    }
}

getUser("thor@gmail.com");