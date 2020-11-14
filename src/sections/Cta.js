import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";

function Cta(props) {
    const data = useContext(DataContext);

    if (data != null) {
        let section = data.filter(item => item.cta);
        let cta = section[0].cta[props.id].fields;

        return (
            <div className="cta-wrapper">
                <div className="wrapper">
                    <section className="cta">
                        <h2>{cta.heading}</h2>
                        <p>{cta.subheading}</p>
                        <div className="button-group">
                            <Link to={cta.button1_url} className={cta.button1_text !== "" ? "btn-primary" : "hidden"}>{cta.button1_text}</Link>
                            <Link to={cta.button2_url} className={cta.button2_text !== "" ? "btn-primary" : "hidden"}>{cta.button2_text}</Link>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    return <Loading />
}

export default Cta;