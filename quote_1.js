var express = require('express');
var app = express();
var i=5;
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

var quote1 = [];



app.use(express.bodyParser());

app.get('/', function (req, res) {

  res.json(quotes);
});

app.get('/quote/random', function (req, res) {
  var is = Math.floor(Math.random() * quotes.length);
  var q = quotes[is];
  res.json({
    author:q.author,
    text:q.text,
  });
});

app.get('/quote/:id', function (req, res) {

  var findQ = quotes.find(q => {return q.id === parseInt(req.params.id)});
  if(!findQ){
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  res.json({
    author:findQ.author,
    text:findQ.text,
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
    id: i,
  };

  quotes.push(newQuote);
  res.json(true);
  i++;
});

app.delete('/quote/:id', function (req, res) {
  var q = quotes.find(q =>  {return q.id === parseInt(req.params.id)});
  if(!q){
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  quotes.splice(q.id-1, 1);
  res.json(true);
});

app.put('/quote/:id', function(req,res) {
  if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
  var q = quotes.find(q =>  {return q.id === parseInt(req.params.id)});
  if(!q){
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  quotes[q.id-1] = {
    id : q.id,
    author : req.body.author,
    text : req.body.text,
  }

  res.json(true);
});
