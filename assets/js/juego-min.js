const blackjackGame=(()=>{"use strict";let e=[],t=["C","D","H","S"],a=["A","J","Q","K"],r=[],l=document.querySelector("#btnNewGame"),n=document.querySelector("#btnGetCard"),d=document.querySelector("#btnStopGame"),s=document.querySelectorAll("small"),o=document.querySelectorAll(".containerCards"),c=(t=2)=>{e=i(),r=[];for(let a=0;a<t;a++)r.push(0);s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),n.disabled=!1,d.disabled=!1},i=()=>{e=[];for(let r=2;r<=10;r++)for(let l of t)e.push(r+l);for(let n of a)for(let d of t)e.push(n+d);return barajar(e)},$=()=>{if(0===e.length){alert("No hay cards en el deck");return}return e.pop()},u=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},_=(e,t)=>(r[t]=r[t]+u(e),s[t].innerText=r[t],r[t]),b=(e,t)=>{let a=document.createElement("img");a.classList.add("card"),a.src=`assets/cartas/${e}.png`,o[t].append(a)},f=()=>{let[e,t]=r;setTimeout(()=>{t===e?alert("Nadie gana :("):e>21?alert("Computadora gana"):t>21?alert("Jugador Gana"):alert("Computadora Gana")},500)},h=e=>{let t=0;do{let a=$();t=_(a,r.length-1),b(a,r.length-1)}while(t<e&&e<=21);f()};return n.addEventListener("click",()=>{let e=$(),t=_(e,0);b(e,0),t>21?(n.disabled=!0,d.disabled=!0,h(t)):21===t&&(n.disabled=!0,d.disabled=!0,h(t))}),d.addEventListener("click",()=>{n.disabled=!0,d.disabled=!0,h(r[0])}),l.addEventListener("click",()=>{c()}),{newGame:c}})();