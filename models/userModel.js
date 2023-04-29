var {localSQLConnection} = require('../knexfile');
const knex = require('knex')({
    client: 'mysql',
    connection: localSQLConnection,
  })
const bcrypt = require('bcrypt');
//login
async function login(req, res, next, err, results) {
    var email = req.body.email; 
    var password = req.body.password;
    try {
        if (email == undefined || password == undefined) {
            console.log("not enough cred");
            res.render('login', {title: 'Login to PA3', info: 'Login failed, please insert both an email and a password. Try again.'});
        }
        else {
            var data = await knex('users').where({
                email: email,
            }).select('*');
            console.log("email" + data);
            if (email != data[0].email || password != data[0].user_password) {
               console.log("login failed, incorrect pass/email");
                res.render('login', {title: 'Login to PA3', info: 'Login failed, incorrect email or password. Try again.'});
            }
            else {
                console.log("login success");
                await bcrypt.genSalt(1, async function(err, salt) {
                    await bcrypt.hash(password, salt, async function(err, hash) {
                        res.cookie('password', hash);
                        res.render('welcome', {title: `Welcome to PA3, ${email}`, info: 'What will you do today?'});
                    });
                });
             }
        }
    }
    catch (err) {
        console.log(err);
        console.log("login failed, user does not exist");
        res.render('login', {title: 'Login to PA3', info: 'Email does not exist. Please sign up to PA3.'});
    }
}
//signup
async function signup(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    if (email == undefined || password == undefined) {
        console.log("signup failed, not enough cred");
        res.render('signup', {title: 'Signup for PA3', info: 'Please enter a username and a password. Try again.'});
    }
    else {
        try {
            var data = await knex('users').where({
            email: email
            }).select('*');
            if (email == data[0].email) {
                console.log("signup failed, email already exists");
                res.render('signup', {title: 'Signup for PA3', info: 'Email already exists. If this is you, press Login.'});
            }
        }
        catch (error) {
            knex('users').insert({
                email: email,
                password: password,
            });                
            console.log("signup success");
            await bcrypt.genSalt(1, async function(err, salt) {
                await bcrypt.hash(password, salt, async function(err, hash) {
                    res.cookie('password', hash);
                    res.render('welcome', {title: `Welcome to PA3, ${email}`, info: 'What will you do today?'});
                });
            });
        }
    }
}
module.exports = {login, signup};