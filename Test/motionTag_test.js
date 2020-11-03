var lineTag= tag_arr[0].Line;
var txtTag=tag_arr[0].Original;
var rotateTag=tag_arr[0].Binding;
var line_target=document.getElementById(lineTag);
var txt_target=document.getElementById(txtTag);
var ro_target=document.getElementById(rotateTag);
line_target.style.position='fixed';//필수!
line_target.style.left='100px';
 line_target.style.top='200px';
 var motion1='scale(2.0,2.0)';
 var motion2='scale(3.0,3.0)';
 var motion3='scale(1.0,1.0)';
 var motion5='rotate(360deg)';
 var motion6='rotate(-360deg)';
 var motion7='translate(100px, 0px)';
 var motion8='translate(150px, 0px)';
 var motion9='translate(0px, 0px)';
ro_target.animate([
    { offset: 0.1, opacity:0.5},
    { offset: 0.2, opacity:0},
  { offset: 0.3, opacity:1 },
  { offset: 0.4, opacity:0}
],2000);
txt_target.animate([
    { offset: 0.1, transform:motion1},
    { offset: 0.3, transform:motion3 },
  { offset: 0.4, transform:motion2},
  { offset: 0.6, transform:motion5},
{ offset: 0.7, transform:motion6}
],3000);
line_target.animate([
{ offset: 0.6, transform:motion7},
{ offset: 0.8, transform:motion8}
],3000);
