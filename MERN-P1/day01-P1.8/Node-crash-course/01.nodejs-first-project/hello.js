

const usernmae = 'Riya'
const currenttime = new Date();
const hours = currenttime.getHours();

let greeting;
if (hours < 12) {
    greeting = 'Good Morning'}
    else if (hours < 18) {
        greeting = 'Good Afternoon'
    }
    else {
        greeting = 'Good Evening'
    }
    console.log(`${greeting}, ${usernmae}!welcome to node js`);