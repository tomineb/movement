let rute = []; 
const val = 2000; 
const speed = 0.01/2; 


function setup() {
  createCanvas(800, 800);
	
  for(let i = 0; i<val; i++){
    rute.push(createVector(random(width),random(height))); 
 }
  stroke(0); 
  }

function draw() {
  background(255);
    for(let i = 0; i < val; i++){
      let ny = rute[i]; 
      point(ny.x, ny.y);
    
      let noiseVal = noise(ny.x * speed, ny.y * speed); 
      let move = TAU * noiseVal; 
      ny.x += cos(move); 
      ny.y += sin(move); 
    }
}
