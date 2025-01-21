const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateButton");
const quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time." ,
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "Be the change that you wish to see in the world.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "To live is the rarest thing in the world. Most people exist, that is all." 
]
const indexes = new Set();
function generateQuote() {
    if (indexes.size >= quotes.length) {
        quoteElement.innerHTML = "Out of quotes to show. Click again to restart";
        indexes.clear();
    } else {
        while (true) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            if (indexes.has(randomIndex)) continue
            const quote = quotes[randomIndex];
            quoteElement.innerHTML = quote;
            indexes.add(randomIndex);
            break;
        }
    }
}
button.addEventListener("click", function() {
    generateQuote();
});
