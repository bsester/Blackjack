let cards =
    [
        {name: "2_of_clubs", value: 2, img: "imgs/cards/2_of_clubs.png", dealt: false},
        {name: "2_of_diamonds", value: 2, img: "imgs/cards/2_of_diamonds.png", dealt: false},
        {name: "2_of_hearts", value: 2, img: "imgs/cards/2_of_hearts.png", dealt: false},
        {name: "2_of_spades", value: 2, img: "imgs/cards/2_of_clubs.png", dealt: false},
        {name: "3_of_clubs", value: 3, img: "imgs/cards/3_of_clubs.png", dealt: false},
        {name: "3_of_diamonds", value: 3, img: "imgs/cards/3_of_diamonds.png", dealt: false},
        {name: "3_of_hearts", value: 3, img: "imgs/cards/3_of_hearts.png", dealt: false},
        {name: "3_of_spades", value: 3, img: "imgs/cards/3_of_clubs.png", dealt: false},
        {name: "4_of_clubs", value: 4, img: "imgs/cards/4_of_clubs.png", dealt: false},
        {name: "4_of_diamonds", value: 4, img: "imgs/cards/4_of_diamonds.png", dealt: false},
        {name: "4_of_hearts", value: 4, img: "imgs/cards/4_of_hearts.png", dealt: false},
        {name: "4_of_spades", value: 4, img: "imgs/cards/4_of_clubs.png", dealt: false},
        {name: "5_of_clubs", value: 6, img: "imgs/cards/5_of_clubs.png", dealt: false},
        {name: "5_of_diamonds", value: 5, img: "imgs/cards/5_of_diamonds.png", dealt: false},
        {name: "5_of_hearts", value: 5, img: "imgs/cards/5_of_hearts.png", dealt: false},
        {name: "5_of_spades", value: 5, img: "imgs/cards/5_of_clubs.png", dealt: false},
        {name: "6_of_clubs", value: 6, img: "imgs/cards/6_of_clubs.png", dealt: false},
        {name: "6_of_diamonds", value: 6, img: "imgs/cards/6_of_diamonds.png", dealt: false},
        {name: "6_of_hearts", value: 6, img: "imgs/cards/6_of_hearts.png", dealt: false},
        {name: "6_of_spades", value: 6, img: "imgs/cards/6_of_clubs.png", dealt: false},
        {name: "7_of_clubs", value: 7, img: "imgs/cards/7_of_clubs.png", dealt: false},
        {name: "7_of_diamonds", value: 7, img: "imgs/cards/7_of_diamonds.png", dealt: false},
        {name: "7_of_hearts", value: 7, img: "imgs/cards/7_of_hearts.png", dealt: false},
        {name: "7_of_spades", value: 7, img: "imgs/cards/7_of_clubs.png", dealt: false},
        {name: "8_of_clubs", value: 8, img: "imgs/cards/8_of_clubs.png", dealt: false},
        {name: "8_of_diamonds", value: 8, img: "imgs/cards/8_of_diamonds.png", dealt: false},
        {name: "8_of_hearts", value: 8, img: "imgs/cards/8_of_hearts.png", dealt: false},
        {name: "8_of_spades", value: 8, img: "imgs/cards/8_of_clubs.png", dealt: false},
        {name: "9_of_clubs", value: 9, img: "imgs/cards/9_of_clubs.png", dealt: false},
        {name: "9_of_diamonds", value: 9, img: "imgs/cards/9_of_diamonds.png", dealt: false},
        {name: "9_of_hearts", value: 9, img: "imgs/cards/9_of_hearts.png", dealt: false},
        {name: "9_of_spades", value: 9, img: "imgs/cards/9_of_clubs.png", dealt: false},
        {name: "10_of_clubs", value: 10, img: "imgs/cards/10_of_clubs.png", dealt: false},
        {name: "10_of_diamonds", value: 10, img: "imgs/cards/10_of_diamonds.png", dealt: false},
        {name: "10_of_hearts", value: 10, img: "imgs/cards/10_of_hearts.png", dealt: false},
        {name: "10_of_spades", value: 10, img: "imgs/cards/10_of_clubs.png", dealt: false},
        {name: "ace_of_clubs", value: 11, img: "imgs/cards/ace_of_clubs.png", dealt: false},
        {name: "ace_of_diamonds", value: 11, img: "imgs/cards/ace_of_diamonds.png", dealt: false},
        {name: "ace_of_hearts", value: 11, img: "imgs/cards/ace_of_hearts.png", dealt: false},
        {name: "ace_of_spades", value: 11, img: "imgs/cards/ace_of_clubs.png", dealt: false},
        {name: "jack_of_clubs", value: 10, img: "imgs/cards/jack_of_clubs.png", dealt: false},
        {name: "jack_of_diamonds", value: 10, img: "imgs/cards/jack_of_diamonds.png", dealt: false},
        {name: "jack_of_hearts", value: 10, img: "imgs/cards/jack_of_hearts.png", dealt: false},
        {name: "jack_of_spades", value: 10, img: "imgs/cards/jack_of_clubs.png", dealt: false},
        {name: "king_of_clubs", value: 10, img: "imgs/cards/king_of_clubs.png", dealt: false},
        {name: "king_of_diamonds", value: 10, img: "imgs/cards/king_of_diamonds.png", dealt: false},
        {name: "king_of_hearts", value: 10, img: "imgs/cards/king_of_hearts.png", dealt: false},
        {name: "king_of_spades", value: 10, img: "imgs/cards/king_of_clubs.png", dealt: false},
        {name: "queen_of_clubs", value: 10, img: "imgs/cards/queen_of_clubs.png", dealt: false},
        {name: "queen_of_diamonds", value: 10, img: "imgs/cards/queen_of_diamonds.png", dealt: false},
        {name: "queen_of_hearts", value: 10, img: "imgs/cards/queen_of_hearts.png", dealt: false},
        {name: "queen_of_spades", value: 10, img: "imgs/cards/queen_of_clubs.png", dealt: false}
    ];
let numCards = 52;
function getCard()
{
    if (numCards <= 0)
        reshuffle();

    let valid = false;
    let idx = -1;
    while (!valid)
    {
        idx = Math.floor( Math.random() * cards.length );
        if (!cards[idx].dealt)
        {
            valid = true;
            cards[idx].dealt = true;
            numCards--;
        }
    }
    return cards[idx];
}
function displayCard()
{
    let card = getCard();
    let src = '"' + card.img + '"';
    document.getElementById("play").innerHTML = '<img src = ' + src + 'alt = "your card">';
}
function reshuffle()
{

}