const MYSELF = "Ivan";

const quotes = [
    {
        "quote": "I am not a writer; and it shows.",
        "author": MYSELF
    },
    {
        "quote": "I consider myself a tech guy; at default to have the social skills to be anything else.",
        "author": MYSELF
    },
    {
        "quote": "I am a husband and a father, and I can confidently say that the learning curve for those is steeper than the one to exit vim.",
        "author": MYSELF
    },
];

const displayQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);

    let quote = quotes[index].quote;
    let author = quotes[index].author;

    if (!author) { author = "Anon" }

    document.getElementById("home-quote").innerHTML = quote;
    document.getElementById("home-quote-author").innerHTML = author;
}

displayQuote();
