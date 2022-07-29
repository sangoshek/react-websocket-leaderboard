import React, {Suspense} from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const Avatar = React.lazy(() => import('../Avatar/Avatar'));

const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    background-color: #ededed;
    margin: 0 auto;
`

export default function LeaderBoard() {
  return (
    <Wrapper>
      <Suspense fallback={<div>loading ...</div>}>
        <Avatar/>
      </Suspense>
      <Typography variant="h2" component="div">LeaderBoard</Typography>
    </Wrapper>
  );
}