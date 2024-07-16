const tweetElement = document.getElementById('tweet');
const buttons = document.getElementById('buttons');
let currentTweet = '';

const tweets = [
    "Why do they call it rush hour when nothing moves? via @shawm42",
    "If tomatoes are a fruit, is ketchup a smoothie? via @shawm42",
    "Do fish get thirsty? via @shawm42",
    "If a turtle loses its shell, is it naked or homeless? via @shawm42",
    "Why isn’t there mouse-flavored cat food? via @shawm42",
    "If you try to fail, and succeed, which have you done? via @shawm42",
    "Why do we press harder on a remote control when we know the batteries are getting weak? via @shawm42",
    "Why do banks charge a fee on 'insufficient funds' when they know there is not enough money? via @shawm42",
    "If love is blind, why is lingerie so popular? via @shawm42",
    "If you can’t drink and drive, why do you need a driver’s license to buy alcohol? via @shawm42",
    "If a book about failures doesn’t sell, is it a success? via @shawm42",
    "Can you cry underwater? via @shawm42",
    "Why does a round pizza come in a square box? via @shawm42",
    "If a deaf person has to go to court, is it still called a hearing? via @shawm42",
    "Why are you 'in' a movie, but 'on' TV? via @shawm42",
    "How come 'phonics' isn’t spelled the way it sounds? via @shawm42",
    "Why is 'abbreviated' such a long word? via @shawm42",
    "Why is it that when you’re driving and looking for an address, you turn down the volume on the radio? via @shawm42",
    "Do vegetarians eat animal crackers? via @shawm42",
    "Why is the man who invests all your money called a broker? via @shawm42",
    "If the #2 pencil is the most popular, why is it still #2? via @shawm42",
    "Do bald people get dandruff? via @shawm42",
    "Why do people pay to go up tall buildings and then put money in binoculars to look at things on the ground? via @shawm42",
    "How come Superman could stop bullets with his chest, but always ducked when someone threw a gun at him? via @shawm42",
    "Why is it that no matter what color bubble bath you use the bubbles are always white? via @shawm42",
    "Why do people constantly return to the refrigerator with hopes that something new to eat will have materialized? via @shawm42",
    "Why do people keep running over a string a dozen times with their vacuum cleaner, then reach down, pick it up, examine it, then put it down to give the vacuum one more chance? via @shawm42",
    "How do those dead bugs get into those enclosed light fixtures? via @shawm42",
    "Why is it that whenever you attempt to catch something that's falling off the table you always manage to knock something else over? via @shawm42",
    "In winter, why do we try to keep the house as warm as it was in summer when we complained about the heat? via @shawm42",
    "Why do you never hear father-in-law jokes? via @shawm42",
    "Why do they sterilize the needle for lethal injections? via @shawm42",
    "Why is it called 'after dark' when it really is 'after light'? via @shawm42",
    "Why is lemon juice made with artificial flavor, and dishwashing liquid made with real lemons? via @shawm42",
    "Why is the person who invests all your money called a broker? via @shawm42",
    "Why do you drive on a parkway and park on a driveway? via @shawm42",
    "Why does 'fat chance' and 'slim chance' mean the same thing? via @shawm42",
    "Why isn't phonetic spelled the way it sounds? via @shawm42",
    "Why are there interstate highways in Hawaii? via @shawm42",
    "Why are they called apartments when they are all stuck together? via @shawm42",
    "Why is there an expiration date on sour cream? via @shawm42",
    "Why does the word 'monosyllabic' have five syllables? via @shawm42",
    "Why do 'tug' boats push their barges? via @shawm42",
    "Why is abbreviated such a long word? via @shawm42",
    "Why is it that when you transport something by car, it's called a shipment, but when you transport something by ship, it's called cargo? via @shawm42",
    "Why is it that when you're driving and looking for an address, you turn down the radio? via @shawm42"
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

    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const fontSize = randomTweet.length <= 60 ? 111 : Math.max(55, 111 - (randomTweet.length - 60) / 2);
    tweetElement.style.fontSize = `${fontSize}px`;

    currentTweet = randomTweet;
    typeWriter(currentTweet);
}

function copyTweet() {
    navigator.clipboard.writeText(currentTweet).then(() => {
        alert("Tweet copied to clipboard!");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    newTweet();
});
