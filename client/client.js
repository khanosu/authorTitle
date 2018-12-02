const axios = require('axios')

console.log('');

axios
    .get("http://localhost:3000/persons/")
    .then(response => {
        console.log(response.data);
        // console.log('verb is: ' + response.data.verb);
        // console.log('message is: ' + response.data.message);
        console.log('----------------------')
    })
    .catch(error => {
        console.log(error.message)
        console.log('----------------------')
    })

// axios
//     .post('http://localhost:3000/persons/', {
//         name: 'Bagel',
//         age: '8' 
//     })
//     .then((response) => {
//         console.log(response.data)
//         console.log('----------------------')
//     })
//     .catch((error) =>  {
//         console.log(error.message)
//         console.log('----------------------')
//     });