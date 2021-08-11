/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/


/*** 
 * List of quotes, authors, citations, and years (if applicable), stored as objects in an array.
***/
const quotes = [
  {
    quote: 'In theory, there is no difference between practice and theory. In practice, there is.',
    source: 'Jan van de Snepscheut',
    citation: 'snopes.com/fact-check/practice-and-theory/',
    category: 'humor'
  },
  {
    quote: 'I have never let my schooling interfere with my education.',
    source: 'Mark Twain',
    year: '1907',
    category: 'humor'
  },
  {
    quote: 'If a moral theory can be quite straightforwardly true, it is clear that, if it is self-effacing, this does not show that it cannot be true.',
    source: 'Derek Parfit',
    citation: 'Reasons and Persons, p. 43',
    year: '1986',
    category: 'philosophy'
  },
  {
    quote: 'Yeah, well, you know, that\'s just, like, your opinion, man.',
    source: 'The Dude',
    citation: 'The Big Lebowski',
    year: '1998',
    category: 'humor'
  },
  {
    quote: 'Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad.',
    source: 'Miles Kington',
    category: 'humor'
  },
  {
    quote: 'The self is a relation which relates itself to its own self, or it is that in the relation that the relation relates itself to its own self; the self is not the relation but that the relation relates itself to its own self',
    source: 'Soren Kierkegaard',
    citation: 'The Sickness Unto Death',
    year: '1849',
    category: 'philosophy'
  },
  {
    quote: 'This very sentence is not true.',
    source: 'The Liar',
    category: 'philosophy'
  },
  {
    quote: 'Are we looping for a while now, or just for?',
    source: 'Someone who recently learned about JS loops',
    category: '(an attempt at) humor'
  }
];

/***
 * A function that picks out an object from the quotes array above at random.
***/

function getRandomQuote () {
   const randomNumber = Math.floor( Math.random() * quotes.length );
   return quotes[randomNumber];
}

/***
 * A function that (i) assigns the random object from the getRandomQuote function above to the variable 'randomObject',
 * (ii) assigns text for the HTML document to the variable 'html', depending on what properties the quote object has, and
 * (iii) returns the relevant text inside an innerHTML command.
***/

function printQuote () {
  const randomObject = getRandomQuote();
  let html = `
    <p class="quote">${randomObject.quote}</p>
    <p class="source">${randomObject.source}`;
  if (randomObject.citation){
     const citationHTML = `<span class=citation>${randomObject.citation}</span>`;
     html = html.concat(citationHTML);
  }
  if (randomObject.year) {
     const yearHTML = `<span class=year>${randomObject.year}</span>`;
     html = html.concat(yearHTML);
  }
  if (randomObject.category) {
    const categoryHTML = `<span class=category>[${randomObject.category}]</span>`;
    html = html.concat(categoryHTML);
  }
  html = html.concat(`</p>`);
  return document.getElementById('quote-box').innerHTML = html; 
}

/* A function that selects a random background color and returns that color to the style of the body element in the document.*/

function randomBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = backgroundColor;
  }

/***
 * prints the value of the variable 'html' when the button is clicked by the user.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/* Changes the background color to the random background color when the button is clicked by the user.*/
 
document.getElementById('load-quote').addEventListener("click", randomBackgroundColor, false);

/* Changes the quote and the background color every 20 seconds */
setInterval(function() {
  printQuote();
  randomBackgroundColor();
}, 20000);