var rotationTag= tag_arr[0].Rotation;
var rotation_target=document.getElementById(rotationTag);
rotation_target.style.position='fixed';
rotation_target.animate([
  rotationMotionArr[0][0],
  rotationMotionArr[0][1],
  rotationMotionArr[0][2]
],7000);

 var effects2 = new Array();
 for(var i=0;i<shakeMotionArr[0].length;i++){
   effects2.push(shakeMotionArr[0][i]);
   //console.log(shakeMotionArr[0][i]);
 }
var shakeTag= tag_arr[0].Shake;
var shake_target=document.getElementById(shakeTag);
shake_target.style.position='fixed';
shake_target.animate(effects2,2000);

var appearTag= tag_arr[0].Appear;
var appear_target=document.getElementById(appearTag);
appear_target.animate([
   appearMotionArr[0][0],
   appearMotionArr[0][1],
   appearMotionArr[0][2],
   appearMotionArr[0][3],
],{
 duration:parameter_duration,
 easing: 'ease-in'
});

var effects2 = new Array();
//console.log("BLINK"+blinkMotionArr[0].length);
for(var i=0;i<blinkMotionArr[0].length;i++){
  effects2.push(blinkMotionArr[0][i]);
  //console.log(blinkMotionArr[0][i]);
}
var blinkTag= tag_arr[0].Blink;
var blink_target=document.getElementById(blinkTag);
//blink_target.animate(effects2,2000);
blink_target.animate(effects2,{
 duration:parameter_duration
});

var effects2 = new Array();
//console.log("BLINK"+blinkMotionArr[0].length);
for(var i=0;i<circleMotionArr[0].length;i++){
  effects2.push(circleMotionArr[0][i]);
  //console.log(blinkMotionArr[0][i]);
}
var circleTag= tag_arr[0].Circle;
var circle_target=document.getElementById(circleTag);
circle_target.style.position='fixed';
circle_target.style.left='200px';
 circle_target.style.top='200px';
//blink_target.animate(effects2,2000);
circle_target.animate(effects2,{
 duration:parameter_duration
});

var rectangleTag= tag_arr[0].Rectangle;
var rectangle_target=document.getElementById(rectangleTag);
rectangle_target.style.position='fixed';
rectangle_target.style.left='200px';
 rectangle_target.style.top='200px';
