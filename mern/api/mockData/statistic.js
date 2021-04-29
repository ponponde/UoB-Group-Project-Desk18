const statsArrayUp = [
    {
        title: "Shopping online",
        rate: "48.72%",
    },
    {
        title: "Broke up",
        rate: "8.6%",
    },
    {
        title: "Start backing",
        rate: "17.2%",
    },
    {
        title: "Wear masks",
        rate: "43.62%",
    },
    {
        title: "Cooking by myself",
        rate: "52.1%",
    },
];
const statsArrayDown = [
    {
        title: "Dating",
        rate: "19.64%",
    },
    {
        title: "Jogging",
        rate: "6.82%",
    },
    {
        title: "Go on a holiday",
        rate: "38.97%",
    },
    {
        title: "Approve the government",
        rate: "12.34%",
    },
    {
        title: "Eat away",
        rate: "69.51%",
    },
];
const getRandomNum = (max, min) => {
    if (!min) {
        min = 0;
        max--;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getMockStatistics = () => {
    return {
        up: statsArrayUp[getRandomNum(5)],
        down: statsArrayDown[getRandomNum(5)],
    };
};

exports.getMockStatistics = getMockStatistics;
