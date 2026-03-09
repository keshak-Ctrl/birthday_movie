let text = "Dear baby... \
Before this day ends, there is something I want you to know. \
You are incredibly special and your smile can brighten even the darkest days. \
Today the world celebrates you. \
Happy Birthday baby 💖";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,60);

}

}

function hearts(){

setInterval(function(){

let heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="💗";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*25+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove()},6000);

},300)

}

function fireworks(){

setInterval(function(){

let fire = document.createElement("div");

fire.innerHTML="🎆";

fire.style.position="absolute";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*100+"vh";

fire.style.fontSize="40px";

document.body.appendChild(fire);

setTimeout(()=>{fire.remove()},2000);

},500)

}

function start(){

document.getElementById("title").innerHTML="Hi baby 💖";

typeWriter();

hearts();

setTimeout(function(){

fireworks();

document.getElementById("final").style.display="block";

},8000)

}