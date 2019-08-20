<template>
  <div class="flex-container">
    <div>
      <div id="headline">
        <h2>Family Tree</h2>
        <h5>Add a Child to the Tree!</h5>
      </div>
      <div>
        <ul class="ulnav">
          <li class="linav">
            <a class="active">
              Name of Parent:
              <select v-model="selectedParent">
                <option :value="item" :key="item" v-for="item in parents">{{item}}</option>
              </select>
            </a>
          </li>
          <li class="linav">
            <a>
              Name of Child
              <input v-model="childName" type="text" />
            </a>
          </li>
          <li class="linav">
            <a>
              Surname
              <input v-model="childSurName" type="text" />
            </a>
          </li>
          <li class="linav">
            <a>
              Married?
              <input type="checkbox" v-model="isMarried" />
              <li class="linav" v-show="isMarried">
            <a>
              Wife Name
              <input v-model="childsWife" type="text" />
            </a>
          </li>
          <li class="linav" v-show="isMarried">
            <a>
               Wife's Birth Date
              <input v-model="wifeDate" type="text" />
            </a>
          </li>
            </a>
          </li>
          

          <li class="linav">
            <a>
              Date of Birth
              <input
                v-model="birthDate"
                type="text"
                placeholder="____________year____________"
              />
            </a>
          </li>
          <li class="linav">
            <a>
              Address
              <input v-model="Address" type="text" />
            </a>
          </li>
          <li class="linav">
            <a>
              Deceased?
              <input type="checkbox" v-model="isDeceased" />
              <li class="linav" v-show="isDeceased">
            <a>
              Date of death
              <input
                v-model="deathDate"
                type="text"
                placeholder="____________year____________"
              />
            </a>
          </li>
          <li class="linav" v-show="isDeceased">
            <a>
              Graveyard Address
              <input v-model="graveyardAddress" type="text" />
            </a>
          </li>
            </a>
          </li>
          
          <li class="linav">
            <a>
              Add Picture url
              <input v-model="Picture" type="text" />
            </a>
            <button @click="onAddNewChild()">Add the Child</button>
          </li>
           <br>
          <li class="linav">
          <a class="active">             
              <select v-model="selectedChild">
                <option :value="item" :key="item" v-for="item in parents">{{item}}</option>
              </select>
              <button @click="onDeleteChild()">Delete the Child</button>
              
            </a>
          </li>
          
        </ul>
      </div>
    </div>

    <div class="tree"></div>
    <div id="fyi">
      <h6>red=deceased*</h6>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  data () {
    return {
      lastID: 0,
      parents: [],
      childs: [],
      birthDate: '',
      Address: '',
      graveyardAddress: '',
      deathDate: '...',
      childName: '',
      childSurName: '',
      isMarried: false,
      isDeceased: false,
      selectedParent: '',
      selectedChild: '',
      Picture: '',
      childsWife: '',
      wifeDate: '',
      isChecked: true,
      data: [],
    }
  },
  methods: {
    getParents (node) {
      let data
      if (!node) {
        data = this.data
      } else {
        data = node
      }
      data.forEach(d => {
        this.parents.push(d.name)
        if (d.children) {
          this.getParents(d.children)
        }
      })
    },


   onDeleteChild () {
          this.deleteChild(this.data);
    },

    deleteChild(data) {
      let _self = this ;

       for (let i = 0; i < 14; i++) {
        if (_self.selectedChild === data[i].name) {
          _self.$delete(data, i);
          }
        } 
         

    },


    onAddNewChild () {
      axios.post("http://localhost:3412/family/add").then(response => {
      this.data = response.data;
    })

      this.addNewChild(this.data)
      this.parents = []
      this.getParents(this.node)

    },
      addNewChild (data) {

      


      let _self = this
      for (let i = 0; i < data.length; i++) {
        if (_self.selectedParent === data[i].name) {
          if (!data[i].children) {
              if (_self.Picture === "") {
              _self.Picture = "https://yt3.ggpht.com/a/AGF-l7-p82EvPJCAnJihnAfjmoB1OsAgp0CvHzxTng=s288-c-k-c0xffffffff-no-rj-mo" ;
            }
            data[i].children = []
            if(_self.isMarried) {
              data[i].children.push({
              name: _self.childName,
              id: _self.getID(),
              deceased: _self.isDeceased,
              surname: _self.childSurName,
              adress: _self.Address,
              graveyard: _self.graveyardAddress,
              dateofbirth: _self.birthDate,
              dateofdeath: _self.deathDate,
              img: _self.Picture,
              wife: {
                name: _self.childsWife,
                deceased: false,
                surname: _self.childSurName,
                dateofbirth: _self.wifeDate,
                img:
                  'https://yt3.ggpht.com/a/AGF-l7-p82EvPJCAnJihnAfjmoB1OsAgp0CvHzxTng=s288-c-k-c0xffffffff-no-rj-mo',
                dateofdeath: '...',
              }
            })
            
            }
            else {
            data[i].children.push({
              name: _self.childName,
              id: _self.getID(),
              deceased: _self.isDeceased,
              surname: _self.childSurName,
              adress: _self.Address,
              graveyard: _self.graveyardAddress,
              dateofbirth: _self.birthDate,
              dateofdeath: _self.deathDate,
              img: _self.Picture,
            })
            }
          } else {
              if (_self.Picture === "") {
              _self.Picture = "https://yt3.ggpht.com/a/AGF-l7-p82EvPJCAnJihnAfjmoB1OsAgp0CvHzxTng=s288-c-k-c0xffffffff-no-rj-mo" ;
            }
            if(_self.isMarried) {
              data[i].children.push({
              name: _self.childName,
              id: _self.getID(),
              deceased: _self.isDeceased,
              surname: _self.childSurName,
              adress: _self.Address,
              graveyard: _self.graveyardAddress,
              dateofbirth: _self.birthDate,
              dateofdeath: _self.deathDate,
              img: _self.Picture,
              wife: {
                name: _self.childsWife,
                deceased: false,
                surname: _self.childSurName,
                dateofbirth: _self.wifeDate,
                img:
                  'https://yt3.ggpht.com/a/AGF-l7-p82EvPJCAnJihnAfjmoB1OsAgp0CvHzxTng=s288-c-k-c0xffffffff-no-rj-mo',
                  dateofdeath: '...',
              }
            })
            }
            else {
            data[i].children.push({
              name: _self.childName,
              id: _self.getID(),
              deceased: _self.isDeceased,
              surname: _self.childSurName,
              adress: _self.Address,
              graveyard: _self.graveyardAddress,
              dateofbirth: _self.birthDate,
              dateofdeath: _self.deathDate,
              img: _self.Picture,
            })
            }
          }
          
          _self.drawFamilyTree()
          _self.Picture = ''
          _self.childName = ''
          _self.childSurName = ''
          _self.Address = ''
          _self.graveyardAddress = ''
          _self.isDeceased = false
          _self.isMarried = false
          _self.deathDate = ''
          _self.birthDate = ''
          _self.childsWife = ''
          _self.wifeDate = ''
          
          return
        }
        if (data[i].children) {
          _self.addNewChild(data[i].children)
        }
      } 

      console.log(JSON.stringify(this.data))
    }, 
    getID () {
      let lastID = this.getLastID(this.data)
      return lastID + 1
    },
    getLastID (data) {
      let _self = this
      for (let i = 0; i < data.length; i++) {
        if (data[i].id > _self.lastID) {
          _self.lastID = data[i].id
        }
        if (data[i].children) {
          _self.getLastID(data[i].children)
        }
      }
      return _self.lastID
    },
    buildList (data, isSub) {
      var html = isSub ? '<div>' : '' // Wrap with div if true
      html += '<ul>'
      for (let i = 0; i < data.length; i++) {
        html += '<li>'
        if (typeof data[i].children !== 'undefined') {
          if (!data[i].deceased && data[i].wife) {
            html +=
              '<a>' +
              '<b>' +
              data[i].surname  + 
              "'s " + 
              '</b>' +
              '<section>' +
              "<aside class='aside1'>" +
              "<p class='birthdate'>" +
              data[i].dateofbirth +
              '--' +
              data[i].dateofdeath +
              '</p>' +
              data[i].name +
              "<img src='" +
              data[i].img +
              "' alt='picture'>" +
              '</aside>' +
              "<aside class='aside2'>" +
              "<p class='birthdate'>" +
              data[i].wife.dateofbirth +
              '--' +
              data[i].wife.dateofdeath +
              '</p>' +
              "<img src='" +
              data[i].wife.img +
              "' alt='picture'>" +
              data[i].wife.name +
              '</aside>' +
              '</section>' +
              'Adress:' +
              data[i].adress +
              '</a>'
          } else if (data[i].deceased && data[i].wife) {
            html +=
              '<a>' +
              '<b>' +
              data[i].surname +
              "'s" +
              '</b>' +
              '<section>' +
              "<aside class='aside1_deceased'>" +
              "<p class='birthdate'>" +
              data[i].dateofbirth +
              ' -- ' +
              data[i].dateofdeath +
              '</p>' +
              "<img src='" +
              data[i].img +
              "' alt='picture'>" +
              data[i].name +
              '<br>' +
              'graveyard:' +
              data[i].graveyard +
              '</aside>' +
              "<aside class='aside2'>" +
              "<p class='birthdate'>" +
              data[i].wife.dateofbirth +
              '--' +
              data[i].wife.dateofdeath +
              '</p>' +
              "<img src='" +
              data[i].wife.img +
              "' alt='picture'>" +
              data[i].wife.name +
              '</aside>' +
              '</section>' +
              'Adress:' +
              data[i].adress +
              '</a>'
          } else if (!data[i].deceased) {
            html +=
              '<a>' +
              '<b>' +
              data[i].surname +
              "'s" +
              '</b>' +
              '<section>' +
              "<aside class='aside1'>" +
              "<p class='birthdate'>" +
              data[i].dateofbirth +
              '--' +
              data[i].dateofdeath +
              '</p>' +
              data[i].name +
              "<img src='" +
              data[i].img +
              "' alt='picture'>" +
              '</aside>' +
              '</section>' +
              'Adress:' +
              data[i].adress +
              '</a>'
          } else {
            html +=
              '<a>' +
              '<b>' +
              data[i].surname +
              "'s" +
              '</b>' +
              '<section>' +
              "<aside class='aside1_deceased'>" +
              "<p class='birthdate'>" +
              data[i].dateofbirth +
              ' -- ' +
              data[i].dateofdeath +
              '</p>' +
              "<img src='" +
              data[i].img +
              "' alt='picture'>" +
              data[i].name +
              '<br>' +
              'graveyard:' +
              data[i].graveyard +
              '</aside>' +
              '</section>' +
              'Adress:' +
              data[i].adress +
              '</a>'
          }
          html += this.buildList(data[i].children, isSub) // Submenu found. Calling recursively same method (and wrapping it in a div)
        } else if (!data[i].deceased && data[i].wife) {
          html +=
            '<a>' +
            '<b>' +
            data[i].surname +
            "'s" +
            '</b>' +
            '<section>' +
            "<aside class='aside1'>" +
            "<p class='birthdate'>" +
            data[i].dateofbirth +
            '--' +
            data[i].dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].img +
            "' alt='picture'>" +
            data[i].name +
            '</aside>' +
            "<aside class='aside2'>" +
            "<p class='birthdate'>" +
            data[i].wife.dateofbirth +
            '--' +
            data[i].wife.dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].wife.img +
            "' alt='picture'>" +
            data[i].wife.name +
            '</aside>' +
            '</section>' +
            'Adress:' +
            data[i].adress +
            '</a>'
        } else if (data[i].deceased && data[i].wife) {
          html +=
            '<a>' +
            '<b>' +
            data[i].surname +
            "'s" +
            '</b>' +
            '<section>' +
            "<aside class='aside1_deceased'>" +
            "<p class='birthdate'>" +
            data[i].dateofbirth +
            ' -- ' +
            data[i].dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].img +
            "' alt='picture'>" +
            data[i].name +
            '<br>' +
            '<br>' +
            'graveyard:' +
            data[i].graveyard +
            '</aside>' +
            "<aside class='aside2'>" +
            "<p class='birthdate'>" +
            data[i].wife.dateofbirth +
            '--' +
            data[i].wife.dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].wife.img +
            "' alt='picture'>" +
            data[i].wife.name +
            '</aside>' +
            '</section>' +
            'Adress:' +
            data[i].adress +
            '</a>'
        } else if (!data[i].deceased) {
          html +=
            '<a>' +
            '<b>' +
            data[i].surname +
            "'s" +
            '</b>' +
            '<section>' +
            "<aside class='aside1'>" +
            "<p class='birthdate'>" +
            data[i].dateofbirth +
            '--' +
            data[i].dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].img +
            "' alt='picture'>" +
            data[i].name +
            '</aside>' +
            '</section>' +
            'Adress:' +
            data[i].adress +
            '</a>'
        } else {
          html +=
            '<a>' +
            '<b>' +
            data[i].surname +
            "'s" +
            '</b>' +
            '<section>' +
            "<aside class='aside1_deceased'>" +
            "<p class='birthdate'>" +
            data[i].dateofbirth +
            ' -- ' +
            data[i].dateofdeath +
            '</p>' +
            "<img src='" +
            data[i].img +
            "' alt='picture'>" +
            data[i].name +
            '<br>' +
            '<br>' +
            'graveyard:' +
            data[i].graveyard +
            '</aside>' +
            '</section>' +
            'Adress:' +
            data[i].adress +
            '</a>'
        }
        html += '</li>'
      }
      html += '</ul>'
      html += isSub ? '</div>' : ''
      return html
    },
    drawFamilyTree () {
      document.querySelector('.tree').innerHTML = this.buildList(
        this.data,
        false      
      )
      
    }
  },
  mounted () {
    axios.get("http://localhost:3412/family").then(response => {
      this.data = response.data;
      this.getParents()
      this.drawFamilyTree()
    })
  }
}
</script>
<style>

