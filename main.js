import './style.css';
import gsap from 'https://cdn.skypack.dev/gsap';
import { Draggable } from "https://cdn.skypack.dev/gsap/Draggable";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

import scrollbooster from 'https://cdn.skypack.dev/scrollbooster';

gsap.registerPlugin(Draggable, ScrollTrigger);

var tl = gsap.timeline();
tl.fromTo('.info__image',
  {
    y: 200,
    autoAlpha: 0,
    'filter': 'grayscale(100%) blur(2px)',
    scale: 0
  },
  {
    y: 0,
    autoAlpha: 1,
    'filter': 'grayscale(0%) blur(0px)',
    duration: 1,
    scale: 1,
    ease: 'power4.out'
  }
);
tl.fromTo('.info__text',
  {
    y: 50,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
    duration: 0.3
  }
)
tl.fromTo('.box', { y: 100, autoAlpha: 0 }, {
  y: 0,
  autoAlpha: 1,
  duration: 1.3,
  stagger: {
    each: 0.1,
  },
  ease: 'bounce.out'
});

const button = document.querySelector('#toggle-box');
const button2 = document.querySelector('#toggle-box-2');
const buttonHidden = document.querySelector('#a-button');

buttonHidden.onclick = () => {
  console.log('INTERACTIONS!');
};

button.onclick = () => {
  gsap.to('.box', { y: 100, autoAlpha: 0, stagger: 0.1 })
};

button2.onclick = () => {
  gsap.to('.box', { y: 0, autoAlpha: 1, stagger: 0.1 })
};


/* Drag */
const dragElement = document.querySelector('.drag-element');
const body = document.body;
Draggable.create(dragElement, {
  bounds: body,
  dragClickables: true,
  onClick: function () {
    console.log("clicked event!");
  },
});

new scrollbooster({
  viewport: document.querySelector('.navigation'),
  content: document.querySelector('.drag-scroll'),
  scrollMode: 'native',
  direction: 'horizontal'
});


var colors = ['#F6B735', '#FA7500'];

/* Parallex w GSAP */
const tP = gsap.timeline({
  scrollTrigger: {
    trigger: ".copy",
    start: "center bottom",
    end: "center top",
    scrub: true,
    markers: true,
    onLeave: () => {
      console.log('confetti time!');
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    }
  }
});
tP.to("#svg-banana", { y: -300, duration: 2 })
tP.to("#svg-banana", { rotate: -300, duration: 4 })
tP.to("#svg-banana", { y: 100, duration: 3 })
