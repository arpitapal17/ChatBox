const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main()
    .then( () => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatbox');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        message : "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "arpita",
        to: "gugu",
        message : "how r u?",
        created_at: new Date()
    },
    {
        from: "nandu",
        to: "shreshtha",
        message : "how are you doing?",
        created_at: new Date()
    },
    {
        from: "arpita",
        to: "nandu",
        message : "u r precious",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);


