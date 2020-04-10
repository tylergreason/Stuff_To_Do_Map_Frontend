import React from 'react' 

const About = () => {
    return(
        <div className='About informationBox animated flipInX fast'>
            {/* <h2 className='title'>About</h2> */}
            <h3>Hi, and thanks for visiting my site!</h3>
            <div>This web application was built for my final project for Flatiron's Software Engineering program. It was made to show off what we learned during our 12 weeks leading up to beginning the project. You can find out more at the two Github repos below. Feel free to contact me if you'd like to discuss the project, employment, or anything else! </div>
            <ul>
            <li>
                <a href="https://github.com/tylergreason/Stuff_To_Do_Map_Frontend">Stuff To Do Map Frontend Repo</a>
            </li>
            <li>
                <a href="https://github.com/tylergreason/Stuff_To_Do_Map_Backend">Stuff To Do Map Backend Repo</a>
            </li>
            <li>
                <a href="https://github.com/tylergreason/">My Github</a>
            </li>
            <li>
                <a href="https://twitter.com/GreasonTyler">My Twitter</a>            
            </li>
            </ul>
        </div>
    )
}

export default About