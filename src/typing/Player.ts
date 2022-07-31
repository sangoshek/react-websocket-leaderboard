
interface PlayerProps {
    name?: string,
    score?: number,
    rank?: number
}

type PlayerInfo = {
    profile_img: string,
    name: string,
    score: number
}

export type {
    PlayerProps,
    PlayerInfo
}