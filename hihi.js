var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./views/routes/user.route');

var port = 2000;

var app =  express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.render('index',{
        name: 'Đăng Hào'
    });
});

app.use('/hihi',userRoute);

app.listen(port,function(){
    console.log('Server listening on port'+ port);
});