import styled from '@emotion/styled';

type HighlightProps = {
    on: boolean;
}

export default styled.div<HighlightProps>`
    position: absolute;
    left: 22%;
    top: 24%;
    width: 55%;
    height: 55%;
    background-color: transparent;
    border-bottom: 4px solid ${({ on }) => on ? '#ffedba' : 'rgba(212, 212, 212, 0.39)'};
    border-radius: 50%;
    transition: all 0.3s ease-out 0s;
    `;