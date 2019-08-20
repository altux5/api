var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());

var family = [
  {
    name: 'Baba',
    surname: 'soyad',
    deceased: true,
    adress: 'Itu_TEqnoKentxdé',
    graveyard: 'Zincirlikuyu',
    dateofbirth: '1899',
    dateofdeath: '2009',
    id: 1,
    img:
      'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
    wife: {
      name: 'Anne',
      surname: 'soyad',
      deceased: true,
      adress: 'Itu_TEqnoKentxdé',
      graveyard: 'Zincirlikuyu',
      dateofbirth: '1909',
      dateofdeath: '2009',
      id: 2,
      img:
        'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
    },
    children: [
      {
        name: 'Çocuk 1',
        surname: 'soyad',
        deceased: true,
        adress: 'Itu_TEqnoKentx',
        graveyard: 'Zincirlikuyu',
        dateofbirth: '1932',
        dateofdeath: '2009',
        id: 3,
        img:
          'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
        wife: {
          name: 'Gelin 1',
          surname: 'soyad',
          deceased: false,
          adress: 'Itu_TEqnoKentx',
          graveyard: 'Zincirlikuyu',
          dateofbirth: '1937',
          dateofdeath: '...',
          id: 4,
          img:
            'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
        },
        children: [
          {
            name: 'Torun 1',
            surname: 'soyad',
            deceased: false,
            adress: 'Itu_TEqnoKentx',
            graveyard: 'Zincirlikuyu',
            dateofbirth: '1957',
            dateofdeath: '...',
            img:
              'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
            id: 5,
            wife: {
              name: 'Gelin 2',
              surname: 'soyad',
              deceased: false,
              adress: 'Itu_TEqnoKentx',
              graveyard: 'Zincirlikuyu',
              dateofbirth: '1958',
              dateofdeath: '...',
              id: 6,
              img:
                'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
            },
            children: [
              {
                name: 'torun',
                surname: 'soyad',
                deceased: false,
                adress: 'Itu_TEqnoKentxdé',
                graveyard: 'Zincirlikuyu',
                dateofbirth: '1979',
                dateofdeath: '...',
                id: 7,
                img:
                  'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
                wife: {
                  name: 'gelin',
                  surname: 'soyad',
                  deceased: false,
                  adress: 'Itu_TEqnoKentx',
                  graveyard: 'Zincirlikuyu',
                  dateofbirth: '1979',
                  dateofdeath: '...',
                  id: 8,
                  img:
                    'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
                }
              }
            ]
          },
          {
            name: 'Torun 2',
            surname: 'soyad',
            deceased: true,
            adress: 'Itu_TEqnoKentxdé',
            graveyard: 'Zincirlikuyu',
            dateofbirth: '1979',
            dateofdeath: '2009',
            img:
              'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
            id: 9
          }
        ]
      },
      {
        name: 'Çocuk 2',
        surname: 'soyad',
        deceased: false,
        adress: 'Itu_TEqnoKentx',
        graveyard: 'Zincirlikuyu',
        dateofbirth: '1979',
        dateofdeath: '...',
        id: 10,
        img:
          'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
        wife: {
          name: 'Damat 1',
          surname: 'soyad',
          deceased: true,
          adress: 'Itu_TEqnoKentx',
          graveyard: 'Zincirlikuyu',
          dateofbirth: '1979',
          dateofdeath: '2009',
          id: 11,
          img:
            'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
        },
        children: [
          {
            name: 'Torun 3',
            surname: 'soyad',
            deceased: false,
            adress: 'Itu_TEqnoKentx',
            graveyard: 'Zincirlikuyu',
            dateofbirth: '1979',
            dateofdeath: '...',
            id: 12,
            img:
              'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo',
            wife: {
              name: 'Gelin 3',
              surname: 'soyad',
              deceased: false,
              adress: 'Itu_TEqnoKentx',
              graveyard: 'Zincirlikuyu',
              dateofbirth: '1979',
              dateofdeath: '...',
              id: 13,
              img:
                'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
            }
          }
        ]
      },
      {
        name: 'Çocuk 3',
        surname: 'soyad',
        deceased: false,
        adress: 'Itu_TEqnoKentx',
        graveyard: 'Zincirlikuyu',
        dateofbirth: '1979',
        dateofdeath: '...',
        id: 14,
        img:
          'https://yt3.ggpht.com/a-/AAuE7mCRisHr41S7x8M443ukE2t5TRE3PHCB_mfKxA=s48-c-k-c0xffffffff-no-rj-mo'
      }
    ]
  }
];
var selectedParent = '';


app.use(express.bodyParser());

app.get('/family', function (req, res) {
  res.json(family);
});

app.post('/family/add', function(req,res){
  this.selectedParent = req.body.selectedParent;
  for(let i=0; i<family.length; i++){
    if(this.selectedParent == family[i].name) {
      if(!family[i].children) {
          family[i].children = [];
      }
          family[i].children.push({
          name: req.body.childName,
        })
      }
    
    }
})

/*
app.get('/quote/:id', function (req, res) {
  var findQ = quotes.find(q => { return q.id === parseInt(req.params.id) });
  if (!findQ) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  res.json({
    author: findQ.author,
    text: findQ.text,
  });
});

app.post('/quote', function (req, res) {
 /* if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } */
 /* var newQuote = {
    author: req.body.author,
    text: req.body.text,
    id: i,
  }; 
  quotes.push(newQuote);
  res.json(true);
  i++;
  var newNode = {
    selectedParent: req.body.selectedParent,
    childName: req.body.childName,
  }
  return res.send(newNode);
});

app.delete('/quote/:id', function (req, res) {
  var q = quotes.find(q => { return q.id === parseInt(req.params.id) });
  if (!q) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  quotes.splice(q.id - 1, 1);
  res.json(true);
});

app.put('/quote/:id', function (req, res) {
  if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
  var q = quotes.find(q => { return q.id === parseInt(req.params.id) });
  if (!q) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  quotes[q.id - 1] = {
    id: q.id,
    author: req.body.author,
    text: req.body.text,
  }
  res.json(true);
});
*/

app.listen(process.env.PORT || 3412);

 