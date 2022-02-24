"use strict";
const ctfUdemyHtml = document.querySelector(".ctfUdemyHtml");
const ctfConosurIWP = document.querySelector(".ctfConosurIWP");
const mainctf = document.querySelector(".main-ctf");
const CODEhtml = `
    <h2 class="sectionModal__h2">Descripcion</h2>
    <p>
        Universidad HTML. Este curso esta enfocado a todo lo referente a HTML(hypertext mark language)
        para crear sitios y aplicaiones Web incre&iacute;bles.
    </p>
    <h2 class="sectionModal__h2">Temas tratados en el curso</h2>
    <ul>
        <li>Introducci&oacute;n a HTML</li>
        <li>Instalaci&oacute;n de herramientas(Visual studio code)</li>
        <li>Elementos b&aacute;sicos de HTML</li>
        <li>Introducci&oacute;n a CSS</li>
        <li>Links en HTML y CSS</li>
        <li>Tablas en HTML</li>
        <li>Elementos inline y block en HTML</li>
        <li>Formularios en HTML</li>
        <li>Elementos sem&aacute;nticos en HTML</li>
        <li>Entre varios temas m&aacute;s ...</li>
    </ul>
    <button class="sectionModal__btn"><img class="sectionModal__btnImg" src="icon/x.png"></button>`;
const CODEipw = `
    <h2 class="sectionModal__h2">Descripcion</h2>
    <p>
        Conosur. Este curso esta enfocado a todo lo referente a la internet, la web y el mundo de la porgramaci&oacute;n.
    </p>
    <h2 class="sectionModal__h2">Temas tratados en el curso</h2>
    <ul>
        <li>Internet y la web</li>
        <li>El mundo del sofware</li>
        <li>Lenguajes de la web</li>
        <li>Herramientas para Porgramar</li>
        <li>Entre varios temas m&aacute;s ...</li>
    </ul>
    <button class="sectionModal__btn"><img class="sectionModal__btnImg" src="icon/x.png"></button>`;
let modalHtml=(src,htmlCODE)=>{
    const modal1 = document.createElement("DIV");
    const modal2 = document.createElement("DIV");
    const sectionModal = document.createElement("SECTION");
    const img = document.createElement("IMG")
    
    sectionModal.classList.add("sectionModal");
    sectionModal.innerHTML= htmlCODE

    img.classList.add("imgHtmlCtf")
    img.src = src;
    modal1.classList.add("modal1");
    modal2.classList.add("modal2");

    modal2.appendChild(img);
    modal2.appendChild(sectionModal);
    modal1.appendChild(modal2); 
    modal1.style.animation="animationModal 0.5s forwards"
    mainctf.appendChild(modal1);

    const sectionModalBtn = document.querySelector(".sectionModal__btn");
    sectionModalBtn.addEventListener("click",()=>mainctf.removeChild(modal1));
};
ctfUdemyHtml.addEventListener("click",()=>modalHtml("icon/certificaUdemyHtml.jpg",CODEhtml));
ctfConosurIWP.addEventListener("click",()=>modalHtml("icon/certificadoConoSur.JPG",CODEipw)); 
