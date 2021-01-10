import React from 'react'
import { Button } from '../ButtonElements';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Column2, 
    ImgWrap, 
    Img,
Vid  } from './InfoElement';

const InfoSection = (
    {
        //destructure all from Data.js
        id,
        lightBg,
        lightText,
        lightTextDesc,
        topLine,
        headline,
        description,
        buttonLabel,
        imgStart,
        img,
        alt,
        dark,
        primary,
        darkText,
        dark2,
        navigateTo,
        vid
    }
) => {


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0} 
                                    dark={dark ? 1 : 0} 
                                    dark2={dark2 ? 1 : 0} 
                                    to={navigateTo}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>

                        {img && <Img src={img} alt={alt}/> }
                        {vid && <Vid autoPlay loop muted src={vid} type='video/mp4'/> }

                            
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
