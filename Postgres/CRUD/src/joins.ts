// defining relationship is easy whats hard is joining 
// data from two (or more) tables together.

// Q. fetch a user details and their address
// bad solutions- using 2 queries
// -- Query 1: Fetch user's details
// SELECT id, username, email
// FROM users
// WHERE id = YOUR_USER_ID;

// -- Query 2: Fetch user's address
// SELECT city, country, street, pincode
// FROM addresses
// WHERE user_id = YOUR_USER_ID;

import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});

// good solution- using joins

async function getUserAddress(userId: string) {
    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if(result.rows.length > 0) 
            console.log('User & address found: ', result.rows);
        else 
            console.log('No user or address found with given id!');
        
    } catch (err) {
        console.log('error during fetching user and address', err);
    }
    finally {
        await client.end();
    }
}

getUserAddress('10');