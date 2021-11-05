"use strict"

document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>alert("Если иконки сильно смещены в лево,\nто проблема в вашем браузере, Обновите его"),500))

function isPartiallyVisible(el) {
	let elementBoundary = el.getBoundingClientRect();
	let top = elementBoundary.top;
	let bottom = elementBoundary.bottom;
	let height = elementBoundary.height;
	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
let header=document.querySelector(".header");
let arrow_up=document.querySelector(".arrow-up");
let text = document.querySelectorAll("p,h1,span,.borderHtml,.borderCss,.borderScss,.borderJs,.borderReact,.borderGit,.WordpressBorder,.cv,.msgs");

document.addEventListener("scroll",onScroll);

function onScroll(){

	for(let elem of text ){
		if(isPartiallyVisible(elem)){
			elem.classList.add("textVisible")
		}
	}

	if(!isPartiallyVisible(header))arrow_up.style.cssText="display:flex !important;";
	else arrow_up.style.display="none";
	if(isPartiallyVisible(html))html.style="animation:2.5s ease forwards html;";
	if(isPartiallyVisible(css))css.style="animation:1.8s ease forwards css;";
	if(isPartiallyVisible(scss))scss.style="animation:2s ease forwards scss;";
	if(isPartiallyVisible(js))js.style="animation:2.3s ease forwards js;";
	if(isPartiallyVisible(react))react.style="animation:2.5s ease forwards react;";
	if(isPartiallyVisible(git))git.style="animation:2.8s ease forwards git;";
	if(isPartiallyVisible(wordpess))wordpess.style="animation:3s ease forwards wordpress;";

	

}

let html=document.querySelector(".Html");
let css=document.querySelector(".Css");
let scss=document.querySelector(".Scss");
let js=document.querySelector(".Js");
let react=document.querySelector(".React");
let git=document.querySelector(".Git");
let wordpess=document.querySelector(".Wordpress");


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
  	el: '.swiper-pagination',
  	clickable:true
  },

  // Navigation arrows
  navigation: {
  	nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
  	el: '.swiper-scrollbar',
  },
});

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

let email = document.querySelector(".email");
let emailInvalid = document.querySelector(".emailInvalid");
let number = document.querySelector(".number");
let numberInvalid = document.querySelector(".tel");
let submit = document.querySelector(".submit");
let form = document.querySelector("form");
let description = document.querySelector(".description");

form.addEventListener("submit",formClick)

function formClick(event){

	if(!validateEmail(email.value)){
		emailInvalid.style.display="inline-block";
		event.preventDefault()
	}

	if(!number.value.match(/^[0-9\-\+]{9,15}$/)){	
		numberInvalid.style.display="inline-block";
		event.preventDefault()
	}

	if(validateEmail(email.value)){
		emailInvalid.style.display="none ";
		
	}

	if(number.value.match(/^[0-9\-\+]{9,15}$/)){
		numberInvalid.style.display="none";
	}

	if (validateEmail(email.value)&&number.value.match(/^[0-9\-\+]{9,15}$/)){
		setTimeout(()=>{
			number.value=""
			email.value=""
			description.value=""
		},100)
	}
}	

let gamburger	= document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");

gamburger.addEventListener("click",dropNav)

function dropNav(event) {
	if (event.target.classList.contains("fa-bars")){
		nav.classList.add("nav2");
		event.target.classList.remove("fa-bars");
		event.target.classList.add("fa-times");
	}
	else{
		nav.classList.remove("nav2");
		event.target.classList.remove("fa-times");
		event.target.classList.add("fa-bars");

	}
}






