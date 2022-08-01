import React, {Suspense} from 'react';
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
  const isHighlighted = (rank && rank < 4) || false
  return (
    <Styled.PlayerWrapper elevation={3}>
        <Styled.RankBox highlighted={isHighlighted}>
        {rank && rank}
        </Styled.RankBox>        
        <Suspense fallback={<div>loading ...</div>}>
            <Avatar {...avatar}/>
        </Suspense>
        <Styled.NameBox highlighted={isHighlighted}>
        {name && name}
        </Styled.NameBox>
        <Styled.ScoreBox highlighted={isHighlighted}>
        {score && score}
        </Styled.ScoreBox>
        {children}
    </Styled.PlayerWrapper>
  );
}