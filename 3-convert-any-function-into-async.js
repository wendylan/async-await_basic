const fetch = require('node-fetch');

async function getQADNColumn(name, value) {
    console.log(1111);
    const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
    const res = await fetch(url);
    return await res.json();
}

class APIClient {
    async getColumn(name, value) {
        console.log(22222);
        const url = `https://beta.qinlinad.com/advertisement/GetReportBatch?${name}=${value}`;
        const res = await fetch(url);
        return await res.json();
    }
}


(async () => {
    const client = new APIClient();
    const column = await client.getColumn('sk', 'GZTHOO');
    const column1 = await getQADNColumn('sk', 'GZTHOO');
    console.log('1--------------', column.adPlanInfo);
    console.log('2--------------', column1.adPlanInfo);
})();