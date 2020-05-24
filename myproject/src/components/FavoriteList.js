import React,{ useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FavoriteMovieItem from './FavoriteMovieItem'
const FavoriteList = (props) => {
    const {
        className
      } = props;
    const [modal, setModal] = useState(false);
    // const text = React.createRef();
    const toggle = () => setModal(!modal);
    const favorite = props.favorite;
    return(
        <>
        <div className="favorite-list" onClick={toggle}>
            <i className="fa fa-heart"></i>
            <span className="quantity">{ favorite.length }</span>
        </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>My favorite movies</ModalHeader>
            <ModalBody>
                <div className="fav_title">
                    <div className="font-weight-bold">#</div>
                    <div className="font-weight-bold">Image</div>
                    <div className="font-weight-bold">Name</div>
                    <div className="font-weight-bold">Option</div>
                    <div className="font-weight-bold">Rating</div>
                </div>
                {favorite.map((item,index)=><FavoriteMovieItem key={index} index={index} item= {item} 
                    changeLove={props.changeLove}
                />)}
            </ModalBody>
            <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Clear All</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    )
    
}
export default FavoriteList;