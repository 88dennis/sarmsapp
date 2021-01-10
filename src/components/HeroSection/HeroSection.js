import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
// import {Button} from '../ButtonElements';
import {Button2} from '../ButtonElements';

const HeroSection = () => {

    const [hover, setHover]= useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (

        <>
        <HeroContainer id="home">
           
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Sarmiento Family Tree
                </HeroH1>
                <HeroP>
                    Nicanor Sarmiento and Genoveva Dominado
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                    to="/signin"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
