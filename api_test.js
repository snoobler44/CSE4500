const fetch = require('node-fetch');

const body = { a: 1 };
 
fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));