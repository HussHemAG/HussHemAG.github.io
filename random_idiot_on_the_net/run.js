function randomtext() {
  var button = document.querySelector("#sendButton");
  const randomList = [
    "your celeb crush? ",
    "do you snore? ",
    "can we be besties ",
    "how big of nerd are you 1 to 10 ",
    "who was your first kiss? ",
    "have you ever given a hickey? ",
    "do you have a middle name? ",
    "how old do u wanna be when u get married? ",
    "the most embarrassing thing you've ever done? ",
    "worst movie youve ever watched? ",
    "i miss you ",
    "you're best friend ",
    "uh what did you eat for breakfast? ",
    "whats ur fav drink ",
    "do u have a dog? ",
    "what was ur worst day ever ",
    "who you tryna get with 👀 ",
    "do you have any piercings? ",
    "who was the last dude you texted? ",
    "who do you miss the most ",
    "who are your best girl friends ",
    "opinion on birds? ",
    "whats ur favorite food? ",
    "shout me out ",
    "you should post more selfies 💕 ",
    "you got a sneaky link? ",
    "your last song on your spotify? ",
    "your favorite hobby? ",
    "do you have any cute friends for me lmao ",
    "how are you feeling today :) ",
    "when was the last time you wet the bed? ",
    "do you love ur life? x ",
    "one thing you can't survive without? ",
    "have you done drugs 🍃 ",
    "whos your last ig search? ",
    "I know what you did ",
    "are you talking to anyone? ",
    "What's ur fav brand?? <3 ",
    "dogs or cats? ",
    "have any netlix recomendations? ",
    "wyd tomorrow ",
    "youre cute ",
    "Favorite movie/ tv series rn ",
    "did you have an imaginary friend? ",
    "biggest red flags in a guy? ",
    "tell me a funny joke ",
    "your biggest insecurity? ",
    "whats your fav sport? ",
    "whats your biggest insecurity 🤔 ",
    "yo stop leaving me on read ",
    "have you ever had any surgery ",
    "you a homie ",
    "should i be honest with you on here? ",
    "tell me a random fact ",
    "who you tryna vote for in 2024 👀 ",
    "how old are you again? ",
    "u busy this weekend? ",
    "you have good style ",
    "netflix and chill? 👀 ",
    "i really like you ",
    "how many hours of sleep you get last night? ",
    "whats ur fav tv show ",
    "would you say yes if i asked you out - A ",
    "whats ur fav movie ",
    "where are you from...? ",
    "have you ever cheated, you gotta be honest lol ",
    "favorite movie? ",
    "what color is your room? ",
    "hottest sport? 🥵 ",
    "whats ur orientation ",
    "your favorite part of your body? ",
    "we should talk more ",
    "whats your number one song on spotify ",
    "do you want kids evenutally? ",
    "would you leave your SO for a celeb ",
    "How are you today ❤️‍🩹 ",
    "who do you have pinned on imessage ",
    "Biggest red flags for a girl? ",
    "craziest pickup line that worked? ",
    "when was the last time you lied? ",
    "dream job? ",
    "whos ur crush? ",
    "spill the tea on your first kiss. ",
    "the worst trouble you go into as a kid? ",
    "do you speak another language? ",
    "have any netflix recomendations?? ",
    "whos the last person you texted? ",
    "who was the last girl you texted? ",
    "you ever think about having the ability to teleport? ",
    "do you meditate? ",
    "whos ur worst enemy 😈 ",
    "are you looking to date someone rn ",
    "what was the best day so far this year? ",
    "name all your exes ",
    "is it true??? ",
    "your worst personality characteristic? ",
    "who do you text the most? ",
    "i love uuuuuu!! ",
    "What is your shoe size? ",
    "your worst habit? ",
    "wyd ",
    "the longest time you've ever gone without showering? ",
    "biggest regret? ",
    "do you even like school? ",
    "not gonna judge but why... ",
    "what phone do you have? ",
    "are you gonna get a tat ",
    "what was your favorite show when you were a kid? ",
    "single? ",
    "whats your sign ",
    "whos your last snap from? ",
    "how tall r u ",
    "why doesnt my crush like me back 😭 ",
    "your really attractive ",
    "what are ur plans this weekend? ",
    "the worst pick up line you've ever heard? ",
    "How's you day going ??! ",
    "do you have trust issues? ",
    "I have a crush on you ",
    "favorite food? ",
    "whos ur best friend ",
    "please give me pickup lines that always work ",
    "you wild for what you did ",
    "how many stuffed animals you own? ",
    "favorite show rn? ",
    "what time did you fall asleep last night? ",
    "what did you dream about last night? ",
    "whats in ur spotify top songs ",
    "how many selfies do you take a day? ",
    "whats ur fav song ",
    "what time do you usually go to bed? ",
    "whats ur fav food ",
    "are you straight? ",
    "what are you wearing? ",
    "one friend ur thankful for... ",
    "the worst food you ever eaten? ",
    "whats your dream house ",
    "whats the stupidest thing you thought as a kid? ",
    "the worst date you've ever been on? ",
    "the weirdest place you've ever gone to the bathroom? ",
    "dont leave me on opened ",
    "introvert or extrovert? ",
    "whats the last thing you ate? ",
    "have you ever cried during a movie 🤷 ",
    "you lit ",
    "everything ok? ",
    "have u seen breaking bad ",
    "are you a back seat driver? ",
    "how tall are you?? ",
    "the weirdest thing you've ever eaten? ",
    "ain't no way ",
    "what have you gotten detention for? ",
    "a secret you kept from your parents 👀 ",
    "Have you ever been fired from a job? ",
    "the worst advice you've ever given? ",
    "whats ur fav book ",
    "where are your parents from? ",
    "how many exes do you have? ",
    "I have covid, any show recomendations? ",
    "did you watch game of thrones? ",
    "when was your first kiss? ",
    "spill some tea ",
    "ever gone skinny dipping? ",
    "when was the last time you cried? ",
    "who was your crush in middle school lmao ",
    "how many kids do you want to have ",
    "have you ever gotten in a fist fight? ",
    "are you close with your parents? ",
    "The weirdest trend you've done ",
    "body count 😳? ",
    "would you ever get with me? ~ N ",
    "Your biggest fear? ",
    "personality or looks? ",
    "you should get a tattoo ",
    "snap? ",
    "have you ever watched harry potter? ",
    "is ngl the best app tho :) ",
    "what music do you listen to ",
    "how tall are u ",
    "would you ever be fwb ",
    "are you judgemental ",
    "any pets?",
  ];

  const random = Math.floor(Math.random() * randomList.length);
  document.getElementById("inputtext").value = randomList[random];
  button.classList.remove("hidden");
  var textarea = document.querySelector("textarea");
  textarea.focus();
}

