class Roast {
    constructor(date) {
        this.id = roasts.length + 1
        this.dateRoasted = date
        this.rating = 0
        this.origin = ''
        this.variety = ''
        this.name = ''
        this.startingWeightG = null
        this.endingWeightG = null
        this.heatLevel = ''
        this.startTempF = null
        this.lowestTempF = null
        this.tempRiseSeconds = null
        this.firstCrackSeconds = null
        this.tempRiseSeconds = null
        this.openedLidSeconds = null
        this.heatOffSeconds = null
        this.dumpedSeconds = null
        this.isFavorite = false
        this.notes = ''
    }
    
    setProperty(property, value) {
        if (this.property) {
            this.property = value;
        }
    }

    saveRoast() {
        const found = roasts.find((roast, index) => {
            if (roast.id === this.id) {
                return index
            }
        })   
        if (found) {
            roasts[found] = this;
        } else {
            roasts.shift(this);
        }
    }
}

const roasts = [
    {
        id: 1,
        dateRoasted: new Date('July 22, 2024'),
        rating: 3,
        origin: "Ethiopian",
        variety: "Yirgacheffe",
        // TODO: Names should be generated by the controller if no name is submitted by combining the origin and the variety.
        name: "Ethiopian Yirgacheffe",
        startingWeightG: 228,
        endingWeightG: 191,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 325,
        firstCrackSeconds: 140,
        tempRiseSeconds: 180,
        openedLidSeconds: 210,
        heatOffSeconds: 235,
        dumpedSeconds: 255,
        isFavorite: false,
        notes: "Doesn’t taste as good as last time... I wonder if the weather is making the beans roast faster now that it’s warmer"
    },
    {
        id: 2,
        dateRoasted: new Date('July 15, 2024'),
        rating: 4,
        origin: "Brazil",
        variety: "Daterra",
        name: "Brazil Daterra",
        startingWeightG: 228,
        endingWeightG: 199,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 240,
        firstCrackSeconds: 120,
        tempRiseSeconds: 150,
        openedLidSeconds: 200,
        heatOffSeconds: 225,
        dumpedSeconds: 270,
        isFavorite: false,
        notes: "This Brazil is very good! Took a chance and left it on longer than I usually leave things on for."
    },
    {
        id: 3,
        dateRoasted: new Date('July 1, 2024'),
        rating: 2,
        origin: "Colombia",
        variety: "Buesaco",
        name: "Colombia Buesaco",
        startingWeightG: 228,
        endingWeightG: 187,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 325,
        firstCrackSeconds: 100,
        tempRiseSeconds: 175,
        openedLidSeconds: 212,
        heatOffSeconds: 249,
        dumpedSeconds: 260,
        isFavorite: false,
        notes: "Too dark"
    },
    {
        id: 4,
        dateRoasted: new Date('June 15, 2024'),
        rating: 5,
        origin: "Brazil",
        variety: "Daterra",
        name: "Brazil Daterra",
        startingWeightG: 228,
        endingWeightG: 196,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 340,
        firstCrackSeconds: 100,
        tempRiseSeconds: 145,
        openedLidSeconds: 170,
        heatOffSeconds: 190,
        dumpedSeconds: 200,
        isFavorite: false,
        notes: "Too quick again..."
    },
    {
        id: 5,
        dateRoasted: new Date('June 11, 2024'),
        rating: 3,
        origin: "Ethiopian",
        variety: "Yirgacheffe",
        name: "Ethiopian Yirgacheffe",
        startingWeightG: 228,
        endingWeightG: 187,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 325,
        firstCrackSeconds: 132,
        tempRiseSeconds: 178,
        openedLidSeconds: 210,
        heatOffSeconds: 220,
        dumpedSeconds: 260,
        isFavorite: false,
        notes: "I'm starting to dial this one in!"
    },
    {
        id: 6,
        dateRoasted: new Date('June 3, 2024'),
        rating: 3,
        origin: "Colombian",
        variety: "Buesaco",
        name: "Colombia Buesaco",
        startingWeightG: 228,
        endingWeightG: 192,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 325,
        firstCrackSeconds: 140,
        tempRiseSeconds: 180,
        openedLidSeconds: 210,
        heatOffSeconds: 235,
        dumpedSeconds: 255,
        isFavorite: true,
        notes: "Just got this roast, trying it out for the first time."
    },
    {
        id: 7,
        dateRoasted: new Date('April 15, 2024'),
        rating: 5,
        origin: "Brazil",
        variety: "Daterra",
        name: "Brazil Daterra",
        startingWeightG: 228,
        endingWeightG: 196,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 340,
        firstCrackSeconds: 100,
        tempRiseSeconds: 145,
        openedLidSeconds: 170,
        heatOffSeconds: 190,
        dumpedSeconds: 200,
        isFavorite: false,
        notes: "I was a little quick on the trigger for this one."
    },
    {
        id: 8,
        dateRoasted: new Date('April 2, 2024'),
        rating: 5,
        origin: "Ethiopian",
        variety: "Yirgacheffe",
        name: "Ethiopian Yirgacheffe",
        startingWeightG: 228,
        endingWeightG: 191,
        heatLevel: "Med",
        startTempF: 400,
        lowestTempF: 325,
        firstCrackSeconds: 140,
        tempRiseSeconds: 180,
        openedLidSeconds: 210,
        heatOffSeconds: 235,
        dumpedSeconds: 255,
        isFavorite: true,
        notes: "My first time trying this blend!"
    }
]

export { Roast };
export default roasts;