* {
  margin: 0;
  padding: 0;
}
section:after {
  content: "";
  display: table;
  clear: both;
}
.aside1,
.aside1_deceased {
  float: left;
  border: solid blue;
  position: relative;
}
.aside1_deceased {
  background-color: rgb(94, 12, 12);
}
.aside2,
.aside2_deceased {
  float: left;
  border: solid green;
}
.aside2_deceased {
  background-color: rgb(94, 12, 12);
}
#headline {
  font-family: Verdana;
  font-size: 75.7%;
  background-color: black;
  color: white;
}
.birthdate {
  font-family: Verdana;
  font-size: 75.7%;
  background-color: black;
  color: white;
}
img {
  width: 30px;
  height: 30px;
  float: left;
}

#fyi {
  font-family: Verdana;
  font-size: 100%;
  color: black;
}
input {
  width: 200px;
  height: 16px;
}
select {
  width: 150px;
  height: 16px;
}
.flex-container {
  display: flex;
}
.flex-container > div {
  background-color: #f1f1f1;
  padding: 5px;

  text-align: center;
  font-size: 30px;
}
.tree ul {
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
.tree li {
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}
.tree li:only-child {
  padding-top: 0;
}
.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}
.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}
.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}
.tree li a {
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 11px;
  display: inline-block;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}
.wife {
  margin-left: 10px;
}
.deceasedWife {
  margin-left: 10px;
  background-color: rgb(117, 25, 25);
}
.ulnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 250px;
  background-color: #f1f1f1;
  height: 100%;
  overflow: auto;
  font-size: 80%;
  font-family: verdana;
}
.linav a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}
.linav a.active {
  background-color: #4caf50;
  color: white;
}
.linav a:hover:not(.active) {
  background-color: #555;
  color: white;
}
.deceased {
  background-color: rgb(117, 25, 25);
}
b {
  color: rgb(235, 172, 0);
  font-size: 120%;
}

.delete {
  background-color: red;
  color: white;
  border: #000;
}


</style>