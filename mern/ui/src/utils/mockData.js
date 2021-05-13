import { name } from "../data/countryName";
export const getRandomNum = (max, min) => {
    if (!min) {
        min = 0;
        max--;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getMockText = () => {
    const mockText = [
        "Florida is 100% open and back to normal like covid never happened, and yet cases have still been going down for 3 weeks. While variants may be “surging”, overall cases are doing the opposite.",
        "The problem is they are still above the positivity rate to be confident in their numbers.",
        "I mean, 'cratering' feels like a good way to describe what first doses have been doing over the last week or two.",
        "In early January, they were averaging 8600 cases per day. Now it's 72 cases per day.",
        "Hopefully that's the US in 2-3 months relative to population.",
        "In mongolia we are giving people around 17$ for per people got 2nd shot.",
        "How’s Mongolia doing with the virus situation?",
        "Oh it’s gonna happen. You heard it here first!",
        "Your comment made my morning",
        "I’m not American and I don’t live there, but this news is heartwarming.",
        "Should say 'vaccine' rather than 'virus shots'``This post is now locked to due to repeated anti-vaccine spam``Isn't that what the J&J vaccine is?",
    ];
    return mockText[getRandomNum(11)];
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
