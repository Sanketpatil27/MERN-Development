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
// write a function to create a users table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require",
    // host: "postgresql://spatil270403:2chWDAp7ijrV@ep-mute-lab-27539885.us-east-2.aws.neon.tech/test?sslmode=require",
    // port: 5334,
    // database: "user",
    // password: 'secret'
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
            console.log(result);
        }
        catch (error) {
            console.error('Error occured while conneting!', error);
        }
        finally {
            yield client.end();
        }
    });
}
createUsersTable();
