import { createClient } from "redis";

const client = createClient();

async function main() {   
    await client.connect();

    while(1) {
        const response = await client.brPop("submissions", 0);      // brPop means blocked pop, 1st arugument: key, 2nd argument is time: 0 specifies infinite time waiting, until there someone pushed anything in queue
        console.log(response);   // the thing which is pushed in queue
        
        // in actual sysetm: run the user code here, which is sent from the payload, (via docker exec)
        
        // simulates an expensive operation by adding delay of 1s
        await new Promise((resolve) => setTimeout( resolve, 1000 ) );
        // send it to the pub sub

        console.log("processed user submissions");
    }
}

main();