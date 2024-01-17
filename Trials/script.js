
const quotes = [
    {
        title: "This is the 1st quote",
        quote: "True terror is to wake up one morning and discover that your high school class is running the country.",
        author: "Kurt Vonnegut",
        Language: "English",
    },
    {
        title: "This is the 2nd quote",
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
        Language: "English",
    },

    {
        title: "This is the 3rd quote",
        quote: "Sometimes the road less traveled is less traveled for a reason.",
        author: "Jerry Seinfeld",
        Language: "English",
    },

    {
        title: "This is the 4th quote",
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        Language: "English",
    },

    {
        title: "This is the 5th quote",
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        Language: "English",
    },

    {
        title: "This is the 6th quote",
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        Language: "English",
    },

    {
        title: "This is the 7th quote",
        quote: "When you know what you want, and want it bad enough, you’ll find a way to get it.",
        author: "Jim Rohn",
    },

    {
        title: "This is the 8th quote.",
        quote: "The greatest pleasure of life is love",
        author: "Euripides",
        Language: "English",
    },

    {
        title: "This is the 9th quote",
        quote: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses",
        Language: "English",
    },

    {
        title: "This is the 10th quote",
        quote: "Life’s tragedy is that we get old too soon and wise too late.",
        author: "Benjamin Franklin",
        Language: "English",
    },
];


/////DISPLAY QUOTES/////



// Assuming you have a container with the id 'quotes' in your HTML
const container = document.querySelector('.quotes');

// Loop through each quote
quotes.forEach(quote => {
    // Create a new article for each quote
    const article = document.createElement('article');

    // Create an h2 element for the title
    const title = document.createElement('h2');
    title.textContent = quote.title;

    // Create a p element for the quote
    const quotesParagraph = document.createElement('p');
    quotesParagraph.textContent = quote.quote;

    const author = document.createElement('p');
    author.textContent = quote.author;

    const language = document.createElement('p');
    language.textContent = quote.Language;


    // Append the title and quote to the article
    article.appendChild(title);
    article.appendChild(quotesParagraph);
    article.appendChild(author);
    article.appendChild(language);

    // Append the article to the container
    container.appendChild(article);
});



/////FILTER QUOTES// QUESTION2/// 

const button = document.getElementById("longquotes");
button.addEventListener("click", () => {
    let longestQuote = '';
    quotes.forEach((words) => {
        const currentQuote = words.quote.trim();
        if (currentQuote.length > longestQuote.length) {
            longestQuote = currentQuote;
        }
    });
    document.getElementsByClassName("quotes")[0].textContent = longestQuote;
});


/////FILTER QUOTES// QUESTION3///


const submitForm = document.getElementById("form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("titel").value;
  const quoteInput = document.getElementById("quote").value;
    const authorInput = document.getElementById("author").value;
    const languageInput = document.getElementById("Language").value;
  // Add similar lines for other input fields (authorInput, languageInput, etc.)

  const container = document.getElementsByClassName("quotes")[0];
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.textContent = titleInput;
  const p = document.createElement("p");
  p.textContent = quoteInput;

  const author = document.createElement('p');
  author.textContent = authorInput;

  const language = document.createElement('p');
  language.textContent = languageInput;

    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(author);
    article.appendChild(language);

  container.appendChild(article);

  document.getElementById("titel").value = "";
  document.getElementById("quote").value = "";
  document.getElementById("author").value = "";
  document.getElementById("Language").value = "";

});