import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perspiciatis illum vitae in possimus, tenetur minima voluptates commodi laudantium itaque ut doloribus illo officiis nulla vero magni perferendis facilis voluptas!</p>            
        </div>
    );
}
 
export default Rainbow(About) 