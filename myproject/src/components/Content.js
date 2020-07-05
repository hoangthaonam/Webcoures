import React from 'react';
import ListMovies from './ListMovies'

class Content extends React.Component {
    render() {
        return(
            <>
                <div className="content">
                    <div className="row">
                        <ListMovies data={this.props.data}/>
                    </div>
                </div>
            
            </>
        );
    }
}
export default Content;