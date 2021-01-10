import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer2, HeroBg2, VideoBg2, 
    // HeroContent2, HeroH12, HeroP2, HeroBtnWrapper2, ArrowForward2, ArrowRight2
} from './HeroElements2';
// import {Button} from '../ButtonElements';
// import {Button2} from '../ButtonElements';

const HeroSection2 = () => {




    return (

        <>
        <HeroContainer2 id="preview">
            <HeroBg2>

                <VideoBg2 controls muted src={Video} type='video/mp4'></VideoBg2>
            </HeroBg2>
        
        </HeroContainer2>
        <div style={{"text-align": "center"}}>Preview</div>
        </>
    )
}

export default HeroSection2
