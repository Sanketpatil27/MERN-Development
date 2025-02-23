const readline = require('node:readline')
const fs = require('fs')

const DATA_FILE = './data.json'
if(!fs.existsSync(DATA_FILE)) 
    fs.writeFileSync('./data.json', "[{}]", (err)=>{});

let tasks = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

console.log("\n\tWelcome to the task manager!\n")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const askQuestion = (question) => {
    return new Promise((resolve) => {
        r1.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// 'add' press enter then taskname
// update todoId updationText
// mark enter 'mark-in-progress' OR 'mark-done'

const main = async () => {
    
    let keep = true;
    while(keep) {
        console.log(tasks);
        let query = await askQuestion("\nPerform any operation: add, update, mark-in-progress, list, list-done, list-todo, list-in-progress or exit: \n");
        let operation = query.split(" ")[0];    // extract the operation(add, update)

        switch (operation) {
            case 'add': 
                let task = await askQuestion("Enter the task: \n");
                tasks.push({task, 'id': tasks.length+1})
                break;

            case 'update': 
                var taskId = parseInt(query.split(" ")[1]);
                let newTask = query.split(" ").slice(2).join(" ");
                let taskIndex = tasks.findIndex((t) => t.id === taskId)
                if(taskIndex !== -1) 
                    tasks[taskIndex].task = newTask;

                break;

            case 'mark':
                let mark =  await askQuestion("Enter status: ")
                var taskId = mark.split(" ")[1];   // get the index from 'mark-as-done 1'
                let parts = mark.split(" ")[0].split("-");     // get the last status, ex: done from mark-as-done OR progress from 'mark-in-progress'
                let status = parts.slice(1).join(" ");
                tasks[taskId].status = status;
                break;


            case 'exit':
                keep = false;
                break;
            default:
                break;
        }
    }
    
    // change in data file after all operations performed 
    tasks = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(DATA_FILE, tasks, 'utf-8')
    r1.close();
}

main();