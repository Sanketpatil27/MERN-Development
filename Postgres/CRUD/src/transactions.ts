import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});

async function transaction() {
    try {
        await client.connect();
        await client.query("BEGIN");            // it will start the transaction
        // --------------------------------------
        // now we can perfrom any queries that we want to run atomically  between BEGIN & COMMIT


        // 1st query    (user1 doesn't exist)
        let query = `INSERT INTO users (username, email, password)
                     VALUES ('THOR', 'thor@gmail.com', '23fjthor')`;
        const res = await client.query(query);
        console.log(res);


        // 2nd query
        query = `INSERT INTO addresses (user_id, city, country, street, pincode)
                 VALUES (10, 'California', 'USA', 'Mountain View C.A', 34532)`;
        const res1 = await client.query(query);
        console.log(res1);        


        // ---------------------------------------
        await client.query("COMMIT");

    } catch(err) {
        console.error('Error occured: ', err);
    }
}

transaction();