
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const PORT = require('./utils/utils').PORT;
const DB = require('./database/database.mongoose');
const fondosRouter = require('./router/fondos/new-fondo.router')

DB();

app.set('port', PORT)

//Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/api', fondosRouter);

app.listen(app.get('port'), () => {
    console.log(`Server in running on port ${app.get('port')}`);
})