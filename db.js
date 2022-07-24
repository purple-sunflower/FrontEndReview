var mysql=require('mysql')
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'node_db',
    port:4000
})
module.exports=db;