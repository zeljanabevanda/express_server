
const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express')
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
const register = require('./routes/register-route');
const usersRoutes = require('./routes/users-route');
    
app.use(register);
app.use(usersRoutes);
app.use(cors);

    











app.listen(3000, function() {
    console.log("listennn")
})