const fs = require('fs');
const { execSync } = require('child_process');

const projectInitialisation = () => {
    console.log("Generating config/default.json...");
    const file = JSON.stringify({
        mongoURI: "",
        jwtSecret: "myscrettoken"
    })
    fs.writeFileSync("config/default.json", file);
    console.log("DONE")

    console.log("Installing dependencies with 'npm install' command...")
    execSync("npm install");
    console.log("DONE")

    console.log("Operation finished !");
}

projectInitialisation();