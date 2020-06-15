var Movie = require('../models/movie.model');
const fetch = require("node-fetch");
module.exports = {
    getMovie: async (req,res)=>{
        var data = await Movie.find();
        let result = [];
        for(let movie of data){
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
                result.push(temp)
            }catch(err){
                console.error(err);
            }
        }
        res.send(result);
    }
}