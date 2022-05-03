import { Marisa, Reimu } from "./class/actor";
import { Prepared } from "./class/state";
import { currentState } from "./main";

export function initPrepared() {
    const cards = document.querySelectorAll(".actor-card");
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            (currentState as Prepared).selectedActor = index === 0 ? Reimu : Marisa;
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
        })
    })
    document.querySelector("start")!.addEventListener("click", () => {
        currentState.onStop();
    })
    currentState.onStart();
}