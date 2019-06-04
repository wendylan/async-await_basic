const fetch = require('node-fetch');

async function getQADNColumn(name, value) {
    // const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const url = `https://www.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const res = await fetch(url);
    const column = await res.json();
    console.log(column);
    console.log(column.adPlanInfo);
}

// getQADNColumn('sk', 'GZTHOO');
getQADNColumn('sk', 'QIQZIFS');