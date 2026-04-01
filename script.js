const texto = `Feliz aniversario de namoro meu amor!

Desde que você entrou na minha vida,
tudo ficou mais bonito.

Seu sorriso ilumina meus dias,
e sua presença faz tudo valer a pena.

Cada momento com você faz meu coração bater mais forte,

todos esses momentos ao seu lado
é algo que eu guardo com carinho.

Obrigado por cada sorriso,
cada conversa
e cada momento juntos.

Hoje comemoramos o primeiro dentre muitos 
capitulos da nossa vida juntos.

Que esse seja apenas mais
um dentre muitos aniversários.

Sempre estarei do seu lado em todos os momentos, 
você sempre sera minha princesinha e o amor da minha vida.
Eu te amo muito!💚
`;

let i = 0;
let abriu = false;

function escrever(){
if(i < texto.length){
document.getElementById("texto").innerHTML += texto.charAt(i);
i++;
setTimeout(escrever,30);
}
}

function abrirCarta(){

if(abriu) return;
abriu = true;

document.querySelector(".envelope").classList.add("aberto");

const musica = document.getElementById("musica");

musica.volume = 0.4; // volume suave
musica.play().catch(()=>{});

setTimeout(()=>{
escrever();
},800);

}



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.fillStyle="rgba(0,255,200,0.4)";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.y -= p.speed;

if(p.y < 0){
p.y = canvas.height;
p.x = Math.random()*canvas.width;
}

});

requestAnimationFrame(animate);
}

animate();



function heart(){

const heart = document.createElement("div");

heart.innerHTML="💚";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";
heart.style.fontSize=(Math.random()*20+10)+"px";
heart.style.opacity=0.6;
heart.style.animation="subir 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(heart,800);



const style = document.createElement("style");
style.innerHTML=`

@keyframes subir{
0%{
transform:translateY(0);
opacity:0;
}

50%{
opacity:0.8;
}

100%{
transform:translateY(-100vh);
opacity:0;
}

}

`;

document.head.appendChild(style);