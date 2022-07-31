import React from 'react';
import styled from '@emotion/styled';
import { Avatar as MUIAvator, Stack }  from '@mui/material';
import { AvatarProps } from '../../typing/Avatar';

const AvatarWrapper = styled(Stack)`
    width: 80px;
    height: 80px;
    margin: 2rem;
`

export default function Avatar(
  {
    imageUrl, 
    playerName
  }: AvatarProps
  ) {
  return (
    <AvatarWrapper 
      flexDirection="column" 
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      >
        <MUIAvator 
          alt={playerName} 
          src={imageUrl} 
          />
        {playerName}
    </AvatarWrapper>
  );
}