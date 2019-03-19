const fetch = require('node-fetch');
const expect = require("chai").expect;
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

describe('Web services testing', () => {
    
    const metod = {
        method: 'GET'
    };

    let response;

    before(async() => { 
            response = await fetch(`${baseUrl}`, metod);
    });

    it('Status code is 200', () => {
        expect(response.status).to.equal(200);
    });

    describe('Test of response header', () => {
        it('Check the value of the content-type', () => {
            expect(response.headers.get('content-type')).to.equal('application/json; charset=utf-8');
        });
    });

    describe('Test of response body', () => {
        let jsonData;
        it('Check the content of the response body', async() => {
            jsonData = await response.json();
            expect(jsonData).to.be.an('array');
            expect(jsonData.length).to.equal(10);
            expect(jsonData[0].name).to.equal('Leanne Graham');
            expect(jsonData[1].name).to.equal('Ervin Howell');
            expect(jsonData[2].name).to.equal('Clementine Bauch');
            expect(jsonData[3].name).to.equal('Patricia Lebsack');
            expect(jsonData[4].name).to.equal('Chelsey Dietrich');
            expect(jsonData[5].name).to.equal('Mrs. Dennis Schulist');
            expect(jsonData[6].name).to.equal('Kurtis Weissnat');
            expect(jsonData[7].name).to.equal('Nicholas Runolfsdottir V');
            expect(jsonData[8].name).to.equal('Glenna Reichert');
            expect(jsonData[9].name).to.equal('Clementina DuBuque');
        });
    });
});
