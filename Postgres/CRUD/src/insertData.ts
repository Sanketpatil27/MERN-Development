import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"   
});

async function insertData() {
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('Thor', 'thor@gmail.com', '2j3k42l2') ";
        const res = await client.query(insertQuery);
        console.log('Insertion success', res);
    } catch(err) {
        console.error("Error during the insertion:", err);
    } finally {
        await client.end(); // close client connection
    }
}

insertData();