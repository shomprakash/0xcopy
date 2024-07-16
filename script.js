const tweetElement = document.getElementById('tweet');
const buttons = document.getElementById('buttons');
let currentTweet = '';

const API_KEY = 'e39fcff29dec4fa78de33d901a8da31f';
const NEWS_URL = `https://newsapi.org/v2/everything?q=blockchain&apiKey=${API_KEY}`;

const uniquePhrases = [
    "What's your take on this?",
    "Is this the future of crypto?",
    "How do you see this evolving?",
    "Will this disrupt the market?",
    "Is this the next big thing?",
    "Could this change everything?",
    "What does this mean for you?",
    "Is this a game changer?",
    "How will this impact us?",
    "Is this the breakthrough we've been waiting for?",
    "What are your thoughts?",
    "Could this be the tipping point?",
    "How significant is this?",
    "Is this worth the hype?",
    "Will this stand the test of time?",
    "What's the potential here?",
    "Is this innovation or hype?",
    "How will this affect the industry?",
    "Is this a step forward?",
    "Could this be the new standard?",
    "What implications does this have?",
    "Is this a trend or a fad?",
    "Will this catch on?",
    "How big of an impact will this have?",
    "Is this a risk worth taking?",
    "Could this redefine the market?",
    "What makes this special?",
    "Is this the solution we need?",
    "How do you feel about this?",
    "Will this make a difference?",
    "What should we expect?",
    "Is this a revolution?",
    "Could this lead to mass adoption?",
    "How will this play out?",
    "Is this the answer to our problems?",
    "What challenges does this pose?",
    "How credible is this?",
    "Is this sustainable?",
    "What are the potential pitfalls?",
    "How does this compare?",
    "Could this surpass expectations?",
    "What do experts say?",
    "Is this the real deal?",
    "Will this live up to the hype?",
    "How viable is this?",
    "Could this reshape the landscape?",
    "What does the future hold?",
    "How promising is this?",
    "Is this the breakthrough tech?",
    "What’s next?"
];

function typeWriter(text, i = 0) {
    if (i < text.length) {
        tweetElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    } else {
        buttons.style.display = 'block';
        buttons.classList.add('fade-in');
    }
}

function newTweet() {
    tweetElement.innerHTML = '';
    buttons.style.display = 'none';

    fetch(NEWS_URL)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            if (articles.length > 0) {
                const randomArticle = articles[Math.floor(Math.random() * articles.length)];
                const title = randomArticle.title;
                const url = randomArticle.url;
                const uniquePhrase = uniquePhrases[Math.floor(Math.random() * uniquePhrases.length)];
                currentTweet = `${title} ${uniquePhrase} Read more: ${url} via @shawm42`;
                typeWriter(currentTweet);
            } else {
                currentTweet = "Couldn't fetch news. Please try again. via @shawm42";
                typeWriter(currentTweet);
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            currentTweet = "Error fetching news. Please try again. via @shawm42";
            typeWriter(currentTweet);
        });
}

function copyTweet() {
    navigator.clipboard.writeText(currentTweet).then(() => {
        alert("Tweet copied to clipboard!");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    newTweet();
});
