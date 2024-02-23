import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});


// create the address relation to the users table
async function createRelation() {
    try {
        await client.connect();
        const res = await client.query(`
            CREATE TABLE addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(20),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `);

        console.log('res', res);
    }
    catch (err) {
        console.log('error: ', err);
    }
}

// createRelation();        // calling it again give error: already exist

// inserting data in address of user
async function insertAddress() {
    try {
        await client.connect();
        const res = await client.query(`
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES (10, 'Amsterdam', 'USA', 'Nepolian Hill', '10111');
        `);

        console.log(res);
    }
    catch (err) {
        console.log('error: ', err);
    }
}

insertAddress();