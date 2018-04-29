const axios = require("axios");

const BASE_URL = "http://localhost:3000";

async function audio() {
    return await axios.get(`${BASE_URL}/audio`)
}

Promise.all([
    audio(),
]).then(results => {
    results.forEach(r => {
       console.log("RESULT = " + JSON.stringify(r, null, 2));
    });
}).catch(error => {
   console.error(error.response ? error.response.data : error);
});