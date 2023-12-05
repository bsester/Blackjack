let cards =
    [
        {name: "2_of_clubs", value: 2, img: "imgs/cards/2_of_clubs.png"},
        {name: "2_of_diamonds", value: 2, img: "imgs/cards/2_of_diamonds.png"},
        {name: "2_of_hearts", value: 2, img: "imgs/cards/2_of_hearts.png"},
        {name: "2_of_spades", value: 2, img: "imgs/cards/2_of_clubs.png"}
    ]
function cardTest()
{
    let oStr = "";
    for (let i=0; i<cards.length;i++)
    {
        console.log(cards[i]);
        oStr += `<img src ="${cards[i].img}"`;
    }
    let results = document.getElementById("play");
    results.innerHTML = oStr;
}