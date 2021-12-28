const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const PORT = 5000; 
const fs = require('fs'); //to write to file
app.use(express.json()) //to read json
app.use(cors());
const content = './content.json'
const comments = './comments.json'

app.use(express.static(path.join(__dirname, '../public')));
//app.use(express.static(path.join(__dirname, '../build')));

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS totally CONNECTED TO REACT' }); 
});

app.get('/getcomments', (req, res) => {
  
  fs.readFile(comments, 'utf-8', (err, data) => {
      if (err) {
          return res.status(500).json({
              error: err.message
          })
      }
      const result = JSON.parse(data)
      console.log(result)
      res.status(200).json(result)
  })
});

app.get('/getcontent', (req, res) => {
  fs.readFile(content, 'utf-8', (err, data) => {
      if (err) {
          return res.status(500).json({
              error: err.message
          })
      }
      const result = JSON.parse(data)
      console.log(result)
      res.status(200).json(result)
  })
});

// to upload list: 
app.post('/postcomments', (req, res) => {
  fs.writeFile(comments, JSON.stringify(req.body), function (err) {
      if (err) return console.log(err);
      let result = (req.body);
      
      res.status(200).json(result);
  });
});

// to upload list: 
app.post('/postcontent', (req, res) => {
  console.log(req.body)
  fs.writeFile(content, JSON.stringify(req.body), function (err) {
      if (err) return console.log(err);
      let result = (req.body);
      
      res.status(200).json(result);
  });
});

// to clear list
// app.post('/clear', (req, res) => {
//   fs.writeFile('../public/sitedata.json', '[]', function (err) {
//       if (err) return console.log(err);
//       let result = (req.body);
//       res.status(200).json(result);
//   });
// });


app.listen(PORT, () => {
  console.log(`Blog server listening at http://localhost:${PORT}`)
})
