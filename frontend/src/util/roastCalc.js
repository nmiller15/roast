// Returns a string, given a float representing the percentage of weight lost
function roastCalc(percentLoss) {
    if (percentLoss < 11) {
        return 'Under-Roasted'
    } else if (11 <= percentLoss && percentLoss < 14) {
        return 'Light'
    } else if (14 <= percentLoss && percentLoss < 17) {
        return 'Medium'
    } else if (18 <= percentLoss && percentLoss < 21) {
        return 'Dark'
    } else {
        return 'Over-Roasted'
    }
}

console.log(roastCalc(15.6));

export default roastCalc;