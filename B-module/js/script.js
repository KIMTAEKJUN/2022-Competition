// const FisherYatesShuffle = (cnt, max, Box, IMG) => {
//     for (let i = 0; i < cnt; i++) {
//     let RanIMG = []
//     RanIMG = IMG.splice(Math.floor(Math.random() * (max - i)), 1)[0];
//     Box.push(RanIMG);
// }}
// function SetCards(){     
//     const ListImgM = [];
//     const ListRes = [];
//     ImgList = [
//         '거제시_유자.jpg', 
//         '거창군_사과.jpg',
//         '고성군_방울토마토.jpg',
//         '김해시_단감.jpg',
//         '남해군_마늘.jpg',
//         '밀양시_대추.jpg',
//         '사천시_멸치.jpg',
//         '산청군_약초.jpg',
//         '양산시_매실.jpg',
//         '의령군_수박.jpg',
//         '진주시_고추.jpg',
//         '창녕군_양파.jpg',
//         '창원시_풋고추.jpg',
//         '통영시_굴.jpg',
//         '하동군_녹차.jpg',
//         '함안군_곶감.jpg',
//         '함양군_밤.jpg',
//         '합천군_돼지고기.jpg'
//     ];
        
//     FisherYatesShuffle(8, 16, ListImgM, ImgList);
//     const TwinListImgM = JSON.parse(JSON.stringify(ListImgM));
//     const OneMore = ListImgM.concat(TwinListImgM);
//     FisherYatesShuffle(16, 16, ListRes, OneMore);
//     for(let i = 0; i < 16; i++){
//         const img = cards[i].querySelector("span:nth-of-type(2) img");
//         const span = cards[i].querySelector("span:nth-of-type(2) span");
//         const SpanAlt = ListRes[i].split('_');
//         img.src = `img/특산품/${ListRes[i]}`;
//         img.alt = `${SpanAlt[0]}`;
//         span.innerText = `${SpanAlt[0]}`;
//     }
// }