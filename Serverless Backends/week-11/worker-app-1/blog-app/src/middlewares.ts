import { verify } from "hono/jwt"
import { SECRET } from "./config"

export async function authMiddleware(c: any, next: any) {
    const authHeader = c.req.header('authorization');       // "Berer + token..."
    console.log(authHeader);

    if(!authHeader || !authHeader.startsWith('Bearer'))
        return c.json({msg: "Please provide valid token!!!"});

    const token = authHeader.split(' ')[1];                 // it get token from ['Berer', 'token..']

    try {
        const decoded = await verify(token, SECRET);        // it will contain email only as variable
        console.log(decoded);
        
        if(decoded) {
            // c.req = decoded;           // store it for next uses
            await next();
        }
        else 
            return c.json({msg: "invalid token!!!"});

    } catch (err) {
        console.log(err);
        return c.json({msg: "Token is incorrect!!!"});
    }
}