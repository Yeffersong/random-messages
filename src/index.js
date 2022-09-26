const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Diego",
    "Yesica",
    "Laura",
    "Carolina",
    "Paulina",
    "Roberto",
    "último",
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() 
        * messages.length)]

        console.log(message)
}

module.exports = { randomMsg };