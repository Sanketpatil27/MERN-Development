// used to validate input 
const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)    // string with min 8 letters
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "abc@gmail.com",
    password: "abcdeflgk"
})