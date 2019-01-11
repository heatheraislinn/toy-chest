import styled from '@emotion/styled';

type LightbulbProps = {
    on: boolean;
}

export default styled.div<LightbulbProps>`
    position: absolute;
    left: 35%;
    top: -33%;
    width: 28%;
    height: 110%;
    background-color: ${({ on }) => on ? '#ffdb76' : 'rgba(189, 189, 189, 0.75)'};
    border-radius: 50%;
    transition: all 0.1s ease-out 0s; 
`