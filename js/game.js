const cards = require('cards.js');
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