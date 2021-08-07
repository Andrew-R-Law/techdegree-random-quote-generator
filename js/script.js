/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://uboraacademy.slack.com

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'Quote 1 is the best quote.',
    source: 'Andrew Law the First',
    citation: 'Law\'s first book',
    year: '2001'
  },
  {
    quote: 'Quote 2 is the best quote.',
    source: 'Andrew Law the Second',
    citation: 'Law\'s second book',
    year: '2002'
  },
  {
    quote: 'Quote 3 is the best quote.',
    source: 'Andrew Law the Third',
    citation: 'Law\'s third book',
    year: '2003'
  },
  {
    quote: 'Quote 4 is the best quote.',
    source: 'Andrew Law the Fourth',
    citation: 'Law\'s fourth book',
    year: '2004'
  },
  {
    quote: 'Quote 5 is the best quote.',
    source: 'Andrew Law the Fifth',
    citation: 'Law\'s fifth book',
    year: '2005'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote () {
  let randomObject = getRandomQuote();
  let html = `
    <p class="quote">${randomObject.quote}</p>
    <p class="source">${randomObject.source}
    `;
  if (randomObject.citation){
     let citationHTML = `<span class=citation> ${randomObject.citation} </span>`;
     html = html.concat(citationHTML);
  }
  if (randomObject.year) {
    let yearHTML = `<span class=year> ${randomObject.year} </span>`;
    html = html.concat(yearHTML);
  }
  html = html.concat(`</p>`);;
  return document.getElementById('quote-box').innerHTML = html; 
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);