var PORT = 8989 || process.evn.PORT;
var DB = 'mongodb://localhost/mean2demo'; 

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',mainRouter);
app.use('/api',apiRouter);

mongoose.connect(DB,function(err){
    if(err){
        return err;
    }else{
        console.log('Successfully connect to DB:: '+DB);
    }
});

app.set('views',__dirname + '/client/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile)
app.use(express.static(path.join(__dirname +  'client')));
//app.use('/node_module',express.static(path.join(__dirname +  '/client/node_module')));
app.use('/node_modules', express.static(__dirname + '/client/node_modules/'));
app.use('/client', express.static(__dirname + '/client/'));
app.use('/app', express.static(__dirname + '/client/app'));


app.listen(PORT, function(){
    console.log('listen on PORT:: ' + PORT);
   
});
