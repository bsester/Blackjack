let cards =
    [
        {name: "2_of_clubs", value: 2, img: "imgs/cards/2_of_clubs.png"},
        {name: "2_of_diamonds", value: 2, img: "imgs/cards/2_of_diamonds.png"},
        {name: "2_of_hearts", value: 2, img: "imgs/cards/2_of_hearts.png"},
        {name: "2_of_spades", value: 2, img: "imgs/cards/2_of_clubs.png"},
        {name: "3_of_clubs", value: 3, img: "imgs/cards/3_of_clubs.png"},
        {name: "3_of_diamonds", value: 3, img: "imgs/cards/3_of_diamonds.png"},
        {name: "3_of_hearts", value: 3, img: "imgs/cards/3_of_hearts.png"},
        {name: "3_of_spades", value: 3, img: "imgs/cards/3_of_clubs.png"},
        {name: "4_of_clubs", value: 4, img: "imgs/cards/4_of_clubs.png"},
        {name: "4_of_diamonds", value: 4, img: "imgs/cards/4_of_diamonds.png"},
        {name: "4_of_hearts", value: 4, img: "imgs/cards/4_of_hearts.png"},
        {name: "4_of_spades", value: 4, img: "imgs/cards/4_of_clubs.png"},
        {name: "5_of_clubs", value: 6, img: "imgs/cards/5_of_clubs.png"},
        {name: "5_of_diamonds", value: 5, img: "imgs/cards/5_of_diamonds.png"},
        {name: "5_of_hearts", value: 5, img: "imgs/cards/5_of_hearts.png"},
        {name: "5_of_spades", value: 5, img: "imgs/cards/5_of_clubs.png"},
        {name: "6_of_clubs", value: 6, img: "imgs/cards/6_of_clubs.png"},
        {name: "6_of_diamonds", value: 6, img: "imgs/cards/6_of_diamonds.png"},
        {name: "6_of_hearts", value: 6, img: "imgs/cards/6_of_hearts.png"},
        {name: "6_of_spades", value: 6, img: "imgs/cards/6_of_clubs.png"},
        {name: "7_of_clubs", value: 7, img: "imgs/cards/7_of_clubs.png"},
        {name: "7_of_diamonds", value: 7, img: "imgs/cards/7_of_diamonds.png"},
        {name: "7_of_hearts", value: 7, img: "imgs/cards/7_of_hearts.png"},
        {name: "7_of_spades", value: 7, img: "imgs/cards/7_of_clubs.png"},
        {name: "8_of_clubs", value: 8, img: "imgs/cards/8_of_clubs.png"},
        {name: "8_of_diamonds", value: 8, img: "imgs/cards/8_of_diamonds.png"},
        {name: "8_of_hearts", value: 8, img: "imgs/cards/8_of_hearts.png"},
        {name: "8_of_spades", value: 8, img: "imgs/cards/8_of_clubs.png"},



    ]
function cardTest()
{
    let oStr = "";
    for (let i=0; i<cards.length;i++)
    {
        console.log(cards[i]);
        oStr += `<img src ="${cards[i].img}" id = "logo" alt="${cards[i].name}">`;
    }
    let results = document.getElementById("play");
    results.innerHTML = oStr;
}