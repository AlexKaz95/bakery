import React from 'react';

class Gallery extends React.Component {
    constructor () {
        super();
        this.state = {
            mainImg: '/image/about.jpg',
            subImgs: ['/image/about-2.jpg', '/image/about-3.jpeg', '/image/about-4.jpg', '/image/about-5.jpg' ],
            translate: 0,
            mouseOver: false,
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
        console.log(slider);
        for (let i = 0; i < slider.length; i++){  
            slider[i].addEventListener('click', (event) => {
                this.swapImgs(event.target.src)
            }, this)
        }
    } 

    moveSubSlider (event) {
        if (this.state.mouseOver) {
            if (event.layerX < 45 && this.state.translate < 0) {
                this.setState({
                    translate: this.state.translate + 1
                })
            } else if (event.layerX > 450 && this.state.translate > -178){
                this.setState({
                    translate: this.state.translate - 1
                })
            } else {
                return
            }
        }
    }

    subSliderHandling () {
        const slider = document.querySelector('.gallery__subimage-wrapper');
        slider.addEventListener('mouseover', (event) => {
            this.setState({
                mouseOver: true,
                timer: setInterval(() => {
                    this.moveSubSlider(event)
                }, 3)
            });
            
        })
        slider.addEventListener('mouseout', (event) => {
            this.setState({
                mouseOver: false
            })
            clearInterval(this.state.timer)
        })
    }

    componentDidMount () {
        this.handling()
        this.subSliderHandling()
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
                <div className="gallery__subimage" style={{transform: 'translateX(' + this.state.translate + 'px)'}}>
                    {subGallery}
                </div>
            </div>
            </>
       );
    }
}

export default Gallery