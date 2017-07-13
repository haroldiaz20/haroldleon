import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';




class GalleryComponent extends Component {

    constructor(props) {
        super(props);
        this.handleOnCloseRequest = this.handleOnCloseRequest.bind(this);
        this.handleNextRequest = this.handleNextRequest.bind(this);
        this.handlePrevRequest = this.handlePrevRequest.bind(this);

    }

    handleOnCloseRequest(){
      console.log('0aaasasa');
      this.props.handleClose();
    }

    handleNextRequest(){
      this.props.handleNext();
    }

    handlePrevRequest(){      
      this.props.handlePrev();
    }


    render() {

        const photoIndex = this.props.photoIndex;
        const isOpen = this.props.isOpen;
        const images = this.props.images;


        var lightbox;
        var _this = this;
        if(this.props.isOpen){
          lightbox = <Lightbox
                        mainSrc={images[photoIndex].imgFullPath}
                        imageTitle={images[photoIndex].orgName}
                        imageCaption={images[photoIndex].description}
                        nextSrc={images[(photoIndex + 1) % images.length].imgFullPath}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].imgFullPath}
                        onCloseRequest={this.handleOnCloseRequest}
                        onMovePrevRequest={this.handlePrevRequest}
                        onMoveNextRequest={this.handleNextRequest}
                    />
        }
        

        return (
            <div>
              {lightbox}
            </div>
        );
    }
}


export default GalleryComponent;