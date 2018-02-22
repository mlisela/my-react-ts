
export const getRandomArrayIndex = (avatarIndexArr: Array<number>) => {
    while (avatarIndexArr.length < 5) {
        const randomNumber = Math.floor(Math.random() * 30);
        if (avatarIndexArr.indexOf(randomNumber) > -1) {
            continue;
        }
        avatarIndexArr.push(randomNumber);
    }
    return avatarIndexArr;
};