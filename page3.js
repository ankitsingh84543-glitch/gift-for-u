/* ===========================================
   PREMIUM PAGE 3 - PART 1
   Envelope + Typewriter
=========================================== */

const envelope = document.getElementById("envelopeContainer");
const card = document.getElementById("letterCard");
const typing = document.getElementById("typingText");
const music = document.getElementById("music");

/* Love Letter */

const message = `Dear Beautiful ❤️

I don't know how to explain it...

But every moment spent with you becomes a beautiful memory.

Your smile is my favorite notification.

Your happiness is my favorite goal.

Thank you for making my world brighter.

You are truly one of the sweetest people I've ever met.

I hope this little surprise makes your heart smile...

Because seeing you happy makes me happy too. 💖

With lots of love,
Someone who really cares about you ❤️`;

let index = 0;

/* Typing Effect */

function typeLetter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

/* Envelope Open */

envelope.addEventListener("click",()=>{

    envelope.style.transform="scale(0)";
    envelope.style.opacity="0";

    setTimeout(()=>{

        envelope.style.display="none";

        card.classList.remove("hidden");

        typeLetter();

        if(music){

            music.play().catch(()=>{});

        }

    },700);

});
/* ===========================================
   PREMIUM PAGE 3 - PART 2
   Hearts + Sparkles + Cursor Glow
=========================================== */

/* Floating Hearts */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,350);


/* Sparkles */

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDuration=(2+Math.random()*2)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,180);


/* Mouse Glow Effect */

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="25px";
glow.style.height="25px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(255,105,180,.35)";
glow.style.filter="blur(10px)";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-12+"px";
    glow.style.top=e.clientY-12+"px";

});


/* Button Animation */

const nextBtn=document.getElementById("nextBtn");

setInterval(()=>{

    nextBtn.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.08)"},
        {transform:"scale(1)"}

    ],{

        duration:1200

    });

},2200);


/* Next Page */

nextBtn.addEventListener("click",()=>{

    document.body.style.transition=".8s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="page4.html";

    },800);

});