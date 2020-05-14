import React from "react";
import Project from "../components/Project"

const Projects = () => {
function createProj(link, src) {

}

  return (
    <div id="portContainer " class="container ">
    <div class="row ">
        <div class="col-8 ">
            <h1>Projects</h1>
            <div class="row ">
                <div class="mb-3 col-sm-12 col-md-6 ">
                    <div class="wrap ">
                        <a href="https://nathannaylor.github.io/bar-hop-webapp/"><img class="img-fluid size" alt="project screenshot" src="./Assets/Images/barhop.png" /></a>
                        <h2>BarHop</h2>
                    </div>
                </div>

                <div class="mb-3 col-sm-12 col-md-6 ">
                    <div class="wrap ">
                        <a href="https://to-d-or-not-to-d.herokuapp.com/"><img class="img-fluid size" alt="project screenshot" src="./Assets/Images/to-d-or-not-to-d.png" /></a>
                        <h2>To D or Not To D</h2>
                    </div>
                </div>

                <div class="mb-3 col-sm-12 col-md-6 ">
                    <div class="wrap ">
                        <a href="https://nathannaylor.github.io/Open-Weather-App/"><img class="img-fluid size" alt="project screenshot" src="./Assets/Images/weather-app.png" /></a>
                        <h2>Weather Dashboard</h2>
                    </div>
                </div>

                <div class="mb-3 col-sm-12 col-md-6 ">
                    <div class="wrap ">
                        <a href="https://nathannaylor.github.io/Work-Day-Scheduler/"><img class="img-fluid size" alt="project screenshot" src="./Assets/Images/workday.png" /></a>
                        <h2>Work Scheduler</h2>
                    </div>
                </div>
                <div class="mb-3 col-sm-12 col-md-6 ">
                    <div class="wrap ">
                        <a href="https://nathannaylor.github.io/Code-Quiz/"><img class="img-fluid size" alt="project screenshot" src="./Assets/Images/codequiz.png" /></a>
                        <h2>Coding Quiz</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Projects;
