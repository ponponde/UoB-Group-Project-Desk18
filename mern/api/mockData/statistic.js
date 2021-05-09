const statsArrayUp = [
    {
        title: "Shopping online",
        rate: 48.7,
    },
    {
        title: "Broke up",
        rate: 8.6,
    },
    {
        title: "Start backing",
        rate: 17.2,
    },
    {
        title: "Wear masks",
        rate: 43.6,
    },
    {
        title: "Cooking by myself",
        rate: 52.1,
    },
];
const statsArrayDown = [
    {
        title: "Dating",
        rate: 19.6,
    },
    {
        title: "Jogging",
        rate: 6.8,
    },
    {
        title: "Go on a holiday",
        rate: 38.9,
    },
    {
        title: "Approve the government",
        rate: 12.3,
    },
    {
        title: "Eat away",
        rate: 69.5,
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
