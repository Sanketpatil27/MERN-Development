const axios = require("axios");

function main1() {
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async (res) => {
        const json = await res.json();
        console.log(json.todos);
    })
}

async function main2() {
    // get request
    // const res = await fetch('https://sum-server.100xdevs.com/todos');
    // const json = await res.json();
    // console.log(json.todos);

    // post request
    const res = await fetch('https://www.toptal.com/developers/postbin/1715865806427-8200263658072', {
        method: "POST",
        body: {
            user: 'Thor',
            power: 'Thunder'
        },
        headers: {
            'Authorization': 'Bearer 123'
        }
    });
    const text = await res.text();
    console.log(text);
}

// main1();
// main2();

async function main3() {
    // get request
    // const res = await axios.get('https://sum-server.100xdevs.com/todos');
    // console.log(res.data.todos);
    
    // post reqeust (don't need to specify for text or json)
    // here body as a 2nd argument and 3rd can be headers
    const res = await axios.post(' https://httpdump.app/dumps/8a304a75-ce6a-4c4c-b195-fe15ccdeee44', {
        user: 'Thor',
        power: 'Thunder'
        }, {
            headers: {
                'Authorization': 'Bearer 123'
            }
        }
    );
    console.log(res.data);
}   

main3();