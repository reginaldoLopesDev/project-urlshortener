require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Url = require('./ShortUrl');
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
app.post('/api/shorturl', function(req, res) {
  const originalUrl = req.body.url;
  let url = new Url();
  let shortedUrl = url.short(originalUrl);
  res.json({ "original_url": originalUrl, "short_url": shortedUrl });
});
app.get('/api/shorturl/:shortedUrl?', function(req, res) {
  const shortedUrl = req.params.shortedUrl;
  let url = new Url();
  let original_url = url.get(shortedUrl)
  res.redirect(original_url);

})
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
