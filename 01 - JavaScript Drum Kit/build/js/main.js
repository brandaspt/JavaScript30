"use strict";
const playSound = (e) => {
    const audioEl = document.querySelector(`audio[data-key="${e.code}"`);
    if (!audioEl)
        return;
    audioEl.currentTime = 0;
    audioEl.play();
    const key = document.querySelector(`.key[data-key="${e.code}"`);
    key.classList.add("playing");
};
const removeTransition = (e) => {
    if (e.propertyName !== "transform")
        return;
    const target = e.target;
    target.classList.remove("playing");
};
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
