function sayGreeting() {
    const greetings = ["Hi!", "Hello!"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("output").textContent = randomGreeting;
}
