const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const register = require("./models/registers");


const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname, "../templates/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path));
app.set("view engine", "hbs"); // Defining view Engines
// HBS USE KANR KE LIEA ---> ab hume ye batana hai ki hamara jo default folder tha views uska naam change ho chuka hai aur uska path change ho chuka hai
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    //res.send("Hello from Nripesh Sharma  "); //Direct HTML
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);

        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {
            const registerEmployee = new register(
                {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: req.body.password,
                    confirmpassword: req.body.confirmpassword,
                    email: req.body.email,
                    phonenumber: req.body.phonenumber,
                    address: req.body.address
                }
            )

            const registered = await registerEmployee.save();
            // console.log(registered);
            res.render("index");
        }
        else {
            res.send("passwords are not matching");
        }


    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/login", async (req, res) => {

    // let alertuser = false;
    try {

        const login_email = req.body.login_email;
        const login_password = req.body.login_password;
        const registered = await register.findOne({ email: login_email });

        if (registered.password === login_password) {
            res.status(201).render("index", { user_firstname: registered.firstname, user_lastname: registered.lastname });
        }
        else {
            // res.send("Invalid Cradentials")
            res.render("register", { validation_password: true });
        }
    } catch (error) {
        res.status(400).render("register", { validation_password: true });
    }


})

app.listen(port, () => {
    console.log(`server is running at post no ${port}`);
})