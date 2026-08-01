/* ===========================================
   PREMIUM PAGE 5
   Sparkles + Hearts + Final Animation
=========================================== */


/* Floating Hearts */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (18+Math.random()*25)+"px";

    heart.style.animationDuration=
    (4+Math.random()*4)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,400);





/* Sparkles */

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";


    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },3000);

}


setInterval(createSparkle,200);





/* Final Button */

const endBtn=document.getElementById("endBtn");


if(endBtn){

    endBtn.addEventListener("click",()=>{


        document.body.style.transition="1s";

        document.body.style.opacity="0";


        setTimeout(()=>{

            alert("Our beautiful story will stay forever ❤️");

            document.body.style.opacity="1";

        },1000);


    });

}