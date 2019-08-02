
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('dsa.pdf', (err) => {
      if(err) {
          return console.log('error has occured');
      }
  res.send(Promise.resolve())
    });
  })

  app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/dsa.pdf`);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
