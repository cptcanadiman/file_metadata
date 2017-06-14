var express = require("express");
var multer = require("multer");
var app = express();
var upload = multer()

app.use(express.static("Pubic"))

app.post('/filesize', upload.single('filetosize'), function (req, res) {
 res.json({"size":req.file.size})
})

app.listen(process.env.PORT || 8080, function(){
    console.log("App listenting on port 8080")
})