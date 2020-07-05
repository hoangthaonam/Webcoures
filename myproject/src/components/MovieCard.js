import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';

const axios = require('axios').default;
var classNames = require('classnames');

class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
          rating: 0,
          temp: 0
        };
        this.url = 'http://localhost:3001/api/movie/addLove';
      }
    
    onClickLove = async ()=>{
        let response = await axios.post(this.url, {movieId: this.props.item._id, userId: JSON.parse(localStorage.getItem('auth'))});
        this.props.changeLove(this.props.item._id,response.data);
    }
    onStarClick = (nextValue, prevValue, name)=>{
        this.setState({rating: nextValue, temp: nextValue});  
        this.props.changeRating(this.state.id,this.state.rating)
    }
    onStarHover = (nextValue, prevValue, name)=>{
        this.setState({rating: nextValue});  
    }
    onStarHoverOut = (nextValue, prevValue, name)=>{
        this.setState({rating: this.state.temp});  
    }
    render() {
        const { rating } = this.state;
        const { item } = this.props;
        // console.log(item.isLove)
        return (
            <div className="card">
                <Link to = {`/details/${item._id}`} ><img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    {item.title && 
                        <h5 className="card-title text-uppercase">{item.title.length < 22 ? item.title : item.title.substr(0,15)+'...'}</h5>
                    }
                    {item.overview && 
                        <p className="card-text">{item.overview.length < 120 ? item.overview : item.overview.substr(0,117)+'...'}</p>
                    }
                    {/* <a href="#ư" className="btn btn-success">Go somewhere</a> */}
                </div>
                    <div className="option">
                        <span className={classNames({"loved":item.isLove})} onClick = {this.onClickLove}><p>Love</p><i className="fa fa-heart"></i></span>
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick}
                            onStarHover={this.onStarHover}
                            onStarHoverOut={this.onStarHoverOut}
                        />
                        <div className="text text-success font-weight-bold">{rating!==0 && rating}</div>
                    </div>
            </div>
        )
    }
}
export default MovieCard;