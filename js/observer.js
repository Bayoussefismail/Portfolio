
const controller = new ScrollMagic.Controller();



const scene1 = new ScrollMagic.Scene({
  triggerElement: ".sticky"
}).setClassToggle('.sticky', 'rightanim').addTo(controller);
const scene2 = new ScrollMagic.Scene({
  triggerElement: ".sticky1"
}).setClassToggle('.sticky1', 'opacity').addTo(controller);
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".sticky3"
}).setClassToggle('.sticky3', 'opacity').addTo(controller);
const scene4 = new ScrollMagic.Scene({
  triggerElement: ".sticky4"
}).setClassToggle('.sticky4', 'rightanim2').addTo(controller);
const scene5 = new ScrollMagic.Scene({
  triggerElement: ".sticky5"
}).setClassToggle('.sticky5', 'rightanim2').addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: ".sticky6"
}).setClassToggle('.sticky6', 'opacity').addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: ".sticky7"
}).setClassToggle('.sticky7', 'rightanim2').addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: ".sticky8"
}).setClassToggle('.sticky8', 'rightanim2').addTo(controller);

const scene9 = new ScrollMagic.Scene({
  triggerElement: ".sticky9"
}).setClassToggle('.sticky9', 'rightanim2').addTo(controller);
