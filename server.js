
const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express')
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
const login    = require('./routes/login-route');
const register = require('./routes/register-route');
const usersRoutes = require('./routes/users-route');
const profileRoutes = require('./routes/profile-route');

app.use(login);
app.use(register);
app.use(usersRoutes);
app.use(profileRoutes);
app.use(cors);

    











app.listen(3000, function() {
    console.log("listennn")
})