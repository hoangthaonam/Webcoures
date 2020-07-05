import React from 'react';
var classNames = require('classnames');
const axios = require('axios').default;

class FavoriteMovieItem extends React.Component {
    unLoveClick =async ()=>{
        let response = await axios.post('http://localhost:3001/api/movie/addLove', {movieId: this.props.item._id, userId: JSON.parse(localStorage.getItem('auth'))});
        this.props.changeLove(this.props.item._id,response.data);
    }
    render() {
        const {item,index} = this.props;
        return(
            <div className="FavoriteMovieItem">
                <div>{index+1}</div>
                <div><img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="card-img-top" alt="..."/></div>
                <div>{item.title}</div>
                <span className={classNames({"loved":item.isLove})} onClick={this.unLoveClick}><i className="fa fa-heart"></i></span>
                <div className="text text-success font-weight-bold">{item.vote_average}</div>
            </div>
        )
    }
}
export default FavoriteMovieItem;