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
  return (
    <Styled.PlayerWrapper elevation={3}>
        <Styled.InfoBox>
        {rank && rank}
        </Styled.InfoBox>        
        <Suspense fallback={<div>loading ...</div>}>
            <Avatar {...avatar}/>
        </Suspense>
        <Styled.InfoBox>
        {name && name}
        </Styled.InfoBox>
        <Styled.ScoreBox>
        {score && score}
        </Styled.ScoreBox>
        {children}
    </Styled.PlayerWrapper>
  );
}