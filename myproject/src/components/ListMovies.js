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
        this.getMovie();
    }
    changeLove = (id,isLove) => {
        let {data} = this.state;
        data = data.map(item=>{
            if(item._id === id) item.isLove = isLove;
            return item;
        })
        this.setState({
            data: [...data]
        })
    }
    // unLove = async (id) => {
    //     console.log(id)
    //     let response = await axios.post('http://localhost:3001/api/movie/addLove', {movieId: id, userId: JSON.parse(localStorage.getItem('auth'))});
    //     this.changeLove(id,response.data);
    // }
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
        let data;
        if(localStorage.getItem('movies')){
            data = JSON.parse(localStorage.getItem('movies'));
        }
        else{
            try {
              const response = await axios.get('http://localhost:3001/api/movie');
              data = response.data;
            } catch (error) {
              console.error(error);
            }
            localStorage.setItem('movies',JSON.stringify(data))
        }
        this.getIsLove(data)
      }
    getIsLove = async(data)=>{
        for(let item of data){
            let response = await axios.post('http://localhost:3001/api/movie/getLove',
                {movieId: item._id, userId: JSON.parse(localStorage.getItem('auth'))});
            item.isLove = response.data;
        }
        console.log(data)
        this.setState({
            data:[...data]
        })
    }
    render(){
        const {data} = this.state;
        const favorite = data.filter(item=>item.isLove)
        return(
            <div>
                <Row xs="1" sm="2" lg="4">
                    {data.map((item,index)=>{
                        console.log(item)
                        return(
                            <Col key={index}><MovieCard item = {item}
                            changeLove={this.changeLove} changeRating = {this.changeRating}/></Col>
                        )
                    })}
                </Row>
                <FavoriteList favorite = {favorite} changeLove={this.changeLove}/>
               
            </div>
            
        )
    }
}
export default ListMovies;