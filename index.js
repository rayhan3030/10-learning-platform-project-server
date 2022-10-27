const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//সব সার্ভার বানাইতেই উপরের জিনিস গুলো লাগে

const port = process.env.PORT || 5000;

const categories = require("./Data/category.json")
const course = require("./Data/courses.json");

app.get('/', (req, res) => {
    res.send('Course API Running yay');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(course);
    }
    else {
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course);
    }


})
app.get('/courses', (req, res) => {
    res.send(course);
})


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = course.find(n => n._id === id);
    res.send(selectedcourse);
})

app.listen(port, () => {
    console.log(' course Server Running on Port ', port);
})