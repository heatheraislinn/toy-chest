import React from 'react';
import styled from '@emotion/styled';
import Container from './Container';
import LampBox from './LampBox';
import String from './String';
import LampTopper from './LampTopper';
import LampTopperTop from './LampTopperTop';
import LampTopperBottom from './LampTopperBottom';
import LampShadeBox from './LampShadeBox';
import Lampshade from './Lampshade';
import InnerShade from './InnerShade';
import LightbulbBox from './LightbulbBox';
import Lightbulb from './Lightbulb';
import LightbulbHighlight from './LightbulbHighlight';
import LightBeam from './LightBeam';
import InspiringMessage from './InspiringMessage';
import Author from './Author';

type LampProps = {
    on: boolean;
}

const Lamp: React.SFC<LampProps> = ({on}) => (
    <Container>
        <LampBox>
            <String></String>
            <LampTopper>
                <LampTopperTop></LampTopperTop>
                <LampTopperBottom></LampTopperBottom>
            </LampTopper>
            <LampShadeBox>
                <Lampshade></Lampshade>
            </LampShadeBox>
            <InnerShade></InnerShade>
            <LightbulbBox>
                <Lightbulb on={on}>
                    <LightbulbHighlight on={on}></LightbulbHighlight>
                </Lightbulb>
            </LightbulbBox>
        </LampBox>
        {on && (<LightBeam>
            <InspiringMessage>
                <p>"Happiness</p>
                <p>can be found</p>
                <p>even in the</p>
                <p>darkest of times,</p>
                <p>if one only</p>
                <p>remembers to</p>
                <p>turn on the light."</p>
            </InspiringMessage>
            <Author>Albus Dumbledore</Author>
        </LightBeam>)}
    </Container>
)

export default Lamp;