// Seconds is an integer
const timeString = (totalSeconds, format = null) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (format === null) {
        return `${minutes ? minutes + "'" : ''}${seconds < 10 ? '0' + seconds : seconds}"`;
    }

    if (format === 'colon') {
        return `${minutes ? minutes + ':' : '0:'}${seconds < 10 ? '0' + seconds : seconds}`;
    }
}

export default timeString;