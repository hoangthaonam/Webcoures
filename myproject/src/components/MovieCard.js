import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
var classNames = require('classnames');

class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
          rating: 0,
          temp: 0
        };
      }
    
    onClickLove = ()=>{
        this.setState({
            isLove: !this.state.isLove
        })
        this.props.changeLove(this.props.item.id);
        // if(localStorage.getItem("favoritelist")===null){
        //     let list = [];
        //     list.push(this.state);
        //     localStorage.setItem("favoritelist",JSON.stringify(list))
        // }
        // else{
        //     let list = [];
        //     list = JSON.parse(localStorage.getItem("favoritelist"));
        //     list.push(this.state);
        //     localStorage.setItem("favoritelist",JSON.stringify(list))
        //     console.log(list)
        // }
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
    componentDidMount(){
        this.setState({rating: this.props.rating})
    }
    
    render() {
        const { rating } = this.state;
        const { item } = this.props;
        return (
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="card-img-top" alt="..."/>
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