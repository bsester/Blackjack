let allCards =
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

class Deck // --------------------------------- DECK CLASS
{
    constructor(cards, numCards)
    {
        this.numCards = 52;
        this.cards = cards;
    }
    reshuffle()
    {
        for (let i=0;i<this.cards.length;i++)
            this.cards[i].dealt = false;
        this.numCards = this.cards.length;
    }
}
// ------------------- END DECK CLASS ------------------------------

class Player // -------------------------------- PLAYER CLASS
{
    constructor(hand, bal)
    {
        this.hand = hand;
        this.bal = bal;
    }
    getBal()
    {
        return this.bal;
    }
    getHand()
    {
        return this.hand;
    }
    dealCard(deck)
    {
        if (deck.numCards <= 0)
            deck.reshuffle();

        let valid = false;
        let idx = -1;
        while (!valid)
        {
            idx = Math.floor( Math.random() * deck.cards.length );
            if (!deck.cards[idx].dealt)
            {
                valid = true;
                deck.cards[idx].dealt = true;
                deck.numCards--;
            }
        }
        this.hand.push(deck.cards[idx]);
    }
}
// ------------------- END PLAYER CLASS ------------------------------

// objects to keep track of data
let player = new Player([], 1000);
let dealer = new Player([], 1000);
let deck = new Deck(allCards, allCards.length);
// function to start a round of gameplay
function makeBet()
{
    player.hand = [];
    dealer.hand = [];
    let bet = 0;
    if (!validateBet(player, bet))
    {
        // bad bet, error msg and leave
    }

    // deal 2 cards to each player
    player.dealCard(deck);
    player.dealCard(deck);

    dealer.dealCard(deck);
    dealer.dealCard(deck);
    // check for victory, display game state
    displayGameState(player, dealer);
}
function validateBet(player, bet)
{
    if (bet > player.bal)
        return false
    if (isNaN(bet))
        return false;
    return true;
}
function displayGameState(player, dealer)
{
    // show player cards
    let result = document.getElementById("playerArea");
    let oStr = "";
    for (let i=0; i<player.hand.length;i++)
        oStr += '<img src =' + '"' + player.hand[i].img + '"'
            + 'id = "playCard"'+ '>';
    result.innerHTML = oStr;

    // show dealer cards
    result = document.getElementById("dealerArea");
    oStr = "";
    for (let i=0; i<dealer.hand.length;i++)
        oStr += '<img src =' + '"' + dealer.hand[i].img + '"'
            + 'id = "playCard"'+ '>';
    result.innerHTML = oStr;
}
// execution flow -------------
// while (player.bal > 0)
// {
//    validate bet
//    give 2 cards each
//    check victory, act accordingly
//    while (no victory)
//    {
//      hit or stick
//      check victory, act accordingly
//    }
// }
