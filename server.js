const express = require('express');
const app = express();
const port = 3000;
const containingFolder = "build";
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(containingFolder, 'index.html'));
})

app.get('/static/*', (req, res) =>  {
  res.sendFile(path.resolve("./" + containingFolder + req.originalUrl));
});

app.get('/static/*', (req, res) =>  {
  res.sendFile(path.resolve("./" + containingFolder + req.originalUrl));
});

app.get('/images/*', (req, res) =>  { 
  res.sendFile(path.resolve("./" + containingFolder + req.originalUrl));
});

app.get('*', (req, res) => res.sendFile(path.resolve(containingFolder, 'index.html')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})