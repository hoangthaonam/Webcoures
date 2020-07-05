const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
    login: async(req,res)=>{
        // let users = User.find({name: req.body.username});
        let username = req.body.username;
        let password = req.body.password;
        let user = await User.findOne({username: username});
        if(!user){
            res.send('Username does not exist!');
            return;
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            res.send('Password is not correct!');
            return;
        }
        res.status(200).send({id:user._id});
    },
    register: async (req,res)=>{
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let user = await User.find({username: username});
        if(user.length){
            res.send('Username has already existed!');
        }else{
            var newuser = new User({ username: username, password: password, name: name});
            newuser.save(function (err) {
                if (err) res.send(err);
            });
            res.status(200).redirect('http://localhost:3000/');
        }
    }
}