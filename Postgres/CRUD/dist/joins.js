"use strict";
// defining relationship is easy whats hard is joining 
// data from two (or more) tables together.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});
// good solution- using joins
function getUserAddress(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0)
                console.log('User & address found: ', result.rows);
            else
                console.log('No user or address found with given id!');
        }
        catch (err) {
            console.log('error during fetching user and address', err);
        }
        finally {
            yield client.end();
        }
    });
}
getUserAddress('10');
