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

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/app', express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'app', 'html', 'main.html'), 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get("/sds", (req, res) => {
    fs.readFile(path.join(__dirname, 'app', 'html', 'sds.html'), 'utf8', (err, data) => {
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