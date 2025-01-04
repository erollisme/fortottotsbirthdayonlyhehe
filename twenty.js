// Get all the buttons and the target elements
const buttons = document.querySelectorAll('.btn');
const charElement = document.getElementById('char');
const textContentElement = document.getElementById('textContent');

// Define the text content for each button
const textContentMap = {
    b1: { word: "Caring", description: "You always make sure that I'm okay and give me the care I need." },
    b2: { word: "Loving", description: "Your love makes me feel like heaven, giving me a valued feeling." },
    b3: { word: "Generous", description: "You give me things without really expecting anything in return." },
    b4: { word: "Honest", description: "You always tell the truth with integrity, making me feel reassured." },
    b5: { word: "Kind", description: "You might not know it but you are really kind. It shows especially when you see a pitiful person." },
    b6: { word: "Creative", description: "You create the most creative things, always amaze me with those things you do such as drawings." },
    b7: { word: "Talkative", description: "I like you being talkative, makes me want to hear all your stuff all day all night." },
    b8: { word: "Optimistic", description: "You often find the positive side in some problems." },
    b9: { word: "Determined", description: "Once you set your mind to something you want, you don't stop until you achieve it." },
    b10: { word: "Passionate", description: "Your enthusiasm and energy inspire me to pursue my own passion." },
    b11: { word: "Supportive", description: "You are always there for me, especially in my dumb decisions. You encourage me through both highs and lows." },
    b12: { word: "Responsible", description: "Well, somewhat responsible when taking ownership of your own actions." },
    b13: { word: "Disciplined", description: "You are disciplined enough to do things you need to do. You focus and dedicate yourself into it." },
    b14: { word: "Ambitious", description: "You have high goals for your future self and constantly strive to achieve those dreams." },
    b15: { word: "Sincere", description: "Your genuine nature shows sincerity in everything you say and do." },
    b16: { word: "Attentive", description: "You listen carefully and give your full attention, making me feel truly heard." },
    b17: { word: "Considerate", description: "You’re always mindful of others’ feelings and go out of your way to make them feel comfortable." },
    b18: { word: "Affectionate", description: "You express your love and care in such a warm and tender way (especially to me of course)." },
    b19: { word: "Thoughtful", description: "You always think of ways to make my life easier and bring joy to my day." },
    b20: { word: "Open-minded", description: "And Green-minded." }
};

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        const content = textContentMap[buttonId];
        if (content) {
            // Update the text content
            charElement.textContent = content.word;
            textContentElement.textContent = content.description;

            // Change button color
            buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Add active class to the clicked button
        }
    });
});
