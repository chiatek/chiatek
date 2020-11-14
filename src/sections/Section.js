import React from "react";
import {useContext} from "react";
import {DataContext} from "../AppData";
import Loading from "../components/Loading";

function Section(props) {
    const data = useContext(DataContext);

    if (data != null) {
        let section = data.filter(item => item.sections);
        section = section[0].sections;

        let content = section.filter(item => item.fields.name === props.name)
        content = content[0].fields;
        
        return (
            <div className={props.id + "-wrapper"}>
                <div className="wrapper">
                    <section id={props.id}>
                        <div className="title">{content.heading}</div>
                        <hr />
                        <p className="section-summary">{content.subheading}</p>
                        <div className={props.id}>
                            <div className={content.item1_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item1_name}</div>
                                <p>{content.item1_text}</p>
                            </div>
                            <div className={content.item2_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item2_name}</div>
                                <p>{content.item2_text}</p>
                            </div>
                            <div className={content.item3_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item3_name}</div>
                                <p>{content.item3_text}</p>
                            </div>
                            <div className={content.item4_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item4_name}</div>
                                <p>{content.item4_text}</p>
                            </div>
                            <div className={content.item5_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item5_name}</div>
                                <p>{content.item5_text}</p>
                            </div>
                            <div className={content.item6_name !== "" ? "item" : "hidden"}>
                                <div className="subtitle">{content.item6_name}</div>
                                <p>{content.item6_text}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    return <Loading />
}

export default Section;