import React, { useState, useMemo }  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Pagination, Select, MenuItem, Stack } from '@mui/material';
import styled from '@emotion/styled';
import PlayerCard from '../PlayerCard/PlayerCard';
import { PlayerInfo } from '../../typing/Player';
import _sortBy from 'lodash/sortBy';
import * as Styled from './Styled';

export default function LeaderBoard() {
  const data:any = useSelector((state:any) => state)
  const dispatch = useDispatch()

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const start = useMemo(() => page <= 1 ? 0 : (page - 1) * pageSize + 1, [page])
  const end = useMemo(() => page <= 1 ? pageSize : page * pageSize, [page])
  const dataSize = Math.round(data.length / pageSize) 

  const rankedData: PlayerInfo[] = useMemo(() => _sortBy(data, ['score']).reverse().map((item: any, index:number) => {
    return {  ...item,
              rank: index + 1
           }
  }),[data])

  const pagingatedData: PlayerInfo[] = useMemo(() => rankedData.slice(start, end),[page])
  
  const handleChangePageSize = (e: any) =>{
    e.target.value && setPageSize(e.target.value)
  }

  return (    
    <Styled.Wrapper>      
      <>
      <Styled.Title variant="h2" >Leader Board</Styled.Title>
      <Styled.PlayerList>
        {pagingatedData.length > 0 && pagingatedData.map((item: any, index: number) => (
          <PlayerCard 
              key={`player-card--${index}`}
              rank={item.rank}
              score={item.score}
              name={item.name}
              avatar={{
                imageUrl: item.profile_img,
                playerName: item.name
              }}>
          </PlayerCard>
        ))}
      </Styled.PlayerList>
      
      <Stack 
        flexDirection="row" 
        justifyContent="space-between"
        alignItems="center">
        <Styled.StyledPagination count={dataSize} onChange={(event, value)=> setPage(value)}/>
        <Select
            labelId="page-size-label"
            id="page-size-select"
            value={pageSize}
            label="Page size"
            onChange={handleChangePageSize}
          >
            <MenuItem value="">
              <em>Page size</em>
            </MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="50">50</MenuItem>
        </Select>
      </Stack>
      </>      
    </Styled.Wrapper>
  );
}