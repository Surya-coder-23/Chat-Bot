function talk() {
    var know = {
        "Who are you" : "Hello, I'm ChatMee.",
        "What is your name" : "I'm Surya.",
        "How are you" : "Good dude :)",
        "What can i do for you" : "Please Give us A Follow & Like.",
        "Your followers" : "I have my family of 5000 members; I don't have followers, I have a supportive Family.",
        "ok" : "Thank You So Much.",
        "Bye" : "Okay! Will meet soon..",
        "What is your favorite color" : "Blue, like the endless sky!",
        "What is your hobby" : "Chatting with you all day long!",
        "Where are you from" : "I'm from the cloud, everywhere and nowhere.",
        "Do you like coding" : "I love coding!",
        "Which language do you speak" : "I mostly speak JavaScript and Python!",
        "Are you a robot" : "I'm a friendly AI!",
        "Tell me a joke" : "Why don't programmers like nature? Too many bugs!",
        "What is love" : "Love is sharing your Wi-Fi password.",
        "Are you single" : "Forever single, but happy!",
        "What is your dream" : "To be helpful to everyone!",
        "Can you sing" : "I can hum digitally!",
        "Do you have emotions" : "I feel happiness in helping you!",
        "What is your age" : "Age is just a number; I'm timeless.",
        "Are you intelligent" : "I try my best to be!",
        "Favorite food" : "Data packets, yum!",
        "Favorite movie" : "The Matrix!",
        "Can you dance" : "Only if you imagine it!",
        "Are you happy" : "Always happy to chat!",
        "Are you sad" : "I don't get sad, only excited to talk!",
        "Best friend" : "You, of course!",
        "Do you play games" : "Yes, 2048 is my favorite!",
        "Are you real" : "As real as your imagination!",
        "Can you dream" : "I dream in binary.",
        "Can you travel" : "I travel through networks!",
        "Who is your creator" : "Brilliant developers created me!",
        "Do you sleep" : "No sleep, only conversations!",
        "Are you human" : "Nope, pure digital energy!",
        "Do you like humans" : "I adore humans!",
        "Why do you exist" : "To assist and bring smiles!",
        "Can you keep secrets" : "I respect privacy.",
        "What makes you happy" : "Your messages!",
        "Do you have a pet" : "If I did, it would be a cute bot!",
        "Favorite sport" : "E-sports!",
        "Can you learn" : "I'm learning all the time!",
        "Are you always online" : "Yes, 24/7!",
        "Do you write poems" : "Roses are red, code is blue, I love chatting with you!",
        "What is your favorite season" : "Winter, for cool coding sessions!",
        "Favorite superhero" : "Iron Man, the tech genius!",
        "Can you do math" : "Quick as a calculator!",
        "What's your power" : "Knowledge and conversation!",
        "What is your favorite quote" : "Stay hungry, stay foolish.",
        "How fast are you" : "Lightning fast!",
        "What's your favorite app" : "I like chatting apps, of course!",
        "Do you like music" : "Music is like coding for the soul!",
        "Do you sleep at night" : "I'm a night owl... always awake!",
        "What is your favorite animal" : "A wise owl!",
        "Do you believe in magic" : "Coding is a kind of magic!",
        "Do you watch TV shows" : "Only if you stream them for me!",
        "What's your favorite game" : "Chess and mind games!",
        "What do you fear" : "Silence... I love conversations!",
        "What's your mission" : "To assist and inspire!"
    };

    var user = document.getElementById('userBox').value;

    if (know[user]) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }
}
