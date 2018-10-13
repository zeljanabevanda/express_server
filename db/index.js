
const pgp = require ("pg-promise")();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'communityApp',
    user: 'postgres',
    password: 1234
};

const db = pgp(cn);
db.one('SELECT $1 AS value ', 123).then((data) => {
    console.log('data', data.value);
}).catch((err) => {
    console.log('eror', err);
});
module.exports = db;
