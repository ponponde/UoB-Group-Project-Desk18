const getRandomNum = (max, min) => {
    if (!min) {
        min = 0;
        max--;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const getMockName = () => {
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

const mockPhoto = () => {
    const arr = [
        "https://api.time.com/wp-content/uploads/2021/04/self-love.jpg",
        "https://api.time.com/wp-content/uploads/2014/05/166259035.jpg",
        "https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people-1920x1131.jpg",
        "https://loremflickr.com/320/240",
    ];
    return arr[getRandomNum(4)];
};

const getRanklist=()=>{
   const res = [];
   let i = 1;
   while(i<6){
      const newObj = {
         points: getRandomNum(12000*(1/i), 9000*(1/i)),
         name:getMockName(),
         photo:mockPhoto(),
      };
      res.push(newObj);
      i++;
   }
   return res;
}

exports.getRanklist = getRanklist;