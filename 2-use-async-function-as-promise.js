const fetch = require('node-fetch');

async function getQADNColumn(name, value) {
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const res = await fetch(url);    
    return await res.json();
}

getQADNColumn('sk', 'GZTHOO').then(res =>{
    console.log(res);
});