
import { Typography, Pagination } from '@mui/material';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1920px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    margin: 0 auto;

    @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
    }
`
const Title = styled(Typography)`
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    font-weight: 500;
`

const PlayerList = styled.div`
    display: block;
`
const StyledPagination = styled(Pagination)`
    padding: 0 0 2rem 0;
    & > ul{
        display: flex;
        justify-content: center;
    }
`

export {
    Wrapper,
    Title,
    PlayerList,
    StyledPagination
}