import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer2 = styled.div`
    background: #0cococ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100% );
        z-index: 2;
    }

    @media screen and (min-width: 768px){
        height: 800px;

    }
    @media screen and (max-width: 480px){
        height: 300px;


    }

`
export const HeroBg2 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg2 = styled.video`
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    /*  object-fit: cover;*/
    background-color: black;
    margin-bottom: 20px;
    padding-top: 80px;

    border: none;
    outline: none;

    
`

export const HeroContent2 = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH12 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const HeroP2 = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`

export const HeroBtnWrapper2 = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`

export const ArrowForward2 = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`

export const ArrowRight2 = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;


`