import React from "react";

const About = () => {

  return (
    <div id="aboutContainer" class="container">
        <div class="row">
            <div class="col">
                <h1>About Me</h1>
                <hr/>
                <div class="row">
                    <div class="col-sm-12 col-md">
                        <img class="img-fluid" id="baldNate" alt="Headshot" src="./Assets/Images/Bald Right Glasses.png"/>
                        <p id="aboutLorem"> Hello, my name is Nathan Naylor and I'm a San Diego based full stack Web Developer with several years of Graphic Design experience. 
                            To view a live version of some of the projects I have worked on to date you can click on the images on the projects page linked above. 
                            If you would like to look through any of the project repositories you can find my github url on the contacts page. If you are interested in looking at my resume please click <a target="_blank" href="Assets/PDF/Nathan Resume.pdf">here.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default About;
