"use strict";
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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require"
});
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // cause SQL injection:
            // const res = await client.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);
            // use parameterised query to prevent SQL Injection
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) ";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success', res);
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end(); // close client connection
        }
    });
}
insertData('Iron Man', 'irony@gmail.com', '123iron');
// query with SQL injection: 
// NOT WORKED!!!!!!!!!!!
// insertData('DELETE FROM users;', 'inject2@gmail.com', 'inject');
