let particleSize = 20;

let width = 400;
let height = 800;

let gravity;
let friction;
let elasticity;

let fr = 30;
let cnv;

let totalParticles = 300;

let particles = [];
let quadTree;

function setup() {
  frameRate(fr);

  gravity = createVector(0, 0.09);
  friction = 0.3;
  elasticity = 0.8;

  cnv = createCanvas(width, height);
  quadTree = new QuadTree(0, 0, width, height);

  for (let i = 0; i < totalParticles; i++) {
    particles.push(
      new Particle(
        random(particleSize, width - particleSize),
        random(particleSize, height - particleSize),
        particleSize,
        gravity,
        friction,
        elasticity
      )
    );
  }
}

function draw() {
  background(50);

  noStroke();
  for (let i = 0; i < totalParticles; i++) {
    quadTree.insert(particles[i]);
    particles[i].move();
    particles[i].show();
  }
  quadTree.checkCollision();

  quadTree.empty();
}
