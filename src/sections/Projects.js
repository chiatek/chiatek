import React from "react";
import {DataContext} from "../AppData";
import Project from "../components/Project";
import Loading from "../components/Loading";

class Projects extends React.Component {
    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            category: "latest",
            imageModal: "none",
            videoModal: "none",
            title: "",
            description: "",
            image: "",
            url: ""
        };
    }

    componentDidMount() {
        this.setState({
            category: this.props.category
        });
    }

    handleClick = (event) => {
        this.setState({
            category: event.target.value
        });
    }

    handleShow = (item) => {
        this.setState({
            title: item.title,
            description: item.description,
            image: item.image,
            url: item.url
        });

        if (item.category === "category2") {
            this.setState({ videoModal: "block" })
        }
        else {
            this.setState({ imageModal: "block" })
        }
    }

    handleClose = () => {
        this.setState({
            imageModal: "none",
            videoModal: "none",
            url: ""
        });
    }

    render() {
        let data = this.context;

        if (data !== null) {
            let list = data.filter(item => item.projects)
            let projects = list[0].projects;

            if (this.state.category === "latest") {
                projects.sort(function(a,b) {
                    return new Date(a.fields.date) - new Date(b.fields.date);
                });
            }
            else if (this.state.category !== "all") {
                projects = projects.filter(item => item.fields.category === this.state.category)
            }
            else {
                projects.sort(function(a,b) { return a.fields.id - b.fields.id; });
            }
            
            return (
                <div className="projects-wrapper">
                    <div className="wrapper">
                        <section id="projects">
                            <div className="title">Our Work</div>
                            <hr />
                            <div className="projects">
                                <div className="project-category">
                                    <ul>
                                        <li><button value="all" className={this.state.category === "all" ? "active": ""} onClick={this.handleClick}>All</button></li>
                                        <li><button value="latest" className={this.state.category === "latest" ? "active": ""} onClick={this.handleClick}>Latest</button></li>
                                        <li><button value="category1" className={this.state.category === "category1" ? "active": ""} onClick={this.handleClick}>Category 1</button></li>
                                        <li><button value="category2" className={this.state.category === "category2" ? "active": ""} onClick={this.handleClick}>Category 2</button></li>
                                    </ul>
                                </div>
                                <div className="project-item">
                                    {projects.map(item => {
                                        return <Project key={item.primary_key} fields={item.fields} handleShow={this.handleShow} />
                                    })}
                                </div>
                            </div>

                            <div id="image-modal" className="modal" style={{display: this.state.imageModal}}>
                                <div className="modal-content">
                                    <img src={this.state.image} alt={this.state.title} />
                                    <div className="modal-container">
                                        <h4>{this.state.title}</h4>
                                        <p>{this.state.description}</p>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <a href={this.state.url} target="_blank" rel="noreferrer" className="btn-primary">Visit Site</a>
                                    <button onClick={this.handleClose} className="btn-primary">Close</button>
                                </div>
                            </div>

                            <div id="video-modal" className="modal" style={{display: this.state.videoModal}}>
                                <div className="modal-content">
                                    <span onClick={this.handleClose} className="close">&times;</span>
                                    <iframe title={this.state.title} src={this.state.url}></iframe>
                                    <div className="modal-container">
                                        <h4>{this.state.title}</h4>
                                        <p>{this.state.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        }

        return <Loading />
    }
}

export default Projects;