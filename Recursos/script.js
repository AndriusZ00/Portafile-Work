"use strict";
const names = document.getElementById("nombre");
const email = document.getElementById("email");
const tell = document.getElementById("telefono");
const sms = document.getElementById("sms");
const btnSend = document.getElementById("send");
const smsAlert = document.getElementById("alert");
const btnMenu = document.querySelector(".nav__button");
const menuUl = document.querySelector(".nav__ul");
const btnBr = document.querySelectorAll(".br");
const articleSM = document.querySelector(".article-sobreMi")


const nav = document.querySelector(".nav");

btnSend.addEventListener("click",(e)=>{
    let validationNames =()=>{
        return new Promise((resolve,reject)=>{
            if(names.value.length > 80 ||names.value.length < 8 || names.value.includes(".") ||
            names.value.includes("-") || names.value.includes("@") || names.value.includes("{") ||
            names.value.includes("}") || names.value.includes("(") || names.value.includes(")") ||
            names.value.includes("=") || names.value.includes("?") || names.value.includes("¿") ||
            names.value.includes("/") || names.value.includes("|") || names.value.includes("!") ||
            names.value.includes("¡") || names.value.includes("#") || names.value.includes("$") ||
            names.value.includes("%") || names.value.includes("&") || names.value.includes("*") ||
            names.value.includes("+") || names.value.includes("[") || names.value.includes("]") ||
            names.value.includes("^") || names.value.includes("~") || names.value.includes("°") ||
            names.value.includes(">") || names.value.includes("<") || names.value.includes("1") ||
            names.value.includes("2") || names.value.includes("3") || names.value.includes("4") ||
            names.value.includes("5") || names.value.includes("6") || names.value.includes("7") ||
            names.value.includes("8") || names.value.includes("9") || names.value.includes("0") 
            ) {
                e.preventDefault();
                reject("Nombre invalido");
                names.style.borderBottom = "0.2em solid #f00";
            }
        else {
            resolve("Solicitud enviada correctamente");
            names.style.borderBottom = "0.2em solid #0f0";
        }
        })
    }
    let validationEmail =()=>{
        return new Promise((resolve,reject)=>{
            if(email.value.length > 80 || email.value.length < 8 || email.value.includes("<") ||
            email.value.includes("¬") || email.value.includes("{") || email.value.includes("}") || 
            email.value.includes("(") || email.value.includes(")") || email.value.includes(">") ||
            email.value.includes("=") || email.value.includes("?") || email.value.includes("¿") ||
            email.value.includes("/") || email.value.includes("|") || email.value.includes("!") ||
            email.value.includes("¡") || email.value.includes("#") || email.value.includes("$") ||
            email.value.includes("%") || email.value.includes("&") || email.value.includes("*") ||
            email.value.includes("+") || email.value.includes("[") || email.value.includes("]") ||
            email.value.includes("^") || email.value.includes("~") || email.value.includes("°") ||
            email.value.indexOf(".com") == -1 || email.value.indexOf("@") == -1
            ) {
                e.preventDefault();
                reject("Email invalido");
                email.style.borderBottom = "0.2em solid #f00";
            }
        else {
            resolve("Solicitud enviada correctamente");
            email.style.borderBottom = "0.2em solid #0f0";
        }
        })
    }
    let validationTell =()=>{
        return new Promise((resolve,reject)=>{
            if(tell.value.length > 10 || tell.value.length < 10 || tell.value.includes("e")) {
                e.preventDefault();
                reject("Celular invalido");
                tell.style.borderBottom = "0.2em solid #f00";
            }
        else {
            resolve("Solicitud enviada correctamente");
            tell.style.borderBottom = "0.2em solid #0f0";
        }
        })
    }
    let validationSms =()=>{
        return new Promise((resolve,reject)=>{
            if(sms.value.length > 400 || sms.value.includes("verga") || sms.value.includes("asco") || 
            sms.value.includes("puta") || sms.value.includes("idiota") || sms.value.includes("puto") || 
            sms.value.includes("estupido") || sms.value.includes("estafador") || sms.value.includes("malparido") ||
            sms.value.includes("deficiente") || sms.value.includes("desonesto") || sms.value.includes("irresponsable") ||
            sms.value.includes("pedamte") || sms.value.includes("lento")) {
                e.preventDefault();
                reject("Evita usar comentarios ofensivos.");
                sms.style.borderBottom = "0.2em solid #f00";
            }
        else {
            resolve("Solicitud enviada correctamente");
            sms.style.borderBottom = "0.2em solid #0f0";
        }
        })
    }
    validationNames().then(res=>{
        styleAlert("#0f0")
        smsAlert.innerHTML = res;
        return validationEmail()
    }).then(res=>{
        styleAlert("#0f0")
        smsAlert.innerHTML = res;
        return validationTell()
    }).then(res=>{
        styleAlert("#0f0")
        smsAlert.innerHTML = res;
        return validationSms()
    }).then(res=>smsAlert.innerHTML = res).catch(err=>{
        styleAlert("#f00")
        smsAlert.innerHTML = err})
})
let styleAlert=(color)=>{
    smsAlert.style.color = color;
    smsAlert.style.textAlign = "center";
}
btnMenu.addEventListener("click",()=>{
    menuUl.classList.toggle("active")
    btnBr.forEach(br=>br.classList.toggle("rotate"))

})
const header = document.querySelector(".header")
const imgSM = document.querySelector(".article-sobreMi__img");
const intersection = new IntersectionObserver((entry)=>{
    if(entry[0].isIntersecting){
        nav.style.backgroundColor = "transparent"
        console.log(entry)
        }
    else{
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
        }
})
const intersection2 = new IntersectionObserver((entry)=>{
    if(entry[0].isIntersecting){
        imgSM.style.animation = "focus 0.6s 0.2s forwards ease-in-out "
        console.log(entry)
    }
    else{
        imgSM.style.animation = "focusReverse 0.1s 0.1s forwards ease-in-out "
    }

})
intersection2.observe(articleSM)
intersection.observe(header)

console.log(header.className)