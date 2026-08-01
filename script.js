const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const yesMsg = document.getElementById("yesMsg");

noBtn.addEventListener("mouseover", () => {
  const margin = 30;

const x = margin + Math.random() * (window.innerWidth - noBtn.offsetWidth - margin * 2);

const y = margin + Math.random() * (window.innerHeight - noBtn.offsetHeight - margin * 2);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  yesMsg.style.display = "block";
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
});