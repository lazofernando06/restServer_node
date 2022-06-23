const sql = require('mssql');
const production = true;
const config = {

    user: 'sa',
    password: '123456',
    database: 'UserRecord',
    server: 'localhost',

    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        //trustedconnection: false,
        //enableArithAbort: true,
        encrypt: false
    }

}

const dbConnection = async () => {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dbConnection
}

/**
 *  LAPTOP-LAZOFERN
 * 
 */