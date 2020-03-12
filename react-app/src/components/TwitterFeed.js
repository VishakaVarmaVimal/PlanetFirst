import React, { useEffect } from "react";

const TwitterFeed = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
        <div class='inner'>
            <div className="twitter-embed" style={{width:'400px'}}>
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/noaaclimate?lang=en"
                >
                </a>
            </div>
            </div>
        </section>
    );
};

export default TwitterFeed;
