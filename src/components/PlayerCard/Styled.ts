import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

interface Props {
    highlighted: boolean;
}

const PlayerWrapper = styled(Paper)`
    margin: 2rem auto;
    max-width: 1280px;
    height: 140px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const RankBox = styled(Box)<Props>`
    width: 10%;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    ${props => props.highlighted ? `color: red;` : `color: #000`};
`
const NameBox = styled(Box)<Props>`
    width: 20%;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    ${props => props.highlighted ? `color: red;` : `color: #000`};
`

const ScoreBox = styled(Box)<Props>`
    width: 50%;
    text-align: right;
    font-size: 3rem;
    font-weight: 500;
    ${props => props.highlighted ? `color: red;` : `color: #000`};
`

export {
    PlayerWrapper,
    NameBox,
    ScoreBox,
    RankBox
}