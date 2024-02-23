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
// create the address relation to the users table
function createRelation() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const res = yield client.query(`
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
    });
}
// createRelation();        // calling it again give error: already exist
// inserting data in address of user
function insertAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const res = yield client.query(`
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES (8, 'Amsterdam', 'USA', 'Nepolian Hill', '10111');
        `);
            console.log(res);
        }
        catch (err) {
            console.log('error: ', err);
        }
    });
}
insertAddress();
