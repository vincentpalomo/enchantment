"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Cards = ({ cards }) => {
    const [cardList, setCardList] = (0, react_1.useState)(cards);
    console.log(cardList);
    (0, react_1.useEffect)(() => {
        setCardList(cards);
        // watching the state of the cards prop will trigger this useEffect
    }, [cards]);
    return (react_1.default.createElement("div", { className: "py-6 bg-white sm:py-8 lg:py-12" },
        react_1.default.createElement("div", { className: "px-4 mx-auto max-w-screen-2xl md:px-8" },
            react_1.default.createElement("div", { className: "flex items-end justify-between gap-4 mb-6" }),
            react_1.default.createElement("div", { className: "grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-2 xl:grid-cols-3" }, cardList.map((card) => (react_1.default.createElement("div", { key: card.id },
                react_1.default.createElement("a", { href: "#", className: "relative block bg-black rounded-2xl group" },
                    react_1.default.createElement("img", { alt: "Developer", src: card.image, className: "absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 rounded-2xl group-hover:opacity-25" }),
                    react_1.default.createElement("div", { className: "relative p-4 sm:p-6 lg:p-8" },
                        react_1.default.createElement("p", { className: "text-sm font-medium tracking-widest text-pink-500 uppercase" }, "shattered set"),
                        react_1.default.createElement("p", { className: "text-xl font-bold text-white sm:text-2xl" }, card.name),
                        react_1.default.createElement("div", { className: "mt-32 sm:mt-48 lg:mt-64" },
                            react_1.default.createElement("div", { className: "transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" },
                                react_1.default.createElement("p", { className: "text-sm text-white" },
                                    "HP: ",
                                    card.hp),
                                react_1.default.createElement("p", { className: "text-sm text-white" },
                                    "Mana: ",
                                    card.mana),
                                react_1.default.createElement("h5", { className: "text-lg text-pink-500" }, "skills:"),
                                react_1.default.createElement("p", { className: "text-sm text-white" }, card.skill_1),
                                react_1.default.createElement("p", { className: "text-sm text-white" }, card.skill_2),
                                react_1.default.createElement("p", { className: "text-sm text-white" }, card.skill_3))))))))))));
};
exports.default = Cards;
