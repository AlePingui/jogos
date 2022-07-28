const getRemainingTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline,el,finalMessage) => {
    const timerUpdate = setInterval( () => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `La página dejara de funcionar en ${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

    if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
    }

    }, 1000);
};

function modal () {
    const Modal = document.createElement("DIV");
    Modal.classList.add("Modal");
    
    const title = document.createElement("H1");
    title.innerHTML = "Hay Una Página Nueva"
    
    const link = document.createElement("A");
    link.innerHTML = "Link de la página";
    link.setAttribute("href", "https://v-games.github.io/juegos/");

    const counter = document.createElement("P");
    countdown('Aug 8 2022 16:18:12', counter, "Un gusto amigo");

    Modal.appendChild(title);
    Modal.appendChild(link);
    Modal.appendChild(counter);

    return Modal;
}

window.addEventListener("load", () => {
    let Modal = modal();
    document.body.appendChild(Modal);
    console.log(Modal)
})
