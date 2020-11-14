import React from "react";
import { DataContext } from "../AppData";
import Loading from "../components/Loading";

class Features extends React.Component {
    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            animate: false
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let index = this.state.currentIndex;
            this.setState({ 
                currentIndex: index + 1,
                animate: !this.state.animate
            });
        }, 8000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let data = this.context;
        const indicator = [];

        if (data != null) {
            let features = data.filter(item => item.features_carousel);
            let length = features[0].features_carousel.length;
            let index = this.state.currentIndex % length;

            if (this.props.index !== null) {
                index = this.props.index;
            }   
            
            const {
                subheading,
                image1,
                image2,
                image3
            } = features[0].features_carousel[index].fields;

            for (let i = 0; i < length; i++) {
                indicator.push(<span key={i} className="indicator"></span>);
            }

            indicator[index] = <span key={index} className="indicator active"></span>;

            return (
                <div className="carousel-wrapper">
                    <div className="wrapper">
                        <div className="features-carousel">
                            <div className="features-slide">
                                <h4 className={this.state.animate ? "animate-down" : "animate-up"}>{subheading}</h4>
                                <div className="image-container">
                                    <img className={image1 === "" ? "hidden" : "img-lg"} src={image1} alt="features 1" />
                                    <img className={image2 === "" ? "hidden" : ""} src={image2} alt="features 2" />
                                    <img className={image3 === "" ? "hidden" : "img-sm"} src={image3} alt="features 3" />
                                </div>
                            </div>
            
                            <div className="features-indicator">
                                {indicator}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <Loading />
    }
}

export default Features;