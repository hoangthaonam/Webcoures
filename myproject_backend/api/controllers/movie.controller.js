var Movie = require('../models/movie.model');
var User = require('../models/user.model');
const fetch = require("node-fetch");
module.exports = {
    getMovie: async (req,res)=>{
        var movies = await Movie.find();
        let result = [];
        for(let movie of movies){
            const url = `https://api.themoviedb.org/3/search/movie?api_key=d6a99b9d75c8d1b238d0ddec239f8b53&language=en-US&query=${movie.name}&page=1&include_adult=false`;
            try {
                let res = await fetch(url);
                let data  = await res.json();
                data = data.results.filter((item)=>{
                    if(item.hasOwnProperty('poster_path') && item.poster_path!==null) return true;
                    else return false
                })
                // console.log(data)
                let max = 0;
                let temp;
                for(let item of data){
                    if(item.popularity>max){
                        max=item.popularity;
                        temp = item;
                    }
                }
                temp.isLove = false;
                temp._id = movie._id;
                temp.url = movie.url;
                result.push(temp)
            }catch(err){
                console.error(err);
            }
        }
        res.send(result);
    },
    addLove: async (req,res)=>{
        let {movieId,userId} = req.body;
        let user = await User.findOne({_id: userId});
        let movie = user.favorite.find(item=>item._id == movieId);
        if(movie){
            user.favorite.pull({_id: movieId});
            await user.save();
            res.send(false)
        }else{
            user.favorite.push(movieId);
            await user.save();
            res.send(true);
        }
    },
    add: async (req,res)=>{
        let {name,url} = req.body;
        const movie = await Movie.findOne({name: name});
        if(movie){
            res.send('The movie has already existed');
            return;
        }
        var newMovie = new Movie({ name: name, url: url});
        newMovie.save();
        res.send('success')
    },
    showLoveList: async (req,res)=>{
        console.log('sss')
        console.log(req.body)
    },
    getLove: async (req,res)=>{
        let {movieId,userId} = req.body;
        let user = await User.findOne({_id: userId});
        let movie = user.favorite.find(item=>item._id == movieId);
        if(movie){
            res.send(true)
        }else{
            res.send(false);
        }
    }
}