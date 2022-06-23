const express = require('express');
const app = express();
const  {dbConnection} = require('./dababase/config');
const sql = require('mssql');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'fernando'
    });
});

app.get('/elError', async(req, res) => {

    try {
        const pool = (await dbConnection());
        const result = await pool
            .request()
            .input('limite', sql.Int, this._idUser)
            .input('desde', sql.Int, this._idUser)
            .query('GET_SP_SELECT_User @idUser')
    
        res.json({
            result
        });     
    } catch (error) {
        console.log(error);
    }



});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});