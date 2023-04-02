"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About = (props) => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("div", { className: 'max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8' },
            react_1.default.createElement("div", { className: 'max-w-3xl' },
                react_1.default.createElement("h2", { className: 'text-3xl font-bold sm:text-4xl' }, "Summon your destiny")),
            react_1.default.createElement("div", { className: 'grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16' },
                react_1.default.createElement("div", { className: 'relative h-64 overflow-hidden sm:h-80 lg:h-full' },
                    react_1.default.createElement("img", { alt: 'Valerian Paladin', src: 'https://i.ibb.co/xqYL8gN/Valerian.png', className: 'absolute inset-0 object-cover w-full h-full rounded-2xl' })),
                react_1.default.createElement("div", { className: 'lg:py-16' },
                    react_1.default.createElement("article", { className: 'space-y-4 text-gray-600' },
                        react_1.default.createElement("p", null, "In this fantasy card game, players take on the role of powerful wizards battling for control of a magical realm. Each player builds a deck of cards representing creatures, spells, and artifacts, and then takes turns summoning these cards to the battlefield and attacking their opponents. The game is filled with fantastical creatures such as dragons, wizards, and elves, each with their unique abilities and strengths. Players must carefully balance their resources, managing their mana and card draw, to outmaneuver their opponents and emerge victorious. As the game progresses, players can level up their creatures and spells, making them even more powerful and deadly. With a vast array of cards to choose from, each game is a unique experience filled with strategy and excitement. Will you become the ultimate wizard and reign supreme in the realm of magic?")))))));
};
exports.default = About;
