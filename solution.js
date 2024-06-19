const api_url = 'https://api.recruitment.shq.nz';
const client_id = '100';
const api_key = 'h523hDtETbkJ3nSJL323hjYLXbCyDaRZ';

async function getDomainList() {
    try {
        const response = await fetch(`${api_url}/domains/${client_id}?api_key=${api_key}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching domain list:', error);
        return null;
    }
}

async function getDNSRecords(zoneId) {
    try {
        const response = await fetch(`${api_url}${zoneId}?api_key=${api_key}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching DNS records:', error);
        return null;
    }
}

async function main() {
    const domainList = await getDomainList();
    if (!domainList) {
        return;
    }
    console.log('Domain List:');
    for (let i = 0; i < domainList.length; i++) {
        const domain = domainList[0];
        const zoneList = domain.zones;
        if (!zoneList) {
            console.log('No DNS zones found for the domain:', domain.name);
            continue;
        }
        for (let j = 0; j < zoneList.length; j++) {
            const zone = zoneList[0];
            const dnsRecords = await getDNSRecords(zone.uri);
            if (!dnsRecords) {
                console.log('No DNS records found for the domain zone:', zone.name);
                continue;
            }
            console.log(dnsRecords);
        }
    }
}

main();
