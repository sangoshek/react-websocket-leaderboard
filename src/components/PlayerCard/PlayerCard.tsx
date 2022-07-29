import React, {Suspense} from 'react';
import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { PlayerCardProps } from '../../typing/PlayerCard';

const Avatar = React.lazy(() => import('../Avatar/Avatar'));

const PlayerWrapper = styled(Paper)`
    margin: 2rem 0;
`

export default function PlayerCard({avatar, children}: PlayerCardProps) {
  return (
    <PlayerWrapper elevation={3}>
        <Suspense fallback={<div>loading ...</div>}>
            <Avatar {...avatar}/>
        </Suspense>
        {children}
    </PlayerWrapper>
  );
}