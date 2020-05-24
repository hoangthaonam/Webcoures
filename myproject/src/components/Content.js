import React from 'react';
import ListMovies from './ListMovies'
// import FavoriteList from './FavoriteList'
// import RightMenu from './RightMenu'
// import HotMovie from './HotMovie'

class Content extends React.Component {
    state = {
        data: this.props.data
    }
    render() {
        const {data} = this.state;
        return(
            <>
            {data!==null && 
                <div className="content">
                    <div className="row">
                        <ListMovies data = {data}/>
                        {/* <div className="col-3">
                        <RightMenu/>
                        </div> */}
                    </div>
                </div>
            }
            </>
        );
    }
}
export default Content;