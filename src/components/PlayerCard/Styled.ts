import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

const PlayerWrapper = styled(Paper)`
    margin: 2rem auto;
    max-width: 1280px;
    height: 140px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const InfoBox = styled(Box)`
    width: 10%;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
`


const ScoreBox = styled(Box)`
    width: 60%;
    text-align: right;
    font-size: 3rem;
    font-weight: 500;
`

export {
    PlayerWrapper,
    ScoreBox,
    InfoBox
}