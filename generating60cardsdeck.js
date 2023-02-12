const deck = [];
const suits = ['red', 'orange', 'green', 'blue', 'violet'];
const values = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 'A', 'B'];
for (let i = 0; i < suits.length; i++) {
for (let j = 0; j < values.length; j++) {
deck.push({
suit: suits[i],
value: values[j]
});
}
}
function shuffleDeck(deck) {
for (let i =deck.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[deck[i], deck[j]] =[deck[j], deck[i]];
}
return deck;
}
const shuffledDeck = shuffleDeck(deck);
document.getElementById("generate").addEventListener("click", function() {
const table = document.getElementById("deck");
const deckBody = document.getElementById("deck-body"); 
table.style.display = "";
for (let i = 0; i < shuffledDeck.length; i += 5) {
deckBody.innerHTML += `
<tr>
<td class="${shuffledDeck[i].suit}">${shuffledDeck[i].value}</td>
<td class="${shuffledDeck[i + 1].suit}">${shuffledDeck[i + 1].value}</td>
<td class="${shuffledDeck[i + 2].suit}">${shuffledDeck[i + 2].value}</td>
<td class="${shuffledDeck[i + 3].suit}">${shuffledDeck[i + 3].value}</td>
<td class="${shuffledDeck[i + 4].suit}">${shuffledDeck[i + 4].value}</td>
</tr>
`;
}
});
