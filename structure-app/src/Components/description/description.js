import React, { Component } from 'react';
import './description.css';

class Description extends Component {
    render() {
        return (
            <div className="desc">
                <p>
                    Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan 
                    Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the 
                    misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty 
                    Smith, who split their time between domestic life and interdimensional adventures.
                </p>
                <p>
                    Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke 
                    voicing the rest of Rick and Morty's family. The series originated from an animated short parody 
                    film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded
                    by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.
                </p>
                <p>
                    The fourth season premiered on November 10, 2019, and consists of ten episodes. A fifth season was 
                    confirmed in May 2020, as part of a long-term deal in May 2018 that ordered 70 new episodes over 
                    an unspecified number of seasons.
                </p>
            </div>
        );
    }

}

export default Description;
