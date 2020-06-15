import React from 'react';

class Gallery extends React.Component {
    constructor () {
        super();
        this.state = {
            mainImg: '/image/about.jpg',
            subImgs: ['/image/about-2.jpg', '/image/about-3.jpeg', '/image/about-4.jpg', '/image/about-5.jpg' ],
            translate: 0,
            mouseOver: false
        }
    }

    swapImgs (src) {
        let shortSrc = src.slice(21);
        if (shortSrc !== this.state.mainImg) {
            let index = this.state.subImgs.indexOf(shortSrc);
            this.setState({
                mainImg: this.state.subImgs.splice(index, 1, this.state.mainImg).toString()
            })
        }
    }

    handling () {
        const slider = document.querySelector('.gallery__subimage').children;
        for (let i = 0; i < slider.length; i++){  
            slider[i].addEventListener('click', (event) => {
                this.swapImgs(event.target.src)
            }, this)
        }

        const left = document.querySelector('.gallery__left');
        left.addEventListener('mouseover', (event) => {
            this.setState({
                mouseOver: true,
                timer: setInterval(() => {
                    this.moveleft()
                }, 3)
            });
        })
        left.addEventListener('mouseout', (event) => {
            this.setState({
                mouseOver: false,
            });
            clearInterval(this.state.timer);
            
        })


        const right = document.querySelector('.gallery__right');
        right.addEventListener('mouseover', (event) => {
            this.setState({
                mouseOver: true,
                timer: setInterval(() => {
                    this.moveright()
                }, 3)
            });
        })
        right.addEventListener('mouseout', (event) => {
            this.setState({
                mouseOver: false,
            });
            clearInterval(this.state.timer);
            
        })

    } 

    moveleft () {
        if(this.state.translate < 0) {
            this.setState({
                translate: this.state.translate + 1
            })
        }
    }

    moveright () {
        const subSliderWidth = document.querySelector('.gallery__subimage').clientWidth;
        if(this.state.translate > 515-subSliderWidth) {
            this.setState({
                translate: this.state.translate - 1
            })
        }
    }


    componentDidMount () {
        this.handling()
    }

    render () {
        let subGallery = this.state.subImgs.map(src => {
            return <img src={src} alt="" />
        })


        return (
            <>
            <div className="gallery__main-image">
                <img src={this.state.mainImg} alt="" />
            </div>

            <div class="gallery__subimage-wrapper">
                <div className="gallery__left"></div>
                <div className="gallery__subimage" style={{transform: 'translateX(' + this.state.translate + 'px)'}}>
                    {subGallery}
                </div>
                <div className="gallery__right"></div>
            </div>
            </>
       );
    }
}

export default Gallery