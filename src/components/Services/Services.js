import React from 'react'
import Icon1 from '../../images/undraw_add_tasks_mxew.svg';
import Icon2 from '../../images/undraw_add_tasks_mxew.svg';
import Icon3 from '../../images/undraw_add_tasks_mxew.svg';

import {ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services"> 
            <ServicesH1>
                Our Services
            </ServicesH1>

            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Track Loans</ServicesH2>
                    <ServicesP>We help track your loans and cashflow</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Chat Rooms</ServicesH2>
                    <ServicesP>Chatroom and messaging app to send reminders to your friends</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Platform to track loans within an organization</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
