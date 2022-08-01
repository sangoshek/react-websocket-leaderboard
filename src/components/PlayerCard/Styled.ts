import styled from '@emotion/styled';
import { Paper, Box, TextField, Button } from '@mui/material';
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
const InputBox = styled(Box)<Props>`
    width: 50%;
    text-align: right;
`

const InputScore = styled(TextField)`
    width: 100px;
    font-size: 3rem;
`
const ButtonEdit = styled(Button)`
    width: 10%;
    text-align: center;
    color: #999;
`
const ButtonSave = styled(Button)`
    width: 10%;
    text-align: center;
`

export {
    PlayerWrapper,
    NameBox,
    ScoreBox,
    RankBox,
    InputBox,
    InputScore,
    ButtonEdit,
    ButtonSave
}