
 // systemjs format
// import flana from flanPath;

// commonJS format
// let some = requre(flanPath)

let myExpress = require('express');

// request-response system

let meriApp = myExpress();

// POST, create data
// PUT, update data
// GET, receive data
// DELETE, delete data

meriApp.get('/names', function(req, res){

    let users = [
        {
            name:"ali"
        },
        {
            name:"rameez"
        },
        {
            name:"aqsa"
        }
    ]
    res.json(users);

    // res.end("m5 is chaling")
})

meriApp.get('/abc', function(reqeust, response){
    response.json({
        name:"khurram",
        city:"FSD"
    });
    // response.sendfile('./server/data.jpg');
    // response.end("haha")
});

meriApp.use(myExpress.static('./newapp/server/build'))

meriApp.listen(3002, function(){
    console.log("server chaling now");
})

// let data = require('./cooking');

// console.log("code is chaling");