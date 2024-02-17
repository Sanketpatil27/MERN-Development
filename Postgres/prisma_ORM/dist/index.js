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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstName,
                lastName
            },
            select: {
                id: true,
                firstName: true
            }
        });
        console.log(res);
    });
}
insertUser('spider@gmail.com', 'dlfja', "Spider", "Man");
// 2nd argument is what should be updated(its object with we add type)
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            },
        });
        console.log(res);
    });
}
// updateUser('Thor@gmail.com', {
//                 firstName: 'lightning Thor', 
//                 lastName: 'Ragnorok'
//             });
// getting user
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: { email: username },
        });
        console.log(res);
    });
}
getUser("Thor@gmail.com");
