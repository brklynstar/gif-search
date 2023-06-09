const handlebars = require('express-handlebars');

// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware ler

//allow Express (our web framework) to render HTML templates and send them back to the client using a new function

const hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo() { return 'FOO!'; },
        bar() { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes

  app.get('/home', (req, res) => {
    res.render('home')
  })

  app.get('/', (req, res) => {
    // set the url of the gif
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    // render the hello-gif view, passing the gifUrl into the view to be displayed
    res.render('hello-gif', { gifUrl })
  })

app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view, passing along the name
    res.render('greetings', { name });
  })


app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})


// Start Server

//tells the app to log a message on port 3000. Once we start the server, we should see that message in the terminal 
app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});