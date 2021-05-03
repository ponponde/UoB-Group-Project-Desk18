import { name } from "../data/countryName";
export const getRandomNum = (max, min) => {
    if (!min) {
        min = 0;
        max--;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getMockName = () => {
    const mockName = [
        "spoonguyuk",
        "KKOTTE",
        "Wea_boo_Jones",
        "Eyrdin",
        "kesdo",
        "Milith",
        "hirdic",
        "nmcj1996",
        "Kitbuqa",
        "Snoopsoruts",
        "bickyGrevais",
        "TirNanog84",
    ];

    return mockName[getRandomNum(12)];
};

export const mockPhoto = () => {
    const arr = [
        "https://api.time.com/wp-content/uploads/2021/04/self-love.jpg",
        "https://api.time.com/wp-content/uploads/2014/05/166259035.jpg",
        "https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people-1920x1131.jpg",
        "https://loremflickr.com/320/240",
    ];
    return arr[getRandomNum(4)];
};

export const getMockLike = () => {
    return getRandomNum(500);
};

export const formatName = (code) => {
    if (code == "Global") {
        return code;
    }
    let res = "";
    name.forEach((n) => {
        if (n.ISO2 == code.toUpperCase()) {
            res = n.Country;
        }
    });
    return res;
};
