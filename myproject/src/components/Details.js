import React from 'react';
import ReactPlayer from 'react-player'
class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            details: ''
        }
    }
    componentDidMount(){
        let {movieId} = this.props;
        let movies = JSON.parse(localStorage.getItem('movies'));
        let details = movies.find(item=>item._id === movieId);
        this.setState({
            details: details
        })
    }
    render(){
        let {details} = this.state
        return(
            <div className="container details">
            {/* Portfolio Item Heading */}
            {/* Portfolio Item Row */}
            <div className="row details-pic">
                <div className="col-md-4">
                    <img className ="poster_path" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${details.poster_path}`} alt="..."/>
                </div>
                <div className="col-md-8 details-infor">
                  <h3 className="my-3">{details.title}</h3>
                  <table cellPadding='5'>
                      <tbody>
                        <tr>
                            <td>Release date</td>
                            <td>: {details.release_date}</td>
                        </tr>
                        <tr>
                            <td>Vote average</td>
                            <td>: {details.vote_average}</td>
                        </tr><tr>
                            <td>Popularity</td>
                            <td>: {details.popularity}</td>
                        </tr><tr>
                            <td>Language</td>
                            <td>: {details.original_language}</td>
                        </tr>
                      </tbody>
                  </table>
                  <h3 className="my-3">Overview</h3>
                  <p>{details.overview}</p>
                </div>
            </div>
            <div className="row trailer">
              <ReactPlayer url={details.url} />
            </div>
          </div>    
        )
    }
}
export default Details;