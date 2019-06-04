const fetch = require('node-fetch');

async function getQADNColumn(name, value) {
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const res = await fetch(url);
    return await res.json();
}

const showColumnInfo = async()=>{
    const [fun1, fun2] = await Promise.all([
        getQADNColumn('sk', 'GZTHOO'),
        getQADNColumn('sk', 'GZTHOO')
    ]);

    console.log('fun1---', fun1.adPlanInfo);
    console.log('fun2---', fun2.adPlanInfo);
}

showColumnInfo();