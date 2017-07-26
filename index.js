const data = require("./data.js");
const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));

app.get('/', function(req, res){

res.render('index', {users: data.users});


});




//
for (let i = 0; i < data.users.length; i++){
  if(data.users[i].job === null){
    delete data.users[i].job;
    data.users[i].job = "Available for hire";
  }
};

app.listen(3000, function(){


  console.log("Successfully started express application");
});
