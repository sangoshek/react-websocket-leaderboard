import React, {Suspense, useState} from 'react';
import { PlayerCardProps } from '../../typing/PlayerCard';
import * as Styled from './Styled';

const Avatar = React.lazy(() => import('../Avatar/Avatar'));

export default function PlayerCard({
  rank, 
  avatar,
  name,
  score, 
  children
}: PlayerCardProps) {
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
    console.log('save')
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