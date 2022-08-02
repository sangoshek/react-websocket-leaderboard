import React, { useState, useMemo, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useWebSocket from '../../hooks/useWebSocket';
import { Select, MenuItem, Stack } from '@mui/material';
import PlayerCard from '../PlayerCard/PlayerCard';
import { PlayerInfo } from '../../typing/Player';
import _sortBy from 'lodash/sortBy';
import * as Styled from './Styled';

export default function LeaderBoard() {
  const [message, sendMessage] = useWebSocket();

  const data:any = useSelector((state:any) => state)
  const dispatch = useDispatch()

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pagingatedData, setPagingatedData] = useState<PlayerInfo[]>([]);
  const dataSize = useMemo(() => Math.round(data.length / pageSize), [data, pageSize]) 
  const start = useMemo(() => page <= 1 ? 0 : (page - 1) * pageSize + 1, [page, pageSize])
  const end = useMemo(() => page <= 1 ? pageSize : page * pageSize, [page, pageSize])
 

  const getPagingatedData = () => {
    const rankedData: PlayerInfo[] = _sortBy(data, ['score']).reverse().map((item: any, index:number) => {
      return {  ...item,
                rank: index + 1
             }
    })
    setPagingatedData(rankedData.slice(start, end))
  }
  
  const handleChangePageSize = (e: any) =>{
    e.target.value && setPageSize(e.target.value)
  }

  useEffect(()=>{
    console.log('data',data)
    getPagingatedData()
  },[data, page, pageSize])

  console.log('message',message)

  // useEffect(()=>{
  //   console.log('hi')
  //   console.log('message',message)
  //   getPagingatedData()
  // },[message])

  return (    
    <Styled.Wrapper>      
      <>
      <Styled.Title variant="h2" >Leader Board</Styled.Title>
      <Styled.PlayerList>
        {pagingatedData.length > 0 && pagingatedData.map((item: any, index: number) => (
          <PlayerCard 
              key={`player-card--${index}`}
              id={item.id}
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
        alignItems="center"
        maxWidth={1280}
        marginX={`auto`}
        marginY={4}
        >
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