import React, { useState, useMemo }  from 'react';
import { Typography, Pagination } from '@mui/material';
import styled from '@emotion/styled';
import PlayerCard from '../PlayerCard/PlayerCard';
import { LeaderBoardProps } from '../../typing/LeaderBoard';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    background-color: #ededed;
    margin: 0 auto;
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

export default function LeaderBoard({data}: LeaderBoardProps) {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const dataSize = Math.round(data.length / pageSize)

  const pagingatedData = data && data.slice(page, pageSize)
  console.log('pagingatedData',pagingatedData)
  return (    
    <Wrapper>      
      <>
      <Typography variant="h2" component="div">LeaderBoard</Typography>
      <PlayerList>
        {pagingatedData.length > 0 && pagingatedData.map((item, index) => (
          <PlayerCard 
              key={`player-card--${index}`}
              avatar={{
                imageUrl: item.profile_img,
                playerName: item.name
              }}>
          </PlayerCard>
        ))}
      </PlayerList>
      <StyledPagination count={dataSize} onChange={(event, value)=> setPage(value)}/>
      </>      
    </Wrapper>
  );
}