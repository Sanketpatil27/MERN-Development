const allUsers = [{
    firstName: 'harkirat',
    gender: 'male'
}, {
    firstName: 'Rohit',
    gender: 'male'
}, {
    firstName: 'Dua Lipa',
    gender: 'female'
}]

for(let i = 0; i < allUsers.length; i++)
{
    if(allUsers[i]['gender'] == 'female') 
        console.log(allUsers[i]['firstName']);
}