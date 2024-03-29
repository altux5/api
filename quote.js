var express = require('express');
var app = express();

var quotes = [
  {
    id: 1, author: 'Audrey Hepburn', text: "Nothing is impossible, the word itself says 'I'm possible'!",
  },
  {
    id: 2, author: 'Walt Disney', text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you",
  },
  {
    id: 3, author: 'Unknown', text: "Even the greatest was once a beginner. Don’t be afraid to take that first step.",
  },
  {
    id: 4, author: 'Neale Donald Walsch', text: "You are afraid to die, and you’re afraid to live. What a way to exist.",
  }
];



app.use(express.bodyParser());

app.get('/', function (req, res) {
  res.json(quotes);
});

app.get('/quote/random', function (req, res) {
  var i = Math.floor(Math.random() * quotes.length);
  var q = quotes[i];
  res.json({
    author:q.author,
    text:q.text,
  });
});

app.get('/quote/:id', function (req, res) {
  if (quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  var q = quotes.find(q => {q.id === req.params.id});
  if(!q){
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  res.json({
    author:q.author,
    text:q.text,
  });
});

app.post('/quote', function (req, res) {
  if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
  var newQuote = {
    author: req.body.author,
    text: req.body.text,
  };

  quotes.push(newQuote);
  res.json(true);
  i++;
});

app.delete('/quote/:id', function (req, res) {
  if (quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  quotes.splice(req.params.id, 1);
  res.json(true);
});

app.listen(process.env.PORT || 3412);
