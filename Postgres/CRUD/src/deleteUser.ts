import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});

async function deleteUser(userId:number) {
    try {
        await client.connect();

        const query = `DELETE FROM users WHERE id = $1`;
        const res = await client.query(query, [userId]);
        console.log(res);
    } catch (err) {
        console.log("error occured: ", err);        
    } finally {
        await client.end();
    }
}

deleteUser(8);