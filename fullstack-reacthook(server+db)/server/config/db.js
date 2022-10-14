var mysql=require('mysql')
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'slmgkew47362!',
    database:'node_db',
    port:3307
})
module.exports=db;