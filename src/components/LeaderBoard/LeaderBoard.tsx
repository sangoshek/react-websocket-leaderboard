import React  from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import PlayerCard from '../PlayerCard/PlayerCard';

type PlayerInfo = {
  profile_img: string,
  name: string,
  score: number
}

interface LeaderBoardProps {
  data: PlayerInfo[]
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    background-color: #ededed;
    margin: 0 auto;
`

export default function LeaderBoard({data}: LeaderBoardProps) {
  
  return (    
    <Wrapper>      
      <>
      <Typography variant="h2" component="div">LeaderBoard</Typography>
      <>
      {data.length > 0 && data.map((item, index) => (
        <PlayerCard 
            key={`player-card--${index}`}
            avatar={{
              imageUrl: item.profile_img,
              playerName: item.name
            }}>
        </PlayerCard>
      ))}
      </>
      </>      
    </Wrapper>
  );
}