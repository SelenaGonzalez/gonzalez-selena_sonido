let osc, playing, freq, amp;
let t = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("sawtooth");
}

function draw() {
  background(220);
  osc.start();
  freq = constrain(map(noise(t), 0, 1, 100, 900), 100, 900);
  amp = 0.05;

  osc.freq(freq, 0.01);
  osc.amp(amp, 0.01);
  t += 0.01;
}
