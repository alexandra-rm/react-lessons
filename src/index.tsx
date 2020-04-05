import { sum } from "./sum";

document.body.textContent = "Заиспользуем функцию сложения с урока!";


function component() {
    const element = document.createElement("div");
const a = 2;
const b = 3;

    element.innerHTML = `${a} + ${b} = ` + String(sum(2, 3));

    return element;
}

document.body.appendChild(component());
