import React from 'react';
import { AvatarProps } from './Avatar';

interface PlayerCardProps {    
    rank?: number
    avatar?: AvatarProps
    children?: React.ReactNode 
}

export type {
    PlayerCardProps
}