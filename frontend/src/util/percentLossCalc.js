const percentLossCalc = (roast) => {
    if (!roast || !roast.startingWeightG || !roast.endingWeightG) return null;
    const exact = ((roast.startingWeightG - roast.endingWeightG) / roast.startingWeightG) * 100;
    return exact.toFixed(1)
}

export default percentLossCalc;