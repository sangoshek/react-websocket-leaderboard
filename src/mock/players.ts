import mockPlayers from './mockPlayers.json';

const getRandomNmuber = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const playerInfo = mockPlayers.map((item, index) => {
    return {
        id: index + 1,
        name: item.name,
        profile_img: `https://i.pravatar.cc/150?img=${getRandomNmuber(1,67)}`,
        score: getRandomNmuber(1,100)
    }
})

export {
    playerInfo
}