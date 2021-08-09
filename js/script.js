/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/


/*** 
 * List of quotes, authors, citations, and years (if applicable), stored as objects in an array.
***/
let quotes = [
  {
    quote: 'In theory, there is no difference between practice and theory. In practice, there is.',
    source: 'Jan van de Snepscheut',
    citation: 'snopes.com/fact-check/practice-and-theory/'
  },
  {
    quote: 'I have never let my schooling interfere with my education.',
    source: 'Mark Twain',
    year: '1907'
  },
  {
    quote: 'If a moral theory can be quite straightforwardly true, it is clear that, if it is self-effacing, this does not show that it cannot be true.',
    source: 'Derek Parfit',
    citation: 'Reasons and Persons, p. 43',
    year: '1986'
  },
  {
    quote: 'Yeah, well, you know, that\'s just, like, your opinion, man.',
    source: 'The Dude',
    citation: 'The Big Lebowski',
    year: '1998'
  },
  {
    quote: 'Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad.',
    source: 'Miles Kington'
  },
  {
    quote: 'The self is a relation which relates itself to its own self, or it is that in the relation that the relation relates itself to its own self; the self is not the relation but that the relation relates itself to its own self',
    source: 'Soren Kierkegaard',
    citation: 'The Sickness Unto Death',
    year: '1849'
  },
  {
    quote: 'This very sentence is not true.',
    source: 'The Liar'
  },
  {
    quote: 'Are we looping for a while now, or just for?',
    source: 'Someone who recently learned about JS loops.'
  }
];

/***
 * A function that picks out an object from the quotes array above at random.
***/

function getRandomQuote () {
   let randomNumber = Math.floor( Math.random() * quotes.length );
   return quotes[randomNumber];
}

/***
 * A function that (i) assigns the random object from the getRandomQuote function above to the variable 'randomObject',
 * (ii) assigns text for the HTML document to the variable 'html', depending on what properties the quote object has, and
 * (iii) returns the relevant text inside an innerHTML command.
***/

function printQuote () {
  let randomObject = getRandomQuote();
  let html = `
    <p class="quote">${randomObject.quote}</p>
    <p class="source">${randomObject.source}`;
  if (randomObject.citation){
     let citationHTML = `<span class=citation>${randomObject.citation}</span>`;
     html = html.concat(citationHTML);
  }
  if (randomObject.year) {
     let yearHTML = `<span class=year>${randomObject.year}</span>`;
     html = html.concat(yearHTML);
  }
  html = html.concat(`</p>`);
  return document.getElementById('quote-box').innerHTML = html; 
}




/***
 * prints the value of the variable 'html' when the button is clicked by the user.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);