import React  from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import PlayerCard from '../PlayerCard/PlayerCard';
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    background-color: #ededed;
    margin: 0 auto;
`

export default function LeaderBoard() {
  return (
    <Wrapper>
      
      <Typography variant="h2" component="div">LeaderBoard</Typography>
      <PlayerCard 
      avatar={{
                imageUrl: "https://i.pravatar.cc/300&img=4",
                playerName: "Vincent"
              }}>
                Name
      </PlayerCard>
    </Wrapper>
  );
}