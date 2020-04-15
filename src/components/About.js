import React from 'react' 

const About = () => {
    return(

        <div className='About  informationBox animated fadeIn fast'>
            {/* <h2 className='title'>About</h2> */}
            <h3>Hi, and thanks for visiting my site!</h3>
            <div>
                This web application was built for my final project for Flatiron's Software Engineering program. It was made to show off what we learned during our 12 weeks leading up to beginning the project. 
                {/* You can find out more at the two Github repos below. Feel free to contact me if you'd like to discuss the project, employment, or anything else!  */}
            </div>
            <h3>How to Use</h3>
            <div>
                Click <label>Map</label> in the navigation bar above to view the map of attractions. There are two kinds of attractions: user attractions and OTM attractions. User attractions are those uploaded by users like you. OTM attractions are attractions queried from the Open Trip Map API. They currently only show historical districts. 
                <br></br>
                If you would like to contribute, sign up for an account by clicking <label>Sign Up</label> in the navigation bar above. Once you have signed up, click <label>My Attractions</label>, then New Attraction to make a new attraction. Fill in the appropriate fields, and click on the map where your attraction should be located. Click Submit, and your attraction will now appear for others to see! 
                <br></br>
                User attractions can receive ratings from users. This is to ensure any attractions that aren't up to the communities standards appear as such. To review an attraction, simply click on its listing or marker on the <label>Map</label> page, and submit your review and rating at the bottom!
            </div>
            <h3>More About the Author and Project</h3>
            <div>
                Stuff To Do Map was created with the purpose of helping people find things to do around them. I was inspired to make Stuff To Do Map after visiting cities the world over and struggling to <em>easily</em> find things to do near me in each city. While I found numerous sites that would show me what the best expensive tours or restaurants were, I never found a site that would show me exactly what I wanted: historical sites within walking distance. 
                <br></br>
                Stuff To Do Map is exactly what I wanted to have back then, and what I will use while traveling in the future. I hope you give it a go the next time you're out and about! You can find my contact information below if you would like to give feedback on how to improve Stuff To Do Map.
            </div>
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
            <li>
                <a href="mailto:tylergreason@gmail.com">tylergreason@gmail.com</a>
            </li>
            </ul>
        </div>
    )
}

export default About