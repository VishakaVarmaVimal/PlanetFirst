import React from "react";
import ContactAccordian from "../components/ContactAccordian";
import "../styles/ContactAccordian..css"
import Maps from "../components/Maps";

const Contact = () => {
    return (
        <div id="container">
        <div className="card">
            <h5 className="card-header">Frequently Asked Questions</h5>
            <div className="card-body">
            <ContactAccordian
                title = "What is climate change and how it affects humans?"
                content = "Climate change is a phenomenon that happens because of human and natural reasons. 
                And it is one of the most serious problems that not only affect the environment but also human beings. 
                It affects human in several ways but in simple language, we can say that it causes many diseases and disasters that destroy life on earth."
            />
            <ContactAccordian
                title = "Can we stop these climatic changes?"
                content = "
                Yes, we can stop these climatic changes but for that, 
                every one of us has to come forward and has to adapt ways that can reduce and control our bad habits that affect the environment. 
                We have to the initiative and make everyone aware of the climatic changes."
            />
            <ContactAccordian
                title = "What’s the difference between climate change and global warming?"
                content = "“Global warming” refers to the long-term warming of the planet. 
                “Climate change” encompasses global warming, but refers to the broader range of changes that are happening to our planet, 
                including rising sea levels; shrinking mountain glaciers; accelerating ice melt in Greenland, Antarctica and the Arctic; 
                and shifts in flower/plant blooming times."
            />
             <ContactAccordian
                title = "Is it too late to prevent climate change?"
                content = "“Global warming” refers to the long-term warming of the planet. 
                “Humans have caused major climate changes to happen already, and we have set in motion more changes still. 
                Even if we stopped emitting greenhouse gases today, global warming would continue to happen for at least several more decades, 
                if not centuries."
            />
            <ContactAccordian
                title = "Is the Sun causing global warming?"
                content = "No. The Sun can influence Earth’s climate, but it isn’t responsible for the warming trend we’ve seen over 
                the past few decades."
            />
            <ContactAccordian
                title = "What is the greenhouse effect?"
                content = "The greenhouse effect is the way in which heat is trapped close to the surface of the Earth by “greenhouse gases."
            />
             <ContactAccordian
                title = "How do we know what greenhouse gas and temperature levels were in the distant past?"
                content = "Ice cores are scientists’ best source for historical climate data. 
                Other tools for learning about Earth’s ancient atmosphere include growth rings in trees, which keep a 
                rough record of each growing season’s temperature, moisture and cloudiness going back about 2,000 years. 
                Corals also form growth rings that provide information about temperature and nutrients in the tropical ocean. 
                Other proxies, such as benthic cores, extend our knowledge of past climate back about a billion years into the past."
            />
            <ContactAccordian
                title = "Is the ozone hole causing climate change?"
                content = "Yes and no. The ozone hole is not causing global warming, but it is affecting atmospheric circulation."
            />
            <ContactAccordian
                title = "Do scientists agree on climate change?"
                content = "Yes, the vast majority of actively publishing climate scientists – 97 percent – 
                agree that humans are causing global warming and climate change."
            />
            </div>
        </div>
            <div className="card">
                <h5 className="card-header">Find Us</h5>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>
                            <p className="card-text">Ell Hall.<br/>
                            346 Huntington Avenue<br/>
                            Boston<br/>
                            Massachusetts<br/>
                            02115<br/>
                            <a href="tel:1-847-555-5555">1-847-555-5555</a>
                        </p>
                        </div>
                    </div>
                </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <Maps/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
