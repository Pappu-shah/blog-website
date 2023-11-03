import express from "express";
import bodyParser from "express";

const app = express();
const port = 3000;
var number = [];
var titles = [];
var contents = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        titles: titles,
        contents: contents
    });
});

app.get("/new-post", (req, res) => {
    res.render("index.ejs", {
        show: "new-post"
    });
});

app.post("/add-post", (req, res) => {
    if (number === "") {
        number.push(number.length);
    } else {
        number.push(number.length+1);
    }
    titles.push(req.body['title']);
    contents.push(req.body['content']);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});