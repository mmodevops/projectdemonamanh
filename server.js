const express = require('express');
// require('express) ben trong modulues de luu vao bien express 
const app = express();
//khi khoi tao function sau khi khoi tao no se tra ve 1 doi tuong de xay dung 1 website 

//Bien port de minh co the khoi chay theo cong tuyen 3000
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
app.use(morgan('combined'));
// Template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

// app.listen(process.env.PORT, function() {
// });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});