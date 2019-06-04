const fetch = require('node-fetch');

const sleep = (timeout = 2000) => new Promise(resolve =>{
    setTimeout(resolve, timeout);
});

async function getQADNColumn(name, value) {
    await sleep(2000);
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const response = await fetch(url);
    return await response.json();
}

const showColumnInfo = async ()=>{
    console.time('showColumnInfo');
    const feweekly = await getQADNColumn('sk', 'GZTHOO');
    const toolingtips = await getQADNColumn('sk', 'GZTHOO');
    console.log('feweekly', feweekly.adPlanInfo);
    console.log('toolingtips', toolingtips.adPlanInfo);
    console.timeEnd('showColumnInfo');
}

showColumnInfo();