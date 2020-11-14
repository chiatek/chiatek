import React from "react";
import { DataContext } from "../AppData";
import Loading from "../components/Loading";

class Contact extends React.Component {
    static contextType = DataContext;

    url = "";
    database = "";
    user = "";

    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
            style: {background: "#2E3236"}
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            style: {background: "#E8F0FE"}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        let data = this.context;

        if (data !== null) {
            let contact = data.filter(item => item.contact);
            let content = contact[0].contact[0].fields;

            return (
                <div className={this.props.contactPage ? "" : "contact-wrapper"}>
                    <div className="wrapper">
                        <section id={this.props.contactPage ? "contact-form" : "contact"}>
                            <div className="title">Contact Us</div>
                            <hr />
                            <div className="contact">
                                <div className="contact-info">
                                    <p>{content.description}</p>
                                    <h5 className="subtitle">Contact:</h5>
                                    <ul>
                                        <li>Phone: {content.phone}</li>
                                        <li>Email: {content.email}</li>
                                    </ul>
                                </div>
                                <form action={this.url} method="post" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="first_name" 
                                            placeholder="First Name"
                                            style={this.state.style}
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="last_name" 
                                            placeholder="Last Name"
                                            style={this.state.style}
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email"
                                            style={this.state.style}
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Subject"
                                            style={this.state.style}
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="message"
                                            placeholder="Message"
                                            value={this.state.message}
                                            style={this.state.style} 
                                            onChange={this.handleChange}
                                            required 
                                        />
                                    </div>
									
									<input type="hidden" name="database" value={this.database} />
									<input type="hidden" name="user" value={this.user} />
                                    <button type="submit" className="btn-primary">Send Message</button>
                                </form>
                            </div>
                        </section>  
                    </div>
                </div>
            );
        }

        return <Loading />
    }
}

export default Contact;