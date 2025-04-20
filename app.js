const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index");

});

app.get('/login', (req, res) => {
    res.render("login");

});

app.get('/profile', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });
    let posts = await postModel.find().populate("user", "username");  // Populate only the 'username' field of 'user'
    res.render("profile", { user, posts });
});


app.get('/like/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid);
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }
    await post.save();
    res.redirect("/profile");
});

app.get('/edit/:id', isLoggedIn, async (req, res) => {
let post = await postModel.findOne({ _id: req.params.id }).populate("user");
res.render("edit",{post});

});

app.get('/delete/:id', isLoggedIn, async (req, res) => {
    // Find the post by its ID and delete it
    await postModel.findByIdAndDelete(req.params.id);

    // After deleting, redirect the user to their profile page
    res.redirect('/profile');
});

app.get('/option', (req, res) => {
    res.render("option");  // This will render the 'option.ejs' view, assuming you have one
});

app.get('/options', (req, res) => {
    res.render("options");  // This will render the 'option.ejs' view, assuming you have one
});





app.post('/update/:id', isLoggedIn, async (req, res) => {
    const { content, image } = req.body;

    await postModel.findOneAndUpdate(
        { _id: req.params.id },
        { content, image }
    );

    res.redirect("/profile");
});



    app.post("/post", isLoggedIn, async (req, res) => {
        let user = await userModel.findOne({ email: req.user.email });
        let { content, image } = req.body;
    
        let post = await postModel.create({
            user: user._id,
            content,
            image // store the image URL
        });
    
        user.posts.push(post._id);
        await user.save();
        res.redirect("/profile");
    });
    
app.post('/register', async (req, res) => {
    let { email, password, username, age, name } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(302).redirect("/options");

    bcrypt.genSalt(10, (err, salt) => {
        console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            console.log(hash);
            let user = await userModel.create({
                username,
                name,
                email,
                age,
                password: hash
            });
            let token = jwt.sign({ email: email, userid: user._id }, "shhhh koi hain");
            res.cookie("token", token);
            res.redirect("/option");
        })
    })

});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.status(500).send("Someting went wrong");
    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "shhhh koi hain");
            res.cookie("token", token);
            res.status(200).redirect("/profile");


        }
        else res.redirect("/login");
    })

});


app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");

});

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {
        const data = jwt.verify(token, "shhhh koi hain");
        req.user = data;
        next();
    } catch (err) {
        return res.redirect("/login");
    }
}


app.listen(3000, function () {
    console.log('🚀 Server running at http://localhost:3000')
});