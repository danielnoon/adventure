let chalk = require('chalk');
let helper = require('./text-helpers');

module.exports = {
    "rooms": [
        [ "nw", "n",      "ne", "house"],
        [ "w",  "center", "e",   null  ],
        [ "sw", "s",       null, null  ]
    ],
    "house": [
        [  null,      "bath",   null    ],
        [ "entrance", "foyer", "stairs" ],
        [  null,      "guest",  null    ]
    ],
    "scenes": {
        "nw": {
            "text": `${chalk.cyan("Welcome to " + chalk.italic("<insert game name here>!"))}\nYou can go ${chalk.magenta("south")} or ${chalk.green("east")} because you are in the ${chalk.blue("north-west")} corner of the map`,
            "go": [1, 1, 1, 1]
        },
        "n": {
            "text": `You are now in the ${chalk.blue("north")} part of the map`
        },
        "ne": {
            "text": `You are now in the ${chalk.blue("north-east")} corner of the map.\nYou see a house to the east.`
        },
        "w": {
            "text": `You are now in the ${chalk.blue("west")} part of the map`
        },
        "e": {
            "text": `You are now in the ${chalk.blue("east")} part of the map`
        },
        "s": {
            "text": `You are now in the south part of the map`
        },
        "se": {
            "text": `You are now in the ${chalk.blue("south-east")} corner of the map`
        },
        "sw": {
            "text": `You are now in the ${chalk.blue("south-west")} corner of the map`
        },
        "center": {
            "text": `You are now in the ${chalk.blue("center")} part of the map`
        },
        "house": {
            "text": `You have approached the house.\nThe door is unlocked and you can ${chalk.blue("go inside")}.`,
            "things": [
                {
                    name: "door",
                    move: ["changeMaps", {location: [1, 0], map: "house"}]
                }
            ],
            "commands": {
                "go inside": ["changeMaps", {location: [1, 0], map: "house"}],
                "enter": ["changeMaps", {location: [1, 0], map: "house"}]
            }
        },
        "bedroom": {
            "text": "Hello"
        },
        "entrance": {
            "text": "You have entered the house.",
            "commands": {
                "exit": ["changeMaps", {location: [0, 3], map: "rooms"}],
                "go out": ["changeMaps", {location: [0, 3], map: "rooms"}],
                "leave": ["changeMaps", {location: [0, 3], map: "rooms"}],
            }
        },
        "foyer": {
            "text": `You have entered the foyer. It is grand, with a huge ${chalk.blue("chandelier")} hanging from the ceiling.\nTo the ${chalk.green("east")} is a staircase, to the ${chalk.yellow("north")} is a bathroom, and to the ${chalk.red("south")} is a guest bedroom.\nYou can see something on the ground twinkling.`,
            "things": [
                {
                    name: "key",
                    look: ["describe", `It's a key on the ground! You can ${chalk.blue("pick it up")}.`],
                    take: ["inventory_add", {name: "key", use: false, description: `It's a key you found on the ground. Probably unlocks the bathroom.`}]
                },
                {
                    name: "something",
                    look: ["describe", `It's a key on the ground! You can ${chalk.blue("pick it up")}.`],
                },
                {
                    name: "ground",
                    look: ["describe", `It's a key on the ground! You can ${chalk.blue("pick it up")}.`],
                }
            ]
        },
        "bath": {
            "text": `Whee`,
            "things": [
                {
                    name: "mirror",
                    look: ["lock_scene", "characterCreation1"]
                }
            ],
            "locked": ["inventory", "key"]
        },
        "guest": {
            "text": `You are in the guest bedroom.`,
            "things": [
                {
                    name: "bed",
                    look: ["describe", ]
                }
            ]
        },
        "stairs": {
            "text": () => {return `whee`}
        },
        "characterCreation1": {
            text: "Enter your name.",
            action: ["enter_name"]
        },
        "characterCreation2": {
            text: "Confirm your name.",
            action: ["confirm_name"]
        },
        "characterCreation3": {
            text: "Enter your gender.",
            action: ["enter_gender"]
        },
        "characterCreation4": {
            text: "Confirm your gender.",
            action: ["confirm_gender"]
        }
    }
}