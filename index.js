const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

// Configure session middleware
app.use(session({
    secret: 'ThorstenEwaldForPresident',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/text', express.static(path.join(__dirname, 'text')));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'main.html'), 'utf8', (err, data) => {
        res.send(data);
    });
});

app.use((req, res, next) => {
    res.status(404);
    res.send("Page not found - 404");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});