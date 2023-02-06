const deck = [];
const suits = ['red', 'orange', 'green', 'blue', 'violet'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B'];
for (let i = 0; i < suits.length; i++) {
for (let j = 0; j < values.length; j++) {
deck.push({
suit: suits[i],
value: values[j]
});
}
}
function shuffleDeck(deck) {
for (let i = deck.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[deck[i],deck[j]] = [deck[j], deck[i]];
}
return deck;
}
const shuffledDeck = shuffleDeck(deck);
