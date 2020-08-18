import React from 'react';
import '../styles/about.css'

const About = () => {
  return (
    <div style={{color:"white"}}>
      <br/>
      <br/>
      <h1 style={{textAlign:"center",color:"white"}}>About Planet First</h1>
      <br/>
      <br/>
      <div class="container" >
        <div class="jumbo" style={{overflowY:"auto",height:"350px"}}>
        <p>
          <br/>
          Planet First is a platform which contains information regarding the climate changes all around the world.
          <br/>
          <br/>
          We believe in a single mission: "To protect and hand on the planet to the next generation."
          <br/>
          <br/>
        </p>
        <p>
          The climatic change has become a global concern over the last few decades. 
          Besides, these climatic changes affect life on the earth in various ways. 
          These climatic changes are having various impacts on the ecosystem and ecology. 
          Due to these changes, a number of species of plants and animals have gone extinct.
          <br/>
          <br/>
          Planet First cares about the Earth and want to help the society in return by providing a single 
          platform regarding the climatic changes and allows users who want to contribute back to the society.
          <br/>
          <br/>
          There is a News Forum, where users can fetch latest news feed regarding the climate changes.
          <br/>
          <br/>
          Users can also contribute back to the society by donating money to support any environmental cause.
          <br/>
          <br/>
          We can stop all of these environmental changes, if everyone of us comes forward and adapt ways and takes initiative 
          to make everyone aware of the climatic changes.
          <br/>
          <br/>
          <br/>
          *Courtesy: We have taken the articles regarding the climate changes from <a href ="https://gnews.io/" target="_blank" rel="noopener noreferrer">https://gnews.io/</a>
        </p>
          </div>
        </div>
      </div>
    
  );
};

export default About;