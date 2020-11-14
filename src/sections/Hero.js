import React from "react";
import { DataContext } from "../AppData";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";

class Hero extends React.Component {
    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            animate: false,
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let index = this.state.currentIndex;
            this.setState({ 
                currentIndex: index + 1,
                animate: !this.state.animate
            });
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let data = this.context;
        const indicator = [];
        
        if (data != null) {
            let hero = data.filter(item => item.hero_carousel)
            let length = hero[0].hero_carousel.length;
            
            const {
                heading,
                subheading,
                button_text,
                button_url
            } = hero[0].hero_carousel[this.state.currentIndex % length].fields;

            for (let i = 0; i < length; i++) {
                indicator.push(<span key={i} className="indicator"></span>);
            }

            indicator[this.state.currentIndex % length] = <span key={this.state.currentIndex % length} className="indicator active"></span>;

            return (
                <div>
                    <div className="wrapper">
                        <div className="hero-carousel">
                            <div className="hero-slide">
                                <h1 className={this.state.animate ? "animate-down" : "animate-up"}>{heading}</h1>
                                <hr />
                                <h4 className={this.state.animate ? "animate-up" : "animate-down"}>{subheading}</h4>
            
                                <Link to={button_url} className="btn-primary">{button_text}</Link>
                            </div>

                            <div className="hero-indicator">
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

export default Hero;