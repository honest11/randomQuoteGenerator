'use strict';

// Select all needed Elements
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const newQuote = document.querySelector("#new-quote");
const twitter = document.querySelector("#twitter");
const container = document.querySelector('.quote-container');
const exit = document.querySelector('#twitter');

//  Assigning a variable for my array of objects(key: quote, and value: author) for easy readability
let quotes = [{quote: 'Walking with a friend in the dark is better than walking alone in the dark', author: "Helen Keller"},
    {quote: 'Strength and growth come only through continuous effort and struggle', author: "Napoleon Hill"},
    {quote: 'You cannot find peace by avoiding life', author: "Virginia Woolf"},
    {quote: 'It is easier to build strong children than to repair broken men', author: "Frederick Douglass"},
    {quote: 'If you fell down yesterday, stand up today', author: "H.G. Wells"},
    {quote: 'Change is the end result of all true learning', author: "Leo Buscagalia"},
    {quote: 'A sad soul can kill quicker than a gem', author: "John Steinbeck"},
    {quote: 'The best preperation for tomorrow is doing your best today', author: "H. Jackson Brown, Jr."},
    {quote: 'Leap and the net will appear', author: "John Burroughs"}
];

// Newquote click event
newQuote.addEventListener('click', ()=>{
    // random generated number for the number of objects in my array to be used
    let random = Math.trunc(Math.random() * 9);
    // assigning the randomized number to my quotes array for the (key: quote ) to my quoteEl so it shows in the html
    quoteEl.textContent =  quotes[random].quote;
    // assigning the randomized number to my quotes array for the (value: author ) to my authorEl so it shows in the html
    authorEl.textContent = quotes[random].author;

    // assigning an "Exit" text to the twitter btn in html only after (key: quote) and (value: author) are assigned
    exit.textContent = "Exit";
});
// exit click event
exit.addEventListener('click', ()=>{
    // when exit is clicked it turns all the assigned values into an empty string(nothing)
    quoteEl.textContent =  '';
    authorEl.textContent = '';
    exit.textContent = "";
});