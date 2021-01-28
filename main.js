song1 = ""
song2 = ""
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function preload() {
  song1 = loadSound("song 1 opening 5.mp3")
  song2 = loadSound("song 2 opening 6.mp3")
}
function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on("pose", getPoses)
}
function draw() {
  image(video, 0, 0, 500, 500)
}
function modelLoaded() {
  console.log("model is loaded")
}
function getPoses(results) {
  console.log(results)
  leftWristX = results[0].pose.leftWrist.x
  console.log("leftWristX = "+leftWristX)
  leftWristY = results[0].pose.leftWrist.y
  console.log("leftWristY = "+leftWristY)
  rightWristX = results[0].pose.rightWrist.x
  console.log("rightWristX = "+rightWristX)
  rightWristY = results[0].pose.rightWrist.y
  console.log("rightWristY = "+rightWristY)
}