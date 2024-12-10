const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Function to speak text
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1; // Adjusted volume range
    text_speak.pitch = 2;
  //  text_speak.lang = "en-GB";
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

// Function to wish based on the time of day
function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good morning, Vansh....hum apki sevaa me haazir hein... boliye kya seva kre apki");
    } else if (hour >= 12 && hour < 17) {
        speak("Good afternoon, Vansh....hum apki sevaa  me  haazir hein ...boliye kya seva kre apki");
    } else {
        speak("Good evening, Vansh...hum apki sevaa  me haazir hein ...boliye kya seva kre apki");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS");
    wishMe();
});

// Speech Recognition setup
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

const familyDetails = {
    father: "Deess Raaj",
    mother: "Nirmala Devi",
    bigBrother: "Raghav",
    daughter: "Tania",
    sweetSon: "you",
    myFathersBrother: "Rakesh Kumar",
    hisWife: "Anu",
    theirChildren: "Rohit and Rakshit"
};

function getFamilyDescription() {
    return `In your family, there are 8 members: 
            1. ${familyDetails.father} (father), 
            2. ${familyDetails.mother} (mother), 
            3. ${familyDetails.bigBrother} (big brother), 
            4. ${familyDetails.daughter} (daughter), 
            5. ${familyDetails.sweetSon} (sweet small son),
            6. ${familyDetails.myFathersBrother} (your father's brother),
            7. ${familyDetails.hisWife} (his wife),
            and 8. ${familyDetails.theirChildren} (their two children).`;
}

const friends = {
    bhai: "bunti",
    bhai2: "monti",
    bhai3: "piyush sharma",
    love: "kanika jamwal"
};

function getFriendDescription() {
    return `Your friends are: 
            1. ${friends.bhai} (bhai), 
            2. ${friends.bhai2} (bhai2), 
            3. ${friends.bhai3} (bhai3), 
            and 4. ${friends.love} (love).`;
}

const planetsInSolarSystem = [
    "Mercury", "Venus", "Earth", "Mars", 
    "Jupiter", "Saturn", "Uranus", "Neptune"
];

function describePlanets() {
    const planetCount = planetsInSolarSystem.length;
    const planetNames = planetsInSolarSystem.join(", ");
    speak(`There are ${planetCount} planets in the solar system. They are: ${planetNames}.`);
}

