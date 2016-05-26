// index.js start of file
var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = new express();
app.use(bodyParser.json());

var mime = require('mime');
app.use(express.static('uploads'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// index.js continued
app.get('/', function(req, res){
  res.render('index');
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,__dirname+'/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname); // modified here  or user file.mimetype
  }
})

var upload = multer({ storage: storage });

app.post('/', upload.single('upl'), function(req,res){
    console.log(req.body);

     //form fields
    /* example output:
    { title: 'abc' }
     */
    console.log(req.file); //form files
    /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
     */
     res.writeHead(200, {'Content-Type': 'text/html' });
    res.end("<img height='300' width = '300' src='"+req.file['filename']+"'>");
});

// index.js end of file
var port = 3000;
app.listen( port, function(){ console.log('listening on port '+port); } );