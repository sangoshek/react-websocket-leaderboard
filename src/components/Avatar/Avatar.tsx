import React from 'react';
import styled from '@emotion/styled';
import { AvatarProps } from '../../typing/Avatar';

const AvatarWrapper = styled.div`
    border-radius: 99999;
    background-color: #ededed;
    width: 48px;
    height: 48px;
`

export default function Avatar({imageUrl, playerName}: AvatarProps) {
  return (
    <AvatarWrapper>
        Hi
    </AvatarWrapper>
  );
}