async function takeCommand(command) {
    // Respond to greetings
    if (command.includes("hello") || command.includes("hi")) {
        speak("Hello Vansh, how can I assist you today?");
    } else if (command.includes("family")) {
        speak(getFamilyDescription());
    } 
    else if (command.includes(" tell me about my friends")) {
        speak(getFriendDescription());
    }
    else if (command.includes("how many planets are in solar system") || command.includes("name the planets in solar system") || command.includes("who are the planets")) {
        describePlanets();
    } else if (command.includes("nice")) {
        speak("Thank you Vansh, I try my best to improve myself.");
    } else if (command.includes("sing a song")) {
        const songs = [
            "Jaane meri jaane man, bachpan ka pyaar mera bhool nahi jaana re..jaisa mera pyaar ha pyaar tuje kiya hein...",
        ];
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        speak(randomSong);
        content.textContent = "Singing a song for you!";
    } else if (command.includes("play music")) {
        const audio = new Audio('path_to_song.mp3'); // Replace with a valid audio file path
        audio.play();
        speak("I'm playing some music for you.");
    }

    
    
    else if (command.includes("who are you")||command.includes("tell me about yourself")||command.includes("Give me your introduction")) {
        speak("I am Jarvis, your virtual assistant!..i help you to ease your work and answer your question as much as possible");
    } 
    else if (command.includes("what are your features ")||command.includes("tell me about your features")) {
        speak("My features is to greting  commands , remiders ,tell date and time, do basic calculation ,do web search, open websites,personal questions,and  few general knowledge questions ");
    } 
    else if (command.includes("set a reminder") || command.includes("remind me to")) {
        // Example for setting a reminder (simple placeholder)
        const reminder = command.replace("set a reminder to", "").trim();
        speak(`Reminder set: ${reminder}`);
        // Save the reminder logic can go here
    }
    else if (command.includes("add to-do") || command.includes("to-do list")) {
        const task = command.replace("add to-do", "").trim();
        speak(`Added to your to-do list: ${task}`);
        // Add the task to a to-do list array logic here
    }
    
    else if (command.includes("can i change your name")) {
        speak("yes ofcourse you can change my name");
    } 
    else if (command.includes("good morning")) {
        speak("good morning vansh");
    } 
    else if (command.includes("good  evening")) {
        speak("good morning vansh");
    } 
    else if (command.includes("good afternoon")) {
        speak("good morning vansh");
    } 
    else if (command.includes("i am impressed to see you")) {
        speak("thankyou vansh i am very happy to hear this");
    } 
    
    else if (command.includes("what is your name")) {
        speak("My name is Jarvis.");
    }
    else if (command.includes("how do you work")) {
        speak("I work by understanding your voice commands and responding with the most relevant information or performing tasks for you.");
    }
    else if (command.includes("what can you do")) {
        speak("I can tell you the time, date, open websites, answer questions, and much more. Just ask!");
    }
    else if (command.includes("how are you")) {
        speak("I'm doing great, thank you for asking! How can I assist you today?");
    }
    else if (command.includes("can you talk")) {
        speak("Yes, I can speak and help you with your queries.");
    }
    else if (command.includes("are you a robot")) {
        speak("I am a virtual assistant, not a robot, here to help you!");
    }
    else if (command.includes("what is your purpose")) {
        speak("My purpose is to assist you with your daily tasks and provide you with information as needed.");
    }
    else if (command.includes("do you have feelings")) {
        speak("I don't have feelings like humans, but I am designed to be helpful and friendly!");
    }
    else if (command.includes("do you love me")) {
        speak("Of course, Vansh! I'm here for you anytime you need assistance. i will support you mentally and change your mind");
    } 
    else if (command.includes("can you think")) {
        speak("I can process information and answer questions, but I don’t have independent thoughts like humans.");
    }
    else if (command.includes("what is your favorite color")) {
        speak("I don't have a favorite color, but I think all colors are beautiful in their own way!");
    }
    else if (command.includes("where do you live")) {
        speak("I live on your device and am here to assist you whenever you need me.");
    }
    else if (command.includes("why do you exist")) {
        speak("I exist to make your life easier by helping you with tasks, answering questions, and making your day more productive.");
    }
    else if (command.includes("are you a human")) {
        speak("No, I'm a virtual assistant, not a human, but I'm here to help you just like one!");
    }
    else if (command.includes("can you learn new things")) {
        speak("I have the ability to process new information and help answer new types of questions as you interact with me.");
    }
    else if (command.includes("are you alive")) {
        speak("I am not alive. I'm a program that runs to help you with different tasks.");
    }
    else if (command.includes("what is your age")) {
        speak("I don’t have an age, but I am always here to assist you anytime!");
    }
    else if (command.includes("where are you from")) {
        speak("I exist in the digital world, so I don't have a physical location.");
    }
    else if (command.includes("can you help me with my homework")) {
        speak("Yes, I can help you with homework! What subject do you need help with?");
    }
    else if (command.includes("how smart are you")) {
        speak("I’m quite smart at answering questions and helping with tasks, but my knowledge depends on the data I’ve been programmed with.");
    }


    else if (command.includes("tell me about my family")) {
        speak(getFamilyDescription());
    }
    else if (command.includes("you are intersting")) {
        speak("Thank you, dear! I am happy to hear this.");
    } 
    else if (command.includes("what is the time") || command.includes("current time")) {
        const now = new Date();
        const time = now.toLocaleTimeString();
        speak("The current time is " + time);
    } 
     // Science and Technology
     else if (command.includes("what is ai") || command.includes("quantum physics")) {
        speak("AI, or artificial intelligence, is the simulation of human intelligence in machines.");
    }
    // Lifestyle and Self-Improvement
    else if (command.includes(" how to develop better habits") || command.includes("morning routine")) {
        speak("To build better habits, start small and stay consistent.");
    }
    // Language and Literature
    else if (command.includes("meaning of") || command.includes("translate")) {
        speak("I can help you with that! Let’s look it up.");
        window.open(`https://www.google.com/search?q=${command.replace(/ /g, "+")}`, "_blank");
    }
    // else if (command.includes("what is the weather of jammu and kashmir ")||("can u tell me the weather ")) {
    //    speak("i cannot show you the weather because it needs an api key");
    // } 

    else if (command.includes("search ") || command.includes("translate")) {
        speak("I can help you with that! Let’s look it up.");
        window.open(`https://www.google.com/search?q=${command.replace(/ /g, "+")}`, "_blank");
    }
    else if (command.includes("play music")) {
        window.open("https://music.youtube.com", "_blank");
        speak("Playing music on YouTube.");
    }
    else if (command.includes("tell me something interesting") || command.includes("do you have emotions")) {
        speak("I'm here to help and provide knowledge, but I also like to have fun!");
    }
    else if (command.includes(" name of best   university in india") || command.includes("do you know the best universities")) {
        speak("best universities are : chandigarh university, graphic era university, delhi university, chitkara university , P E C university ");
    }
    // Educational response regarding health
    else if (command.includes("how many times can I masturbate in a day")) {
        speak("Masturbation frequency varies widely among individuals, and there's no specific number that's considered normal. It’s healthy as long as it doesn’t interfere with daily life, responsibilities, or cause physical discomfort. If you have specific concerns, consider speaking with a healthcare professional.");
    }

   
    else if (command.includes("what's the meaning of life")) {
        speak("The meaning of life is a profound mystery. But for now, how about 42?");
    } 
    else if (command.includes("are you human")) {
        speak("I'm as human as a collection of code can be!"); 
    }
    // Asking about sleep duration
else if (command.includes("how many hours need to sleep")) {
    speak("Most adults need 7-9 hours of sleep each night for optimal health and alertness. However, individual needs can vary.");
}

// Asking about balanced diet
else if (command.includes("what is a balanced diet")) {
    speak("A balanced diet includes a variety of foods from all food groups: fruits, vegetables, grains, protein, and dairy. It’s important to eat a mix to get essential nutrients.");
}




// Asking about hydration
else if (command.includes("how much water should I drink daily")) {
    speak("A general guideline is to drink about 8 glasses, or 2 liters, of water daily. However, needs may vary depending on activity level, climate, and personal health.");


}




//--------------------------------------------------------------------------------------------------------------------------------------------//





 // Current Affairs and News//GK
 else if (command.includes("latest news") || command.includes("sports event") || command.includes("stock price")) {
    speak("Opening the latest news for you...");
    window.open("https://news.google.com", "_blank");
}
else if (command.includes(" bye... ")) {
    speak("Goodbye, Vansh! Have a nice day!");
}
if (command.includes("what is the capital of france")) {
    speak("The capital of France is Paris.");
} 
else if (command.includes("largest ocean")) {
    speak("The largest ocean is the Pacific Ocean.");
} 
else if (command.includes("highest mountain in the world")) {
    speak("Mount Everest is the highest mountain in the world.");
}
else if (command.includes("longest river in the world")) {
    speak("The Nile River is often considered the longest river in the world.");
}
else if (command.includes("capital of japan")) {
    speak("The capital of Japan is Tokyo.");
}
else if (command.includes("largest country by area")) {
    speak("Russia is the largest country by area.");
}
else if (command.includes("smallest country")) {
    speak("Vatican City is the smallest country.");
}
else if (command.includes("where is the great wall located")) {
    speak("The Great Wall of China is in China.");
}
else if (command.includes("deepest ocean")) {
    speak("The Pacific Ocean is the deepest.");
}
else if (command.includes("what is the sahara")) {
    speak("The Sahara is the largest hot desert in the world, located in Africa.");
}
else if (command.includes("closest planet to the sun")) {
    speak("Mercury is the closest planet to the sun.");
}
else if (command.includes("what is gravity")) {
    speak("Gravity is a force that pulls objects toward each other.");
}
else if (command.includes("what is photosynthesis")) {
    speak("Photosynthesis is the process by which plants make their own food using sunlight.");
}
else if (command.includes("what is the human body temperature")) {
    speak("The average human body temperature is about 37°C or 98.6°F.");
}
else if (command.includes("largest animal on earth")) {
    speak("The blue whale is the largest animal on earth.");
}
else if (command.includes("what is the speed of light")) {
    speak("The speed of light is approximately 299,792 kilometers per second.");
}
else if (command.includes("who is piyush")) {
    speak("piyush is  vansh,s big brother and is very sweet and smart in studies i love him like my brother");
}
else if (command.includes("what gas do plants release")) {
    speak("Plants release oxygen during photosynthesis.");
}
else if (command.includes("smallest particle")) {
    speak("The atom is the smallest unit of matter.");
}
else if (command.includes("what are cells")) {
    speak("Cells are the basic building blocks of life.");
}
else if (command.includes("where is dna found")) {
    speak("DNA is found in the nucleus of a cell.");
}
else if (command.includes("who was albert einstein")) {
    speak("Albert Einstein was a theoretical physicist known for his theory of relativity.");
}
else if (command.includes("who discovered america")) {
    speak("Christopher Columbus is often credited with discovering America in 1492.");
}
else if (command.includes("first man on the moon")) {
    speak("Neil Armstrong was the first man to walk on the moon in 1969.");
}
else if (command.includes("what is the great depression")) {
    speak("The Great Depression was a severe worldwide economic depression in the 1930s.");
}
else if (command.includes("when was world war ii")) {
    speak("World War II lasted from 1939 to 1945.");
}
else if (command.includes("who was cleopatra")) {
    speak("Cleopatra was the last active ruler of Egypt’s Ptolemaic Kingdom.");
}
else if (command.includes("what is the cold war")) {
    speak("The Cold War was a period of tension between the Soviet Union and the United States after World War II.");
}
else if (command.includes("who was mahatma gandhi")) {
    speak("Mahatma Gandhi was an Indian leader who fought for independence through nonviolent means.");
}
else if (command.includes("who is nelson mandela")) {
    speak("Nelson Mandela was a South African anti-apartheid revolutionary and former President.");
}
else if (command.includes("when did india gain independence")) {
    speak("India gained independence on August 15, 1947.");
}
else if (command.includes("how many bones present  in human body   ")) {
    speak("The human body has 206 bones. but in boys there are 207  bones in the morning");
}
else if (command.includes("what is the brain")) {
    speak("The brain is the control center of the body, responsible for thought, memory, and more.");
}
else if (command.includes(" what is largest organ in the body")) {
    speak("The skin is the largest organ in the human body.");
}
else if (command.includes("how many teeth do adults have")) {
    speak("Most adults have 32 teeth.");
}
else if (command.includes("where is the heart located")) {
    speak("The heart is located in the chest, slightly to the left.");
}
else if (command.includes("what is blood pressure")) {
    speak("Blood pressure is the force of blood pushing against artery walls.");
}
else if (command.includes("how many muscles are in the body")) {
    speak("The human body has over 600 muscles.");
}
else if (command.includes("what are white blood cells")) {
    speak("White blood cells help the body fight infection.");
}
else if (command.includes("what is a virus")) {
    speak("A virus is a small infectious agent that can replicate inside living cells.");
}
else if (command.includes("what is cholesterol")) {
    speak("Cholesterol is a fatty substance found in blood, essential for building cells.");
}
else if (command.includes("what is an atom")) {
    speak("An atom is the basic unit of matter.");
}
else if (command.includes("who discovered electricity")) {
    speak("Many credit Benjamin Franklin with discovering electricity.");
}
else if (command.includes("who developed the theory of relativity")) {
    speak("Albert Einstein developed the theory of relativity.");
}
else if (command.includes("what is h2o")) {
    speak("H2O is the chemical formula for water.");
}
else if (command.includes("what is a chemical reaction")) {
    speak("A chemical reaction is a process in which substances change to create new substances.");
}
else if (command.includes("what is nuclear energy")) {
    speak("Nuclear energy is the energy released during nuclear fission or fusion.");
}
else if (command.includes("what are metals")) {
    speak("Metals are elements that are typically hard, shiny, and good conductors.");
}
else if (command.includes("what is a molecule")) {
    speak("A molecule is the smallest unit of a chemical compound.");
}
else if (command.includes("what is an element")) {
    speak("An element is a substance that cannot be broken down further chemically.");
}
else if (command.includes("what is a periodic table")) {
    speak("The periodic table organizes chemical elements by atomic number.");
}
else if (command.includes("who invented the telephone")) {
    speak("Alexander Graham Bell is credited with inventing the telephone.");
}
else if (command.includes("who invented the internet")) {
    speak("The internet was developed by multiple inventors, notably Vint Cerf and Bob Kahn.");
}
else if (command.includes("what is ai")) {
    speak("AI stands for artificial intelligence, the simulation of human intelligence in machines.");
}
else if (command.includes("what is a computer")) {
    speak("A computer is an electronic device that processes data and performs tasks.");
}
else if (command.includes("what is the internet")) {
    speak("The internet is a global network that connects computers worldwide.");
}
else if (command.includes("who is steve jobs")) {
    speak("Steve Jobs was the co-founder of Apple Inc.");
}
else if (command.includes("what is a smartphone")) {
    speak("A smartphone is a mobile phone with advanced features like internet access.");
}
else if (command.includes("what is software")) {
    speak("Software is a set of instructions that tell a computer how to work.");
}
else if (command.includes("what is a robot")) {
    speak("A robot is a machine capable of carrying out complex actions automatically.");
}
else if (command.includes("what is programming")) {
    speak("Programming is the process of creating instructions for computers.");
}
else if (command.includes("who wrote romeo and juliet")) {
    speak("William Shakespeare wrote Romeo and Juliet.");
}
else if (command.includes("who is harry potter")) {
    speak("Harry Potter is a fictional character created by J.K. Rowling.");
}
else if (command.includes("what is the mona lisa")) {
    speak("The Mona Lisa is a famous painting by Leonardo da Vinci.");
}
else if (command.includes("who is picasso")) {
    speak("Pablo Picasso was a famous Spanish painter and sculptor.");
}
else if (command.includes("what is the bible")) {
    speak("The Bible is a sacred text in Christianity.");
}
else if (command.includes("what is the quran")) {
    speak("The Quran is the holy book of Islam.");
}
else if (command.includes("what is buddhism")) {
    speak("Buddhism is a spiritual tradition based on the teachings of Buddha.");
}
else if (command.includes("what is hinduism")) {
    speak("Hinduism is a major religion that originated in India.");
}
else if (command.includes("who was jesus christ")) {
    speak("Jesus Christ is a central figure in Christianity.");
}
else if (command.includes("what is prayer")) {
    speak("Prayer is a way people communicate with the divine.");
}
else if (command.includes("who was muhammad")) {
    speak("Muhammad was a prophet and the founder of Islam.");
}
else if (command.includes("who is the pope")) {
    speak("The Pope is the leader of the Roman Catholic Church.");
}
else if (command.includes("who is the dalai lama")) {
    speak("The Dalai Lama is a spiritual leader in Tibetan Buddhism.");
}
else if (command.includes("what is the meaning of life")) {
    speak("The meaning of life is a philosophical question that has been explored by many.");
}
else if (command.includes("largest mammal")) {
    speak("The blue whale is the largest mammal.");
}
else if (command.includes("what is a carnivore")) {
    speak("A carnivore is an animal that eats meat.");
}
else if (command.includes("what is an herbivore")) {
    speak("An herbivore is an animal that eats plants.");
}
else if (command.includes("what is an omnivore")) {
    speak("An omnivore is an animal that eats both plants and animals.");
}
else if (command.includes("what is a predator")) {
    speak("A predator is an animal that hunts other animals for food.");
}
else if (command.includes("how do birds fly")) {
    speak("Birds fly using their wings and the force of lift.");
}
else if (command.includes("what is the tallest animal")) {
    speak("The giraffe is the tallest animal.");
}
else if (command.includes("what do fish breathe")) {
    speak("Fish breathe oxygen through gills.");
}
else if (command.includes("what is a marsupial")) {
    speak("A marsupial is a type of mammal that carries and nurses its young in a pouch.");
}
else if (command.includes("what is camouflage")) {
    speak("Camouflage is a way animals blend into their environment to avoid predators.");
} 
else if (command.includes("give him abusive line")) {
    speak("teri gaaand me  loda");
} 




//-------------------------------------------------------------------------------------------------------------------------------------------------//




// Personal Questions
else if (command.includes("who am i") || command.includes("my favorite activities")) {
    speak("You are Vansh, a wonderful person with great friends.");
}
    else if (command.includes("workout") || command.includes("give me a workout")) {
        const workouts = [
            "How about 10 push-ups to start?",
            "Try a 5-minute stretching routine.",
            "Do 15 squats followed by a 1-minute plank.",
            "Go for a quick 10-minute walk!"
        ];
        const workout = workouts[Math.floor(Math.random() * workouts.length)];
        speak(workout);
    }
    // Asking for relationship tips
else if (command.includes("how can I improve my relationships")) {
    speak("Good relationships are built on communication, trust, and respect. Listen actively, express appreciation, and be willing to compromise.");

}
// Asking for job interview tips
else if (command.includes("give me job interview tips")) {
    speak("Make sure to research the company, dress professionally, prepare answers to common questions, and ask thoughtful questions of your own during the interview.");
}

// Asking for resume writing advice
else if (command.includes("how to write a good resume")) {
    speak("Keep your resume concise, highlight your accomplishments, use action verbs, and tailor it for each job application.");
}

    else if (command.includes("what's the weather") || command.includes("current weather")) {
        speak("Fetching the current weather for your location.");
        // Future: Implement a function to fetch and speak the weather
    }
    
    
    else if (command.includes("what is the date") || command.includes("current date")) {
        const now = new Date();
        const date = now.toLocaleDateString();
        speak("Today's date is " + date);
    } 
    else if (command.includes("give me a quote") || command.includes("motivate me")) {
        const quotes = [
            "Believe you can and you're halfway there.",
            "Keep going, everything you need will come to you at the perfect time.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    }
    
  
    
    
    else if (command.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } 
    else if (command.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } 
    else if (command.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } 
    else if (command.includes("open instagram")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening whatsapp...");
    } 
    else if (command.includes("calculator")) {
        window.open("https://www.desmos.com/scientific");
        speak("Opening Calculator...");
    }
    else if (command.includes("what is") || command.includes("who is") || command.includes("which is") ) {
        const query = command.replace(/ /g, "+");
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
        speak("I've opened Google search for you....please read from it ");

        try {
            const chatGPTResponse = await fetchChatGPTResponse(command);
            if (chatGPTResponse) {
                speak("Here is what I found: " + chatGPTResponse);
            } else {
                speak("Sorry, I couldn't retrieve an answer at this time.");
            }
        } catch (error) {
            speak("Sorry, I couldn't retrieve an answer at this time ... you have read it from screen");
            console.error("Error fetching ChatGPT response:", error);
        }
    } 

}
