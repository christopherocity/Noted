const axios = require("axios");

const BASE_URL = "http://localhost:3000";
const AUDIO_URL = `${BASE_URL}/audio`;

async function audio() {
    return await axios.get(AUDIO_URL)
}

const categories = {
    banjo: [],
    bass_clarinet: [],
    bassoon: [],
    cello: [],
    clarinet: []
};


Promise.all([
    audio(),
]).then(results => {
    results.forEach(r => {
        r.data.files.forEach(n => {
            const splitter = n.name.split('/');
            const cat = `${splitter[0]}`;
            const sample = `${splitter[1]}`;
            switch (cat) {
                case 'bass clarinet': categories.bass_clarinet.push(sample); break;
                case 'clarinet': categories.clarinet.push(sample); break;
                case 'bassoon': categories.bassoon.push(sample); break;
                case 'banjo': categories.banjo.push(sample); break;
                case 'cello': categories.cello.push(sample); break;
            }
        })
    });
    console.log(categories)
}).catch(error => {
   console.error(error.response ? error.response.data : error);
});

