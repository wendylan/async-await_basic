const fetch = require('node-fetch');
const bluebird = require('bluebird');

async function getQADNColumn(name, value) {
    await bluebird.delay(1000);
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const res = await fetch(url);
    return await res.json();
}

const showColumnInfo = async ()=>{
    console.time('showColumnInfo');

    const names = ['feweekly', 'toolingtips'];
    const promises = names.map(x => getQADNColumn(x));
    for (const promise of promises) {
        const column = await promise;
        console.log(`Name: ${column.name}`);
        console.log(`Intro: ${column.intro}`);
    }
  
    console.timeEnd('showColumnInfo');
}

showColumnInfo();