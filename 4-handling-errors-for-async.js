const fetch = require('node-fetch');

async function getQADNColumn(name, value) {
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

const showColumnInfo = async (name, value) => {
    try {
        const column = await getQADNColumn(name, value);
        console.log('name', column.adPlanInfo);
    } catch (err) {
        console.error('err----', err);
    }
};

showColumnInfo('sk', 'GZTHOO');