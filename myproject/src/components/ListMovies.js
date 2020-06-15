import React from 'react';
import MovieCard from './MovieCard'
import {Row, Col} from 'reactstrap'
import FavoriteList from './FavoriteList'
const axios = require('axios').default;

class ListMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        // this.searchMovies(this.props.data);
        // this.setState({
        //     data: this.props.data
        // })
        this.getMovie();
    }
    changeLove = (id) => {
        let {data} = this.state;
        data = data.map(item=>{
            if(item.id === id) item.isLove = !item.isLove;
            return item;
        })
        this.setState({
            data: [...data]
        })
    }
    changeRating = (id,rating) => {
        let {data} = this.state;
        data = data.map(item=>{
            if(item.id === id) item.rating = rating;
            return item;
        })
        this.setState({
            data: [...data]
        })
    }
    getMovie = async ()=>{
        let result;
        try {
          const response = await axios.get('http://localhost:3001/api/movie');
          result = response.data;
        } catch (error) {
          console.error(error);
        }
        this.setState({
            data:[...result]
        })
      }
    // searchMovies = async (data) => {
    //     let result = [];
    //     for(let movie of data){
    //         const url = `https://api.themoviedb.org/3/search/movie?api_key=d6a99b9d75c8d1b238d0ddec239f8b53&language=en-US&query=${movie.name}&page=1&include_adult=false`;
    //         try {
    //             let res = await fetch(url);
    //             let data  = await res.json();
    //             data = data.results.filter((item)=>{
    //                 if(item.hasOwnProperty('poster_path') && item.poster_path!==null) return true;
    //                 else return false
    //             })
    //             // console.log(data)
    //             let max = 0;
    //             let temp;
    //             for(let item of data){
    //                 if(item.popularity>max){
    //                     max=item.popularity;
    //                     temp = item;
    //                 }
    //             }
    //             temp.isLove = false;
    //             result.push(temp)
    //         }catch(err){
    //             console.error(err);
    //         }
    //     }
    //     this.setState({
    //         data:[...result]
    //     })
    // }
    render(){
        const {data} = this.state;
        const favorite = data.filter(item=>item.isLove)
        return(
            <div>
                {data!==null &&
                <>
                <Row xs="1" sm="2" lg="4">
                    {data.map((item,index)=>{
                        return(
                            <Col key={index}><MovieCard item = {item}
                            changeLove={this.changeLove} changeRating = {this.changeRating}/></Col>
                        )
                    })}
                </Row>
                <FavoriteList favorite = {favorite} changeLove={this.changeLove}/>
                </>
                }
            </div>
            
        )
    }
}
export default ListMovies;