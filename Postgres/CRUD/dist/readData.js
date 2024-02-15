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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const res = yield client.query(query, values);
            if (res.rows.length > 0)
                console.log("User found:", res.rows[0]); // return the user
            else
                console.log("User not found!");
        }
        catch (err) {
            console.error("error during featching user");
        }
        finally {
            yield client.end();
        }
    });
}
getUser("thor@gmail.com");
