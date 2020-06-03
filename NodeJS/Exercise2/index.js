const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
var fs = require('fs');

app.use(fileUpload());
app.set('view engine','pug');

const port = 3000;
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/upload',(req,res)=>{
    res.render('upload');
})
app.post('/upload',(req,res)=>{
    if(!req.files){
        res.send('No Files were uploaded')
    }
    else{
        let file = req.files.uploadFile;
        file.mv("./Upload/uploadedFile.txt",(err)=>{
            if(err){
                return res.send(err);
            }
            else{
                return res.send("Uploaded")
            }
        })
    }
})
app.get('/download', (req, res)=>{
    const file = './Upload/uploadedFile.txt';
    res.download(file); 
});

app.get('/fsupload',(req,res)=>{
    res.render('fsupload')
})
app.post('/fsupload',(req,res)=>{
    let data = fs.readFileSync('./text.txt','utf8');
    fs.writeFileSync('./Upload/uploadedFSFile.txt',data);
    res.send("Uploaded")
    // fs.readFile('./text.txt','utf8',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         content = data;
    //         console.log(content);
    //         res.send(content);
    //     }
    // })
})
app.get('/fsdownload',(req,res)=>{
    let data = fs.readFileSync('./text.txt','utf8');
    fs.writeFileSync('./Download/downloadedFSFile.txt',data);
    res.send("Downloaded")
})
app.listen(port);
