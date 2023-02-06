const suits = ["clubs", "diamonds", "spades", "hearts"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J","Q", "K", "A"];
let deck = [];
for (let suit of suits) {
for (let value of values) {
deck.push({ suit, value});
}
}
function shuffleDeck(deck) {
for (let i = 0; i < deck.length; i++) {
let randomIndex =Math.floor(Math.random() * deck.length);
[deck[i], deck[randomIndex]] = [deck[randomIndex],deck[i]];
}
return deck;
}
const shuffledDeck = shuffleDeck(deck);
