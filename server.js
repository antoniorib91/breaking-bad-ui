const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist/breaking-bad-ui')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/breaking-bad-ui','index.html'))
});

app.listen(4000, () => console.log(`Running on http://localhost:4000`));
