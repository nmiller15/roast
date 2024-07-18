import roastCalc from "./roastCalc";

// Add the word "Roast where necessary"
const roastString = (percentLoss) => {
    let string = roastCalc(percentLoss);
    if (string === "Light" ||
        string === "Medium" ||
        string === "Dark"
    ) string = string + " Roast";
    return string;
}

export default roastString;