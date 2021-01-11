import React from 'react'
import Icon1 from '../../images/undraw_add_tasks_mxew.svg';
import Icon2 from '../../images/undraw_add_tasks_mxew.svg';
import Icon3 from '../../images/undraw_add_tasks_mxew.svg';

import {ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services"> 
            <ServicesH1>
                Family Rooms
            </ServicesH1>

            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Resty Family</ServicesH2>
                    <ServicesP>Restituto's Family Room and photos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Henry Room</ServicesH2>
                    <ServicesP>Henry and Kath's Space and photos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Dan Crib</ServicesH2>
                    <ServicesP>Dan and Emmie's family photos and garden</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
