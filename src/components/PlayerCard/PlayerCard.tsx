import React, {Suspense, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useWebSocket from '../../hooks/useWebSocket';
import { PlayerCardProps } from '../../typing/PlayerCard';
import * as Styled from './Styled';
import _find from 'lodash/find'

const Avatar = React.lazy(() => import('../Avatar/Avatar'));

export default function PlayerCard({
  id,
  rank, 
  avatar,
  name,
  score, 
  children
}: PlayerCardProps) {
  const dispatch = useDispatch()
  const [message, sendMessage] = useWebSocket();
  const [scoreValue, setScoreValue] = useState<number | undefined>(score);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const isHighlighted = (rank && rank < 4) || false

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }
  const handleScoreChange = (e:any) => {
    setScoreValue(e.target.value)
  }
  const handleSave = () => {
    const payload = {
      id: id,
      name: name,
      profile_img: avatar?.imageUrl,
      score: scoreValue
    }
    dispatch({ type: 'SET_PLAYER', payload: payload })
    sendMessage({ type: 'SET_PLAYER', payload: payload })
    handleToggleEdit()
  }
  useEffect(()=>{
    setScoreValue(score);
  },[score])
  return (
    <Styled.PlayerWrapper elevation={3}>
        <Styled.RankBox highlighted={isHighlighted}>        
        {rank}
        </Styled.RankBox>        
        <Suspense fallback={<div>loading ...</div>}>
            <Avatar {...avatar}/>
        </Suspense>
        <Styled.NameBox highlighted={isHighlighted}>
        {name}
        </Styled.NameBox>
        {!isEditing &&
        <>
          <Styled.ScoreBox highlighted={isHighlighted}>
          {scoreValue}       
          </Styled.ScoreBox>     
          <Styled.ButtonEdit onClick={handleToggleEdit}>Edit</Styled.ButtonEdit> 
        </> 
        }
        {isEditing && 
        <>
          <Styled.InputBox highlighted={isHighlighted}>
          <Styled.InputScore id="input-score" label="score" variant="outlined" value={scoreValue} onChange={handleScoreChange}/>
          </Styled.InputBox>
          <Styled.ButtonSave onClick={handleSave}>Save</Styled.ButtonSave> 
        </>
        }
        {children}
    </Styled.PlayerWrapper>
  );
}