import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

export async function createTodo(userId: number, title: string, description: string) {
    try {
        const query = "INSERT INTO todos (user_id, title, description) VALUES($1, $2, $3) RETURNING title, description, done, id;";
        const res = await client.query(query, [userId, title, description]);

        console.log("todo insertion successful!");
        return res.rows[0];
    } catch (err) {
        console.log("error occured: ",err);        
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const query = `UPDATE todos 
                       set done = true 
                       WHERE id = $1 RETURNING *`;

        const res = await client.query(query, [todoId]);
        return res.rows[0];
    } catch(err) {
        console.log("error occured while update: ", err);
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */

export async function getTodos(userId: number) {
    try {
        const query = `SELECT * FROM todos
                       WHERE user_id = $1`;
        const res = await client.query(query, [userId]);
        console.log(res.rows);
        return res.rows; 
    }
    catch (err) {
        console.log("error occured");        
    }
}