window.onload = function () {
  var textarea = document.querySelector("textarea");
  var button = document.querySelector("#sendButton");

  textarea.addEventListener("input", function () {
    if (textarea.value.trim()) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  });
};

let counter = 290;

// Function to update the counter and display
function updateCounter() {
  // Update the counter by adding 1, 2, or 3
  const increment = Math.floor(Math.random() * 3) + 1;
  counter += increment;

  // Display the updated counter value
  document.getElementById(
    "counter"
  ).innerText = `👇 ${counter} people just tapped the button 👇`;
}

setInterval(updateCounter, 1250);

// Check if the input value is stored in localStorage
let storedInputValue = localStorage.getItem("inputValue") || "";

function proceed() {
  var input = document.querySelector("input");
  storedInputValue = input.value;

  // Store the input value in localStorage
  localStorage.setItem("inputValue", storedInputValue);

  // Delay the redirection by 1000 milliseconds (1 second)
  setTimeout(function () {
    location.replace("/random_idiot_on_the_net/1");
  }, 1000);
}

// Log the stored input value after the page has loaded
console.log(storedInputValue);

function send() {
  // Discord webhook URL
  const webhookUrl =
    "https://discord.com/api/webhooks/1178672492806668389/SAj1oHf5nG1gaqgKL9mQVmMsJB7ldsWn4_RovwJ7HKiVUoAvbz976YffXHWLvjr-oTlX";

  // Get message content from textarea
  var textarea = document.querySelector("textarea");
  const content = textarea.value;
  const embed = {
    title: storedInputValue,
    description: content,
    author: {
      name: "averageblank",
    },
    color: 0x3498db, // You can customize the color
  };

  // Message data with embed
  const data = {
    embeds: [embed],
  };

  // Fetch options for the POST request
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Make the POST request
  fetch(webhookUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Message sent successfully:", responseData);
      location.replace("http://ngl.link/p/sent");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      location.replace("http://ngl.link/p/sent");
    });
}

function redirect() {
  // Get the user agent string
  const userAgent = navigator.userAgent;

  // Check if the user agent indicates an iOS device
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    // Redirect to the iOS version
    window.open(
      "https://apps.apple.com/us/app/ngl-anonymous-q-a/id1596550932?ppid=543cb167-5bdc-448f-a202-e5506f5d2837"
    );
  }
  // Check if the user agent indicates an Android device
  else if (/Android/i.test(userAgent)) {
    // Redirect to the Android version
    window.open(
      "https://play.google.com/store/apps/details?id=com.nglreactnative"
    );
  } else {
    // Redirect to a default version for other devices
    window.open(
      "https://apps.apple.com/us/app/ngl-anonymous-q-a/id1596550932?ppid=543cb167-5bdc-448f-a202-e5506f5d2837"
    );
  }
}

window.onload = function () {
  var inputText = document.getElementById("inputtext");
  var sendButton = document.getElementById("sendButton");
  var getMessagesSection = document.querySelector(".bottom-8");

  inputText.addEventListener("focus", function () {
    getMessagesSection.style.display = "none";
  });

  inputText.addEventListener("blur", function () {
    getMessagesSection.style.display = "flex"; // Change to "block" if needed
  });

  inputText.addEventListener("input", function () {
    if (inputText.value.trim()) {
      sendButton.classList.remove("hidden");
    } else {
      sendButton.classList.add("hidden");
    }
  });
};
