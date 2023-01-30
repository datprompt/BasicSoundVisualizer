const fft = new p5.FFT();

function preload() {

  groove = loadSound('assets/groove.mp3')
}

function setup() {
  createCanvas(368, 265);
  
  //groove.loop()
  let state = "off"
  let button = createButton("start")
  button.mousePressed(() => {
    if (state === "off") {
      button.html("stop")
      groove.loop()
      state = "on"
    } else if (state === "on") {
      button.html("start")
      groove.stop()
      state = "off"
    }
  })
  button.size(368, 50)
  
}

function draw() {
  background(220);
  
  let spectrum = fft.analyze()
  
  beginShape()
  vertex(0, height)
  for (let i = 0; i < spectrum.length; i++) {
    vertex(log(i)*152*width/spectrum.length, height-spectrum[i])
  }
  vertex(width, height)
  endShape()
}