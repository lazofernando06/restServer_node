require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;


//midderware servit contenido estatico

app.use(express.static('public'));






app.get('*', (req, res) => {
    //res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${port}`)
});