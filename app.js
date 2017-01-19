var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var multer = require('multer');
var upload = multer({dest: './upload'});

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("index");

})

app.post('/', upload.single('file'), function(req, res,next){

  console.log(req.file.size);
  res.send({"File Size ":req.file.size});
});

app.listen(port, function(){
  console.log(`File Metadata Service listening on port ${port}`);
});
