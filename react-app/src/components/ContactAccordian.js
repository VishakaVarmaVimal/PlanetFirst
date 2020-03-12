import React, { useState, useRef } from "react";
import "../styles/ContactAccordian..css"
import ContactChevron from "./ContactChevron";

function ContactAccordian(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div id="container">
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <ContactChevron className={`${setRotate}`} width={10} fill={"#000000"} />
            </button>
            <div
                className="accordion_content"
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
        </div>
    );
}

export default ContactAccordian;
