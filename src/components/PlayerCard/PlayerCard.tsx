import React, {Suspense, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
  const [scoreValue, setScoreValue] = useState<number | undefined>(score);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const isHighlighted = (rank && rank < 4) || false

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }
  const handleScoreChange = (e:any) => {
    console.log(e.target.value)
    setScoreValue(e.target.value)
  }
  const handleSave = () => {
    console.log('id',id)
    const payload = {
      id: id,
      name: name,
      profile_img: avatar?.imageUrl,
      score: 0
    }
    dispatch({ type: 'SET_PLAYER', payload: payload })
    handleToggleEdit()
  }
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