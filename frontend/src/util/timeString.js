// Seconds is an integer
const timeString = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes ? minutes + "'" : ''} ${seconds}"`;
}

export default timeString;