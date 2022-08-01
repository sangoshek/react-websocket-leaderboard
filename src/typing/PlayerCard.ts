import React from 'react';
import { AvatarProps } from './Avatar';

interface PlayerCardProps {    
    rank?: number
    avatar?: AvatarProps
    name?: string
    score?: number
    children?: React.ReactNode 
}

export type {
    PlayerCardProps
}