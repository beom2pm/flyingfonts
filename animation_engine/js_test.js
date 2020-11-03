var contentArr = new Array();
function js_to_css(){
  setOpacity(1,2000);
  ////////////////////////////////텍스트 객체 생성 및 div 생성////////////////////////////////////
  var keyframeEffects = [];
  contents= ("키네틱");
  textType="char";                                //텍스트 분리 단위 선택
  contentArr= ffcreateText(contents,textType);
  //console.log("sdfsd"+contentArr[0]+contentArr[1]+contentArr[2]);

  var mot1 = ffLine("txt0", {             //텍스트 모션 설정
      line_route : "utod",
      length : 300
   });
  var mot2 = ffStaticRotation("txt0", {
      angle : 180,
      axis : "left"
   });
   var mot3 = ffStaticShake("txt0", {
     shake_count : 4,
     direction: "all"
    });
  var mot4 = ffAppearance("txt0", {
      mode : "top"
     });
  var mot5 = ffStaticBlink("txt0", {
         opacity : 0,
         num_per_second:1
  });
  var mot6 = ffCircle("txt0", {
      radius:3,
      direction:"clock",
      start_angle:0,
      end_angle:360
  });
  var mot7 = ffRectangle("txt0", {
      length:4,
      direction:"clock",
      start_quadrant:1
     });
  var mot8= ffStaticScale("txt0", {
         scaleX:2.0,
         scaleY:2.0
        });
  var mot9= ffStaticScale("txt0", {
       scaleX:0.3,
       scaleY:0.3
  });
  var mot30 = ffLine("txt0", {             //텍스트 모션 설정
      line_route : "diag_ur",
      length : 300
   });
   var mot31 = ffLine("txt0", {             //텍스트 모션 설정
       line_route : "diag_dl",
       length : 300
    });
  var mot10= ffStaticScale("txt1", {
         scaleX:2.0,
         scaleY:2.0
        });
  var mot11= ffStaticScale("txt1", {
       scaleX:0.3,
       scaleY:0.3
  });
  var mot12 = ffStaticRotation("txt1", {
      angle : 180,
      axis : "center"
   });
  var mot13 = ffLine("txt1", {             //텍스트 모션 설정
    line_route : "utod",
    length : 300
  });
  var mot14 = ffStaticShake("txt1", {
      shake_count : 4,
      direction: "all"
   });
   var mot15 = ffStaticBlink("txt1", {
          opacity : 0,
          num_per_second:1
   });
   var mot16 = ffRectangle("txt1", {
       length:5,
       direction:"clock",
       start_quadrant:2
    });
  var mot17 = ffAppearance("txt1", {
        mode : "bottom"
  });
  var mot18 = ffCircle("txt1", {
      radius:3,
      direction:"clock",
      start_angle:0,
      end_angle:360
  });
  var mot19 = ffLine("txt1", {             //텍스트 모션 설정
      line_route : "diag_dr",
      length : 300
  });
  var mot20 = ffLine("txt1", {             //텍스트 모션 설정
      line_route : "diag_ur",
      length : 300
   });
//text2
var mot40 = ffCircle("txt2", {
    radius:3,
    direction:"clock",
    start_angle:0,
    end_angle:360
});
var mot41 = ffLine("txt2", {             //텍스트 모션 설정
  line_route : "utod",
  length : 300
 });
 var mot42 = ffStaticShake("txt2", {
   shake_count : 4,
   direction: "all"
  });
 var mot43= ffStaticScale("txt2", {
         scaleX:2.0,
         scaleY:2.0
  });
  var mot49= ffStaticScale("txt2", {
          scaleX:0.3,
          scaleY:0.3
   });
  var mot44 = ffStaticBlink("txt2", {
         opacity : 0,
         num_per_second:1
  });
  var mot45 = ffStaticRotation("txt2", {
      angle : 180,
      axis : "center"
  });
  var mot46= ffStaticScale("txt2", {
          scaleX:0.3,
          scaleY:0.3
   });
   var mot47 = ffRectangle("txt2", {
       length:4,
       direction:"clock",
       start_quadrant:3
  });
  var mot48 = ffLine("txt2", {             //텍스트 모션 설정
      line_route : "diag_ur",
      length : 300
   });

   ffMotion(                             //텍스트 모션 적용
     {func : mot7, delay : 0, duration : 4,iteration:1,start_time: 2},
     {func : mot7, delay : 0, duration : 4,iteration:1,start_time: 0},
     {func : mot12, delay : 0, duration : 2,iteration:3,start_time: 0},
     {func : mot12, delay : 1, duration : 2,iteration:3,start_time: 2},
     {func : mot45, delay : 0, duration : 2,iteration:5,start_time: 1}
  );

  ffTextBinding(
    {upper:8, lower:1}
  );

  ffMotionBinding(
    {duration:5000, direction:"ltor" , repeat: 2}
  );

  ffSetFontAttr(document.getElementById('txt0'), {  //폰트 속성 관련 설정
    fontFamily : "Hanna",
     fontSize : 40,
     fontColor : "#95b5c4",
    fontOpacity: 100
  });
  ffSetTextAttr(document.getElementById('txt0'), {
    textShadowWidth: 2.5,
    textShadowColor: "#ebd767",
      initX : 320,
      initY : 400
  });
  ffSetFontAttr(document.getElementById('txt1'), {  //폰트 속성 관련 설정
    fontFamily : "Hanna",
     fontSize : 40,
     fontColor : "#c7839f",
    fontOpacity: 100
  });
  ffSetTextAttr(document.getElementById('txt1'), {
    textShadowWidth: 2.5,
    textShadowColor: "#ebd767",
      initX : 320,
      initY : 400
  });
  ffSetFontAttr(document.getElementById('txt2'), {  //폰트 속성 관련 설정
    fontFamily : "Hanna",
     fontSize : 40,
     fontColor : "#d69869",
    fontOpacity: 100
  });
  ffSetTextAttr(document.getElementById('txt2'), {
    textShadowWidth: 2.5,
    textShadowColor: "#ebd767",
      initX : 320,
      initY : 400
  });

}
/////start_time sort
var sort_motionTime = function(motionArr) {
  motionArr.sort(function(a, b) { // 오름차순
    var sum_a = a.delay+a.start_time;
    var sum_b = b.delay+b.start_time;
    return sum_a < sum_b ? -1 : sum_a > sum_b ? 1 : 0;
  })
  return motionArr;
};

//////////////////////////모션 적용 관련////////////////////////////////////////////////////

var ffMotion = function(arg) {
   //motion data argument 가져오기
   var motion_data_arr = getMotionData(arguments);
   var checkArray = [];
   for (var i = 0; i < motion_data_arr.length; i++) {
     checkArray[i] = motion_data_arr[i].func.target;
   }
   ///getTarget는 target이 들어가있음  targetArr에 delay, duration, fun들어감
   var getTarget = uniq(checkArray);
   console.log("target num"+getTarget.length);
   var len_target=getTarget.length;
   var len_motion=motion_data_arr.length;
   var targetArr = new Array();
     for (var p1 = 0; p1 < len_target; p1++) {
        var pk = 0;
        //같은 target을 기준으로 delay, duration, func(motion)이 들어감->모션갯수만큼
        var tempArr = new Array();
        for (var p2 = 0; p2 < len_motion; p2++) {
           if (getTarget[p1] == motion_data_arr[p2].func.target) {
             console.log("test temparr"+tempArr.length);
             tempArr.push(motion_data_arr[p2]);
             console.log("test temparr"+tempArr.length);
            // console.log("motion name "+motion_data_arr[p2].func.name);
           }
        }
        targetArr[p1]=tempArr;
      }
      //////time_sort//////////
      for(var p1 = 0; p1<targetArr.length; p1++){
        targetArr[p1] = sort_motionTime(targetArr[p1]);
        console.log("tarGET SIZE "+targetArr[p1].length);
      //  console.log("check_sort"+p1+" "+targetArr[p1][0].start_time);
        //console.log("check_sort"+p1+" "+targetArr[p1][1].start_time);
      }


////////////////////////////////텍스트 객체 생성 및 div 생성////////////////////////////////////
    var tag_arr= new Array();
    tag_arr=create_div(getTarget, contentArr);
        //console.log(tag_arr[0].Line);
        //test는 motionTag_test.js에서
////////////////////////////////실행시간 계산 관련//////////////////////////////
   var relativeStartTime = Array(Array(),Array());
   //같은 객체에 적용된 모션들의 실행시간/시작시간 등을 계산해 저장한다.
   relativeStartTime = calculateRunTime(len_target, targetArr).relativeStartTime;
    //console.log("motion di"+relativeStartTime[0][0].motion_name);


   var total_time = calculateRunTime(len_target, targetArr).total_time;
   var offset_per_second = new Array();
   for(var i =0; i< total_time.length;i++){
        offset_per_second[i]=total_time[i]/10000;
      //  console.log("초당 offset "+offset_per_second[i]);
   }

   //시작 delay는 offset에 포함 안시키려고 일부러 빼고함
   var first_delay = calculateRunTime(len_target, targetArr).first_delay;
///////////////////////////////////offset구하기//////////////////////////////////
   var offsetArray = Array(Array(),Array());
   offsetArray= calculateOffset(len_target, relativeStartTime, total_time);
   //console.log("offsetArray"+offsetArray[0][1].start_offset);
   var totalMotion = Array(Array(),Array());


//offset이 같을때는 어떻게 해줄지
var motionOffset;
var startOffset;
var endOffset;
var motion_count=0;
var txtMotionArr = Array(Array(),Array());
var lineMotionArr = [];
var rotationMotionArr = [];
var shakeMotionArr = [];
var appearMotionArr= [];
var blinkMotionArr= [];
var circleMotionArr= [];
var rectangleMotionArr= new Array();;
var scaleMotionArr=[];
//console.log("offsetArray size "+offsetArray[0].length);
   for(var i=0;i<offsetArray.length;i++){
     motion_count=0;
     rotationMotionArr.push([]);
     lineMotionArr.push([]);
     shakeMotionArr.push([]);
     appearMotionArr.push([]);
     blinkMotionArr.push([]);
     circleMotionArr.push([]);
     rectangleMotionArr.push([]);
     scaleMotionArr.push([]);
     for(var j=0;j<offsetArray[i].length;j++){
         startOffset= offsetArray[i][j].start_offset;
         //console.log("wgy gsldf "+i+" "+startOffset);
         endOffset= offsetArray[i][j].end_offset;
         var motionName=offsetArray[i][j].motion_name;
         var targetName =offsetArray[i][j].target;
         var iteration= targetArr[i][motion_count].iteration;
         //console.log("iter"+iteration);
         //var duration=targetArr[i][motion_count].duration;
       if(motionName=="Line"){
          var left_px= targetArr[i][motion_count].func.toLeft;
          var top_px= targetArr[i][motion_count].func.toTop;
          lineMotionArr[i].push(setOffset_Line(startOffset, endOffset, left_px, top_px,lineMotionArr[i],offset_per_second[i],iteration));
          motion_count++;
       }
       //offset만드는건 따로 함수로 빼기
       else if(motionName=="Rotation"){
        var angle= targetArr[i][motion_count].func.angle;
        var rotate_axis = targetArr[i][motion_count].func.axis;
        rotationMotionArr[i].push(setOffset_Rotation(startOffset, endOffset, angle,rotationMotionArr[i],offset_per_second[i],rotate_axis,iteration));
        check_undefined(rotationMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Shake"){
        var topArr_shake= targetArr[i][motion_count].func.topArr;
        var leftArr_shake= targetArr[i][motion_count].func.leftArr;
        var shake_duration=targetArr[i][motion_count].duration;
        var shake_count= targetArr[i][motion_count].func.shake_count;
        //console.log("start "+j+" "+startOffset);
        shakeMotionArr[i].push(setOffset_Shake(startOffset, endOffset, shake_count,shake_duration,shakeMotionArr[i],topArr_shake,leftArr_shake,offset_per_second[i],iteration));
        check_undefined(shakeMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Appearance"){
        var appear_fromTop= targetArr[i][motion_count].func.fromTop;
        var appear_fromLeft= targetArr[i][motion_count].func.fromLeft;
        var appear_toTop= targetArr[i][motion_count].func.toTop;
        var appear_toLeft= targetArr[i][motion_count].func.toLeft;
        var appearOpacity=targetArr[i][motion_count].func.appearOpacity;
        appearMotionArr[i].push(setOffset_Appear(startOffset, endOffset,appearMotionArr[i], appear_fromTop,appear_fromLeft,appear_toTop,appear_toLeft,appearOpacity,offset_per_second[i],iteration));
        check_undefined(appearMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Blink"){
        var blink_opacity= targetArr[i][motion_count].func.opacity;
        var blink_duration=targetArr[i][motion_count].duration;
        var num_per_second= targetArr[i][motion_count].func.num_per_second;
        blinkMotionArr[i].push(setOffset_Blink(startOffset, endOffset,blinkMotionArr[i], blink_duration,blink_opacity,num_per_second,iteration));
        check_undefined(blinkMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Circle"){
        var circle_leftArr= targetArr[i][motion_count].func.leftArr;
        var circle_topArr= targetArr[i][motion_count].func.topArr;
        circleMotionArr[i].push(setOffset_Circle(startOffset, endOffset,circleMotionArr[i],circle_leftArr,circle_topArr,offset_per_second[i],iteration));
        check_undefined(circleMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Rectangle"){
        var rectangle_leftArr= targetArr[i][motion_count].func.leftArr;
        var rectangle_topArr= targetArr[i][motion_count].func.topArr;
        rectangleMotionArr[i].push(setOffset_Rectangle(startOffset, endOffset,rectangleMotionArr[i],rectangle_leftArr,rectangle_topArr,offset_per_second[i],iteration));
        check_undefined(rectangleMotionArr[i]);
        motion_count++;
       }
       else if(motionName=="Scale"){
        var scaleX= targetArr[i][motion_count].func.scaleX;
        var scaleY= targetArr[i][motion_count].func.scaleY;
        scaleMotionArr[i].push(setOffset_Scale(startOffset, endOffset,scaleMotionArr[i],scaleX,scaleY,offset_per_second[i],iteration));
        check_undefined(scaleMotionArr[i]);
        motion_count++;
       }
     }
     //console.log("rec temp size "+rectangleMotionArr[i].length);
   }

   var lineTag= tag_arr[0].Line;
   var line_target=document.getElementById(lineTag);
   var parameter_duration = total_time[0]*1000;
   var parameter_duration2 = total_time[1]*1000;
    var parameter_duration3 = total_time[2]*1000;
   //console.log("total seconds"+parameter_duration);
  var effects = new Array();
  for(var i=0;i<lineMotionArr[0].length;i++){
    effects.push(lineMotionArr[0][i]);
    //console.log(lineMotionArr[0][i]);
  }

  console.log("rectangle size "+rectangleMotionArr[0].length);
  for(var p1 = 0; p1<rectangleMotionArr.length; p1++){
    rectangleMotionArr[p1] = sort_offset(rectangleMotionArr[p1]);
  }
  var effects2 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i<rectangleMotionArr[0].length;i++){
    effects2.push(rectangleMotionArr[0][i]);
    console.log("rectangle "+rectangleMotionArr[0][i].offset);
  }
  var rectangleTag= tag_arr[0].Rectangle;
  var rectangle_target=document.getElementById(rectangleTag);

  /*for(var p1 = 0; p1<rotationMotionArr.length; p1++){
    rotationMotionArr[p1] = sort_offset(rotationMotionArr[p1]);
  }*/
   var rotationTag= tag_arr[0].Rotation;
   var rotation_target=document.getElementById(rotationTag);
   var effects3 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   /*
   console.log("rotation size "+rotationMotionArr[0].length);
   for(var i=0;i< rotationMotionArr[0].length;i++){
     console.log("why "+rotationMotionArr[0][i].offset);
     effects3.push( rotationMotionArr[0][i]);
   }*/

   var shakeTag= tag_arr[0].Shake;
   var shake_target=document.getElementById(shakeTag);
  var effects4 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< shakeMotionArr[0].length;i++){
    effects4.push( shakeMotionArr[0][i]);
  }

  var appearTag= tag_arr[0].Appear;
  var appear_target=document.getElementById(appearTag);
  var effects5 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< appearMotionArr[0].length;i++){
    effects5.push( appearMotionArr[0][i]);
  }

  var blinkTag= tag_arr[0].Blink;
  var blink_target=document.getElementById(blinkTag);
  var effects6 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< blinkMotionArr[0].length;i++){
    effects6.push( blinkMotionArr[0][i]);
  }

  var scaleTag= tag_arr[0].Scale;
  var scale_target=document.getElementById(scaleTag);
  var effects7 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< scaleMotionArr[0].length;i++){
    effects7.push( scaleMotionArr[0][i]);
  }

  var circleTag= tag_arr[0].Circle;
  var circle_target=document.getElementById(circleTag);
  var effects8 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< circleMotionArr[0].length;i++){
    effects8.push( circleMotionArr[0][i]);
  }

  //////text1./...
  var opacityTag= tag_arr[0].Opacity;
  var opacity_target=document.getElementById(opacityTag);
  opacity_target.style.position='fixed';
  opacity_target.style.left='200px';
  opacity_target.style.top='200px';
  var effects100 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);


  var opacityTag1= tag_arr[1].Opacity;
  var opacity_target1=document.getElementById(opacityTag1);
  opacity_target1.style.position='fixed';
  opacity_target1.style.left='300px';
  opacity_target1.style.top='200px';

  var opacityTag2= tag_arr[2].Opacity;
  var opacity_target2=document.getElementById(opacityTag2);
  opacity_target2.style.position='fixed';
  opacity_target2.style.left='400px';
  opacity_target2.style.top='200px';

    var circleTag1= tag_arr[1].Circle;
    var circle_target1=document.getElementById(circleTag1);
    var effects9 = new Array();
    //console.log("SHAKE"+scaleMotionArr[0].length);
    for(var i=0;i< circleMotionArr[1].length;i++){
      effects9.push( circleMotionArr[1][i]);
    }

    var scaleTag1= tag_arr[1].Scale;
    var scale_target1=document.getElementById(scaleTag1);
    var effects10 = new Array();
    //console.log("SHAKE"+scaleMotionArr[0].length);
    for(var i=0;i< scaleMotionArr[1].length;i++){
      effects10.push( scaleMotionArr[1][i]);
    }

    var blinkTag1= tag_arr[1].Blink;
    var blink_target1=document.getElementById(blinkTag1);
    var effects11 = new Array();
    //console.log("SHAKE"+scaleMotionArr[0].length);
    for(var i=0;i< blinkMotionArr[1].length;i++){
      effects11.push( blinkMotionArr[1][i]);
    }

    var rotationTag1= tag_arr[1].Rotation;
    var rotation_target1=document.getElementById(rotationTag1);
    var effects12 = new Array();
    //console.log("SHAKE"+scaleMotionArr[0].length);
    for(var i=0;i< rotationMotionArr[1].length;i++){
      effects12.push( rotationMotionArr[1][i]);
    }

    var lineTag1= tag_arr[1].Line;
    var line_target1=document.getElementById(lineTag1);
    var effects13 = new Array();
    for(var i=0;i<lineMotionArr[1].length;i++){
     effects13.push(lineMotionArr[1][i]);
    }

    var shakeTag1= tag_arr[1].Shake;
    var shake_target1=document.getElementById(shakeTag1);
   var effects14 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< shakeMotionArr[1].length;i++){
     effects14.push( shakeMotionArr[1][i]);
   }

   var rectangleTag1= tag_arr[1].Rectangle;
   var rectangle_target1=document.getElementById(rectangleTag1);
   var effects15 = new Array();
   for(var i=0;i<rectangleMotionArr[1].length;i++){
     effects15.push(rectangleMotionArr[1][i]);
   }

   var appearTag1= tag_arr[1].Appear;
   var appear_target1=document.getElementById(appearTag1);
   var effects16 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< appearMotionArr[1].length;i++){
     effects16.push( appearMotionArr[1][i]);
   }

   ////text2
  var circleTag2= tag_arr[2].Circle;
   var circle_target2=document.getElementById(circleTag2);
   var effects30 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< circleMotionArr[2].length;i++){
     effects30.push( circleMotionArr[2][i]);
   }

   var rectangleTag2= tag_arr[2].Rectangle;
   var rectangle_target2=document.getElementById(rectangleTag2);
   var effects31 = new Array();
   for(var i=0;i<rectangleMotionArr[2].length;i++){
     effects31.push(rectangleMotionArr[2][i]);
   }

   var scaleTag2= tag_arr[2].Scale;
   var scale_target2=document.getElementById(scaleTag2);
   var effects32 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< scaleMotionArr[2].length;i++){
     effects32.push( scaleMotionArr[2][i]);
   }

   var blinkTag2= tag_arr[2].Blink;
   var blink_target2=document.getElementById(blinkTag2);
   var effects33 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< blinkMotionArr[2].length;i++){
     effects33.push( blinkMotionArr[2][i]);
   }

   var rotationTag2= tag_arr[2].Rotation;
   var rotation_target2=document.getElementById(rotationTag2);
   var effects34 = new Array();
   //console.log("SHAKE"+scaleMotionArr[0].length);
   for(var i=0;i< rotationMotionArr[2].length;i++){
     effects34.push( rotationMotionArr[2][i]);
   }

   var lineTag2= tag_arr[2].Line;
   var line_target2=document.getElementById(lineTag2);
   var effects35 = new Array();
   for(var i=0;i<lineMotionArr[2].length;i++){
    effects35.push(lineMotionArr[2][i]);
   }

   var shakeTag2= tag_arr[2].Shake;
   var shake_target2=document.getElementById(shakeTag2);
  var effects36 = new Array();
  //console.log("SHAKE"+scaleMotionArr[0].length);
  for(var i=0;i< shakeMotionArr[2].length;i++){
    effects36.push( shakeMotionArr[2][i]);
  }

//모션 테스트 - motionRuntTest.js
 //button click motion
  var btn = document.getElementById('player');
btn.addEventListener('click', function(e) {

  line_target.animate(effects,{
   duration:parameter_duration
 });

  rotation_target.animate(effects3,{
   duration:parameter_duration
  });
  rectangle_target.animate(effects2,{
    duration:parameter_duration
  });
 shake_target.animate(effects4,{
 duration:parameter_duration
 });
 appear_target.animate(effects5,{
   duration:parameter_duration
 });
 blink_target.animate(effects6,{
  duration:parameter_duration
 });
 scale_target.animate(effects7,{
  duration:parameter_duration
 });
 circle_target.animate(effects8,{
  duration:parameter_duration,
  direction:"alternate"
 });

 circle_target1.animate(effects9,{
  duration:parameter_duration2,
  direction:"alternate"
 });

 scale_target1.animate(effects10,{
  duration:parameter_duration2
 });
 blink_target1.animate(effects11,{
  duration:parameter_duration2
 });
 rotation_target1.animate(effects12,{
  duration:parameter_duration2
 });
 line_target1.animate(effects13,{
  duration:parameter_duration2
 });

 shake_target1.animate(effects14,{
 duration:parameter_duration2
 });
 rectangle_target1.animate(effects15,{
   duration:parameter_duration2
 });

 appear_target1.animate(effects16,{
   duration:parameter_duration3
 });
//text2
 circle_target2.animate(effects30,{
  duration:parameter_duration3,
  direction:"alternate"
 });

 scale_target2.animate(effects32,{
  duration:parameter_duration3
 });
 blink_target2.animate(effects33,{
  duration:parameter_duration3
 });
 rotation_target2.animate(effects34,{
  duration:parameter_duration3
 });
 line_target2.animate(effects35,{
  duration:parameter_duration3
 });

 shake_target2.animate(effects14,{
 duration:parameter_duration3
 });
 rectangle_target2.animate(effects31,{
   duration:parameter_duration3
 });
///opacity
/*opacity_target.animate(
  {offset:0, opacity: 1},
{offset:0.9756097560975611, opacity: 0}
,{
  duration:parameter_duration
});

opacity_target1.animate(
  {offset:0, opacity: 1},
{offset:0.9677419354838709, opacity: 0},
{offset:0.1, opacity: 0}
,{
  duration:parameter_duration2
});

 opacity_target2.animate(
   {offset:0, opacity: 1},
{offset:0.9523809523809523, opacity: 0}
 ,{
   duration:parameter_duration3
 });*/

});

}
///////////////////////////Binding/////////////////////////////////
//저장 용 - return 값으로 저장
function ffMotionBinding(duration, direction, repeat){
  var duration = duration;
  return {
    duration: duration
  };
}
function check_undefined(arr){
  var size = arr.length -1;
  if(typeof arr[size].offset == "undefined"){
    arr.pop();
  }
  return arr;
}

/////////////////////////모션별 offset 설정 함수/////////////////////////////////
var setOffset_Line = function(startOffset, endOffset, leftPx, topPx,motionArr,offset_gap,iteration){
  var empty_translate='translate(0px,0px)';
  motionArr.push({offset:startOffset, transform: empty_translate });
  console.log("sdfsdfdsfs "+ startOffset+" "+ endOffset);
  var line_translate = "translate("+leftPx+"px,"+topPx+"px)";
  var finishOffset= endOffset-offset_gap;
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset/iteration;
  for(var i=1;i<=iteration;i++){
    var line_start = startOffset+ offset_interval*i;
    var line_end = line_start - offset_gap;
    motionArr.push({offset:line_end,transform: line_translate});
    motionArr.push({offset:line_start, transform: empty_translate });
  }

    return motionArr;
};

var setOffset_Scale = function(startOffset, endOffset,motionArr,scaleX,scaleY,offset_gap,iteration){
  var empty_scale='scale(1,1)';
  var scale_transform ='scale('+scaleX+','+scaleY+')';
  var offsetGap = endOffset - startOffset;
  var offset_interval = offsetGap/iteration;

  motionArr.push({offset:startOffset, transform:empty_scale});
  for(var i =1;i<=iteration;i++){
    var scale_start = startOffset + offset_interval*i;
    var scale_end = scale_start - offset_gap;
    motionArr.push({offset:scale_end, transform:scale_transform});
    motionArr.push({offset:scale_start, transform:empty_scale});
  }

  return motionArr;
};

var setOffset_Rectangle = function(startOffset, endOffset,motionArr,leftArr,topArr,offset_gap,iteration){
  var empty_rectangle='translate(0px, 0px)';
  var offsetGap = endOffset - startOffset;
  var arrSize=leftArr.length;
  console.log("arrsize "+arrSize);
  //offset이 증가하는 크기
  var offset_interval = offsetGap/(arrSize*iteration);
  var rectangle_transform;
  var count=0;

  for(var i=0; i<iteration; i++){
    var rectangle_offset = startOffset+(count*offset_interval);
    var rectangle_start = rectangle_offset + offset_gap;
    rectangle_transform = 'translate('+leftArr[0]+'px,'+topArr[0]+'px)';
    motionArr.push({offset:rectangle_offset, transform: empty_rectangle});
    motionArr.push({offset:rectangle_start , transform:rectangle_transform});
    for(var j=1; j<arrSize; j++){
      count++;
      rectangle_transform = 'translate('+leftArr[j]+'px,'+topArr[j]+'px)';
      rectangle_offset = startOffset+(count*offset_interval);
      //console.log(leftArr[i]+ " "+topArr[i]);
      motionArr.push({offset:rectangle_offset , transform:rectangle_transform});
    }
    count++;
  }
  motionArr.push({offset:endOffset , transform:empty_rectangle});
//  console.log("whgwysd "+endOffset);
  return motionArr;
};

var setOffset_Circle = function(startOffset, endOffset,motionArr,leftArr,topArr,offset_gap,iteration){
  var empty_circle='translate(0px, 0px)';
  var offsetGap = endOffset - startOffset;
  var arrSize=leftArr.length;
  //console.log("arrsize "+arrSize);
  //offset이 증가하는 크기
  var offset_interval = offsetGap/(arrSize*iteration);
  var circle_transform;
  var count=0;
  for(var i=0;i<iteration;i++){
    var circle_offset = startOffset+(count*offset_interval);
    var circle_start = circle_offset+ offset_gap;
    circle_transform = 'translate('+leftArr[0]+'px,'+topArr[0]+'px)';
    if(i==0){
      motionArr.push({offset:circle_offset, transform: empty_circle});
      motionArr.push({offset:circle_start , transform:circle_transform});
    }
    else{
      motionArr.push({offset:circle_offset, transform: circle_transform});
    }
    for(var j=1;j<arrSize-1;j++){
      count++;
      circle_transform = 'translate('+leftArr[j]+'px,'+topArr[j]+'px)';
      circle_offset = startOffset+(count*offset_interval);
      motionArr.push({offset:circle_offset , transform:circle_transform});
    }
    count++;
    var circle_end = startOffset+(count*offset_interval) - offset_gap;
    circle_transform = 'translate('+leftArr[arrSize-1]+'px,'+topArr[arrSize-1]+'px)';
    motionArr.push({offset:circle_end , transform:circle_transform});
  }
  motionArr.push({offset:endOffset, transform: empty_circle});

  return motionArr;
};

var setOffset_Blink = function(startOffset, endOffset,motionArr,duration,opacity,num_per_second, iteration){
  //console.log("blink duration:"+duration+ " num "+num_per_second+" iter "+iteration);
  var blink_num=duration * num_per_second*2*iteration;
  var offsetGap = endOffset - startOffset;
  var offset_interval = offsetGap/blink_num;

  //중복 offset check
  motionArr.push({offset:startOffset, opacity:1});
  //onsole.log("blink_num"+blink_num);
  for(var i=1;i<=blink_num;i++){
    var blink_offset=startOffset+offset_interval*i;
    var evenOrodd = i%2;
    if(evenOrodd ==0){
      motionArr.push({offset:blink_offset, opacity:1});
    }
    else{
      motionArr.push({offset:blink_offset, opacity:opacity});
    }
  }

  return motionArr;
};
var setOffset_Appear = function(startOffset, endOffset,motionArr,fromTop,fromLeft,toTop,toLeft,opacityArr,offset_gap,iteration){
  var empty_appear='translate(0px, 0px)';
  var startGap= startOffset+offset_gap;
  var endGap= endOffset-offset_gap;
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset/iteration;
  var appear_transform = 'translate('+fromLeft+'px,'+fromTop+'px)';
  //init- 처음시작만 설정
  motionArr.push({offset:startOffset, transform: empty_appear, opacity:1});
  var appear_start= startOffset+offset_gap;
  motionArr.push({offset:appear_start , transform:appear_transform,opacity:opacityArr[0]});

  var appear_end;
  for(var i=1;i<=iteration;i++){
    var start_empty = startOffset+ offset_interval*i;
    appear_start= start_empty+offset_gap;
    appear_end = start_empty - offset_gap;
    //end-gap에 [1] 적용
    appear_transform = 'translate('+toLeft+'px,'+toTop+'px)';
    motionArr.push({offset:appear_end , transform:appear_transform,opacity:opacityArr[1]});
    //다음꺼에 empty - 시작부분임 -> 설명은 메모에서 사진첨부
    motionArr.push({offset:start_empty, transform: empty_appear, opacity:1});
    //다음 반복횟수 시작+gap 에 [0] 적용
    if(i!=iteration){
      appear_transform = 'translate('+fromLeft+'px,'+fromTop+'px)';
      motionArr.push({offset:appear_start , transform:appear_transform,opacity:opacityArr[0]});
    }
  }
  return motionArr;
};
var setOffset_Shake = function(startOffset, endOffset,shake_count,duration,motionArr,topArr,leftArr,offset_gap,iteration){
  var empty_shake='translate(0px, 0px)';
  var gapOffset= startOffset+offset_gap;
  var offsetGap = endOffset - startOffset;
  var shake_transform = 'translate('+leftArr[0]+'px,'+topArr[0]+'px)';
  var totalShakeNum = shake_count*2*duration*iteration;
  //console.log("totalshake"+totalShakeNum);
  var offset_interval = offsetGap/totalShakeNum;
  var index_count=1;

  motionArr.push({offset:startOffset, transform: empty_shake});
  motionArr.push({offset:gapOffset, transform: shake_transform});
  shake_transform = 'translate('+leftArr[1]+'px,'+topArr[1]+'px)';
  var offset_one=startOffset+offset_interval;
  motionArr.push({offset:offset_one, transform: shake_transform});

    //offset_interval이 offset_gap보다 작아질 때는 에러처리 해야함!
  for(var i=2; i<totalShakeNum; i++){
    var shake_offset = startOffset+(offset_interval*i);
    if(index_count==shake_count){
      index_count=0;
    }
    shake_transform = 'translate('+leftArr[index_count]+'px,'+topArr[index_count]+'px)';
    motionArr.push({offset:shake_offset, transform: shake_transform});
    index_count++;
    //console.log("shake "+shake_offset);
  }
  motionArr.push({offset:endOffset, transform: empty_shake});
//  console.log("motionArrshake"+motionArr.length);
  return motionArr;
};

var setOffset_Rotation = function(startOffset, endOffset,angle, motionArr,offset_gap,axis,iteration){
  var empty_rotate='rotate(0deg)';
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset/iteration;
  var rotate_transform = 'rotate('+angle+'deg)';
  //중복 offset check
  //시작시 -0으로 초기화하고 0.001초부터 시작
  console.log("rotation  "+startOffset);
  motionArr.push({offset:startOffset, transform: empty_rotate});
  for(var i =1;i<=iteration;i++){
    var rotate_start = startOffset+ offset_interval*i;
    var rotate_end = rotate_start - offset_gap;
    motionArr.push({offset:rotate_end , transform:rotate_transform,transformOrigin: axis});
    //console.log("rotation  "+rotate_end);
    motionArr.push({offset:rotate_start, transform: empty_rotate});
    //console.log("rotation  "+rotate_start);
  }
  //console.log("rotation  ");
  return motionArr;
}
/////////////////////////////////////////////모션 속성 관련/////////////////////////////////////////////
//다 start_time 추가해주기
var ffLine = function(target, options) {
   options = options || {};
   var defaults = {
      line_route : "ltor",
      length : 100
   };

   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }
   ////이동경로에 따른 direction 설정
    /////l->left, r-> right, u-> up, d-> down, diag-> 대각선 ex)diag_ur-> 위,오른쪽 대각선
   var line_direction;
   switch (options.line_route) {
     case "ltor":
       line_direction=360;
       break;
     case "rtol":
       line_direction=180;
       break;
     case "dtou":
       line_direction=270;
       break;
     case "utod":
       line_direction=90;
       break;
     case "diag_ur":
       line_direction=315;
       break;
     case "diag_ul":
       line_direction=225;
       break;
     case "diag_dr":
       line_direction=45;
       break;
     case "diag_dl":
       line_direction=135;
       break;

     default: line_direction=360;
   }
   if (line_direction > 360) {
      line_direction = line_direction % 360;
   }

   var toValueOfTop = (options.length * Math.sin((line_direction) * Math.PI / 180));
   var toValueOfLeft = (options.length * Math.cos((line_direction) * Math.PI / 180));

   return {
      target : target,
      name : 'Line',
      toTop : toValueOfTop,
      toLeft : toValueOfLeft
   };
};

var ffStaticRotation = function(target, options) {
   options = options || {};
   var defaults = {
      angle : 180,
      axis : "center",
      goback : true,
     clockwise: true
   };
   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }
   //var initAngle = getTransformValue(target);
   var rotation_origin;

   switch (options.axis) {
     case "center":
       rotation_origin="50% 50%";
       break;
     case "left":
        rotation_origin="0% 0%";
        break;
     case "right":
         rotation_origin="100% 100%";
         break;
   }

   return {
      target : target,
      name : 'Rotation',
      angle : options.angle,
      axis: rotation_origin,
     clockwise: options.clockwise,
      goback : options.goback
   };
};

var ffCircle = function(target, options) {// angle, radius, duration) {
  ////start와 end 각도가 같을때는 에디터에서 에러 화면///////
  ////0부터 360까지만 가능하도록 해야함 - 범위를 벗어나면 에디터에서 에러 화면//////
   options = options || {};
   var defaults = {
      radius : 3,
      direction: "clock",
      start_angle:0,
      end_angle:360
   };

   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }
   //end angle 설정
   ///circle_angle을 몇도씩 나눌것인지를 정해야함 !! circle_angle에서 그 값으로 나눠줘야함
   //radius_px: cm to px
   var radius_px=options.radius*96/2.54;

   //offset도 같이 설정해야함
   var circleArr_left = new Array();
   var circleArr_top = new Array();
   var start_angle=options.start_angle;
   var end_angle=options.end_angle;
   var circle_num=20;
   var gap_angle = Math.abs(end_angle-start_angle);
   var angle_interval = gap_angle/circle_num;
   //console.log("angle interval "+angle_interval);

   //시계방향일때
   if(options.direction=="clock"){
     var circleAngle = start_angle;
     if(start_angle>end_angle){
       end_angle+=360;
     }
     for(var i=0;i<=circle_num;i++){
       circleArr_left[i]=radius_px*Math.cos(toRadians(circleAngle));
       circleArr_top[i]=radius_px*Math.sin(toRadians(circleAngle));
       //console.log("circle "+circleArr_left[i]);
       circleAngle+=angle_interval;
     }
   }
   //반시계일때
   else if(options.direction=="anti"){
     circleAngle = end_angle;
     if(start_angle<end_angle){
       end_angle=-(360-end_angle);
     }
     for(var i=0;i<=circle_num;i++){
     circleArr_left[i]=radius_px*Math.cos(toRadians(circleAngle));
     circleArr_top[i]=radius_px*Math.sin(toRadians(circleAngle));
     circleAngle-=angle_interval;
    }
   }

   return {
      target : target,
      name : 'Circle',
      leftArr: circleArr_left,
      topArr: circleArr_top
   };
};

var ffRectangle = function(target, options) {// angle, radius, duration) {
   options = options || {};
   var defaults = {
      length : 3,
      direction: "clock",
      start_quadrant:1
   };

   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }
   var length_px=options.length*96/2.54;
   //console.log("length "+length_px);

   var rectangleArr_left = new Array();
   var rectangleArr_top = new Array();
   //한번에 정리 - 이전꺼랑 같은걸 유지하는 경우가 반복됨
   if(options.start_quadrant==1){
     rectangleArr_top[0]=0;
     rectangleArr_left[0]=0;
     if(options.direction == "clock"){
       rectangleArr_top[1]=length_px;
       rectangleArr_left[1]=0;
       rectangleArr_top[2]=length_px;
       rectangleArr_left[2]=-(length_px);
       rectangleArr_top[3]=0;
       rectangleArr_left[3]=-(length_px);
     }
     else if(options.direction == "anti"){
       rectangleArr_top[1]=0;
       rectangleArr_left[1]=-(length_px);
       rectangleArr_top[2]=length_px;
       rectangleArr_left[2]=-(length_px);
       rectangleArr_top[3]=length_px;
       rectangleArr_left[3]=0;
     }
   }
   else if(options.start_quadrant==2){
     if(options.direction == "clock"){
       rectangleArr_top[1]=0;
       rectangleArr_left[1]=length_px;
       rectangleArr_top[2]= length_px;
       rectangleArr_left[2]=length_px;
       rectangleArr_top[3]=length_px;
       rectangleArr_left[3]=0;
     }
     else if(options.direction == "anti"){
       rectangleArr_top[1]=length_px;
       rectangleArr_left[1]=0;
       rectangleArr_top[2]=length_px;
       rectangleArr_left[2]=length_px;
       rectangleArr_top[3]=0;
       rectangleArr_left[3]=length_px;
     }
   }
   else if(options.start_quadrant==3){
     if(options.direction == "clock"){
       rectangleArr_top[1]=-(length_px);
       rectangleArr_left[1]=0;
       rectangleArr_top[2]= -(length_px);
       rectangleArr_left[2]=length_px;
       rectangleArr_top[3]=0;
       rectangleArr_left[3]=length_px;
     }
     else if(options.direction == "anti"){
       rectangleArr_top[1]=0;
       rectangleArr_left[1]=length_px;
       rectangleArr_top[2]=-(length_px);
       rectangleArr_left[2]=length_px;
       rectangleArr_top[3]=-(length_px);
       rectangleArr_left[3]=0;
     }
   }
   else if(options.start_quadrant==4){
     if(options.direction == "clock"){
       rectangleArr_top[1]=0;
       rectangleArr_left[1]=-(length_px);
       rectangleArr_top[2]= -(length_px);
       rectangleArr_left[2]=-(length_px);
       rectangleArr_top[3]=-(length_px);
       rectangleArr_left[3]=0;
     }
     else if(options.direction == "anti"){
       rectangleArr_top[1]=-(length_px);
       rectangleArr_left[1]=0;
       rectangleArr_top[2]=-(length_px);
       rectangleArr_left[2]=-(length_px);
       rectangleArr_top[3]=0;
       rectangleArr_left[3]=-(length_px);
     }
   }

   return {
      target : target,
      name : 'Rectangle',
      leftArr: rectangleArr_left,
      topArr: rectangleArr_top
   };
 };
//px 받을 필요 없을듯
var ffStaticScale = function(target, options) {
   options = options || {};
   var defaults = {
      scaleX : 2.0,
      scaleY: 2.0,
      goback : true
   };
   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }

   return {
      target : target,
      name : 'Scale',
      scaleX : options.scaleX,
      scaleY : options.scaleY
   };
};

var ffStaticBlink = function(target, options) {
   options = options || {};
   var defaults = {
      opacity : 0,
      num_per_second:5,
      goback : true
   };
   for ( var prop in defaults) {
      options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
            : defaults[prop];
   }

   return {
      target : target,
      name : 'Blink',
      opacity : options.opacity,
      num_per_second: options.num_per_second
   };
};

var ffStaticShake = function(target, options){
  options = options || {};
  var defaults = {
     shake_count : 5,
     direction: "lr",
     goback : true
  };
  //direction은 lr(옆으로 움직임), ud(up down), all(양옆, 위아래)
  for ( var prop in defaults) {
     options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
           : defaults[prop];
  }
  var shakeArr_top = new Array();
  var shakeArr_left = new Array();
  //test하면서 몇 px 할지 정하
  //움직임을 글자크기에 따라 조정하던지 해야할듯하다 => 이후 수정사안!
  for(var i =0;i<options.shake_count*2; i+=2){
    //left right
    if(options.direction=="lr"){
      shakeArr_top[i]=0;
      shakeArr_left[i]=4;
      shakeArr_top[i+1]=0;
      shakeArr_left[i+1]=-4;
    }
    //up down
    else if(options.direction=="ud"){
      shakeArr_top[i]=7;
      shakeArr_left[i]=0;
      shakeArr_top[i+1]=-7;
      shakeArr_left[i+1]=0;
    }
    //lr+ud
    else if(options.direction=="all"){
      shakeArr_top[i]=7;
      shakeArr_left[i]=7;
      shakeArr_top[i+1]=-7;
      shakeArr_left[i+1]=-7;
    }
  }
  //console.log("shake motion"+shakeArr_top.length);
  //duration을 1000으로 나누면 1초의 offset을 구할 수 있음 -> shake_count에 따른 offset간격 정하기
  return {
     target : target,
     name : 'Shake',
     shake_count: options.shake_count,
     topArr: shakeArr_top,
     leftArr: shakeArr_left
  };
}
var ffAppearance = function(target, options){
  options = options || {};
  var defaults = {
     mode : "left",
     goback : true
  };
  for ( var prop in defaults) {
     options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
           : defaults[prop];
  }
  //나중에 속도조절 하고 싶으면 fromTop , toTop => 배열로 만들어서 3개의 offset으로 0, 0.5 1 opacity로 조정가능
  var fromTop;
  var fromLeft;
  var toTop;
  var toLeft;
  var appearOpacity = new Array();
  appearOpacity[0]=0;
  appearOpacity[1]=1;
  //test하면서 바꾸기
  if(options.mode=="left"){
    fromTop=0;
    toTop=0;
    fromLeft=-15;
    toLeft=15;
  }
  else if(options.mode=="right"){
    fromTop=0;
    toTop=0;
    fromLeft=15;
    toLeft=-15;
  }
  else if(options.mode=="bottom"){
    fromTop=15;
    toTop=-15;
    fromLeft=0;
    toLeft=0;
  }
  else if(options.mode=="top"){
    fromTop=-15;
    toTop=15;
    fromLeft=0;
    toLeft=0;
  }

  //duration을 1000으로 나누면 1초의 offset을 구할 수 있음 -> shake_count에 따른 offset간격 정하기
  return {
     target : target,
     name : 'Appearance',
     fromTop: fromTop,
     fromLeft:fromLeft,
     toTop: toTop,
     toLeft: toLeft,
     appearOpacity: appearOpacity,
     goback : options.goback
  };
}
/////////////////////////////////////////div생성 함수/////////////////////////////////////
function create_div(targetArr, contents){
  //console.log("tag num "+targetArr.length);

  var tagArr = new Array();
  for(var i =0;i<targetArr.length;i++){
    var originalTag=targetArr[i];
    var bindingTag = targetArr[i]+"Binding";
    var lineTag=targetArr[i]+"Line";
    var appearTag =targetArr[i]+"Appear";
    var opacityTag=targetArr[i]+"Opacity";
    var rotationTag =targetArr[i]+"Rotation";
    var scaleTag =targetArr[i]+"Scale";
    var shakeTag =targetArr[i]+"Shake";
    var blinkTag =targetArr[i]+"Blink";
    var circleTag =targetArr[i]+"Circle";
    var rectangleTag =targetArr[i]+"Rectangle";
    tagArr[i]={Original: originalTag,Binding: bindingTag, Opacity:opacityTag, Line:lineTag,Circle:circleTag,Rectangle:rectangleTag, Blink:blinkTag,Appear:appearTag, Rotation:rotationTag, Scale:scaleTag, Shake: shakeTag};

    var newDivHtml= "<div id ="+opacityTag+"><div id="+lineTag+"><div id="+circleTag+"><div id="+rectangleTag+"><div id="+blinkTag+"><div id="+shakeTag+"><div id="+appearTag+"><div id="+rotationTag+"><div id="+scaleTag+"><div id="+targetArr[i]+">"+contents[i]+"</div></div></div></div></div></div>";
    var div = document.createElement('div');
    div.id = tagArr[i].Binding;
    div.innerHTML = newDivHtml;
    document.body.appendChild(div);
  }
    return tagArr;
}

/////////////////////////////////////////실행 시간, offset 관련////////////////////////////////////////
var calculateOffset = function(len_target,relativeArr,total_time){
  //getData
  var  relativeStartTime = [];
  for (var i = 0; i < relativeArr.length; i++) {
    relativeStartTime.push([]);
    for(var j = 0; j < relativeArr[i].length; j++){
      //console.log("check_why"+ i+" "+relativeArr[i][j].time);
       relativeStartTime[i].push({
        motion_name: relativeArr[i][j].motion_name,
        target:relativeArr[i][j].target,
        duration: relativeArr[i][j].duration,
        time: relativeArr[i][j].time
      });
    }
  }
  var offset_length=0;
  var start_offset;
  var end_offset;
  var end_time;
  var offsetArray = [];

   for(var p1=0; p1<len_target; p1++){
      offset_length= relativeStartTime[p1].length;
      offsetArray.push([]);
      for(var p2=0; p2<offset_length; p2++){
        var motion_name = relativeStartTime[p1][p2].motion_name;
        var target_name = relativeStartTime[p1][p2].target;
        start_time= relativeStartTime[p1][p2].time;
        end_time= start_time+relativeStartTime[p1][p2].duration;
        start_offset=start_time/ total_time[p1];
        end_offset= end_time/total_time[p1];
        //console.log("Endtime"+end_time);
        if(p2==offset_length-1){
          offsetArray[p1].push({
            motion_name:motion_name, target:target_name,start_offset:start_offset, end_offset: 1
          });
          //console.log(offsetArray[p1][p2]);
        }
        else{
          offsetArray[p1].push({
            motion_name:motion_name, target:target_name,start_offset:start_offset, end_offset:end_offset
          });
        }
      }
   }

   return offsetArray;
};
/////////////////////////////////모션의 전체 실행시간 계산//////////////////////////////////////////
  var calculateRunTime = function(len_target, arguments){
    var targetArr = [];
    for (var i = 0; i < arguments.length; i++) {
      targetArr.push([]);
      for(var j = 0; j < arguments[i].length; j++){
        //console.log("argu "+i+ " "+arguments[i][j].func.name+ " "+arguments[i][j].delay+" "+arguments[i][j].start_time) ;
        targetArr[i].push({
          delay: arguments[i][j].delay,
          duration: arguments[i][j].duration,
          func: arguments[i][j].func,
          iteration: arguments[i][j].iteration,
          start_time: arguments[i][j].start_time
        });
      }
    }
    //console.log("test"+targetArr[0][0].delay);
    var start_arr = [];
    var duration_arr= [];
    //console.log("test"+targetArr[0][0].delay);
     //var total_motion=Array(Array(),Array());
     //전체 시간
     var total_time= new Array();
     var empty_time;
     var start_time;
     var count_motion=0;
     var first_delay=0;
     var relativeStartTime =[];
    for(var p1=0; p1<len_target; p1++){
      var start_count=0;
      count_motion=arguments[p1].length;
      duration_arr.push([]);
      start_arr.push([]);
      relativeStartTime.push([]);
      for(var p2=0; p2<count_motion; p2++){
        var motion_name="";
        duration_arr[p1].push(targetArr[p1][p2].duration);
        motion_name = targetArr[p1][p2].func.name;
        target_name = targetArr[p1][p2].func.target;
        if(p2==0){
          first_delay= targetArr[p1][0].start_time+targetArr[p1][0].delay;
          start_arr[p1].push(0);
          start_time=0;
          total_time[p1] = duration_arr[p1][p2]+start_arr[p1][p2];
          //motion_name='motion'+ p2;
          relativeStartTime[p1].push({
            motion_name:motion_name, target:target_name,time:start_time, duration:duration_arr[p1][p2]
          });
        }
        else{
          start_arr[p1].push(targetArr[p1][p2].start_time+ targetArr[p1][p2].delay - first_delay);
          start_time=start_arr[p1][p2];
          if(total_time<= start_arr[p1][p2]){
            empty_time= start_arr[p1][p2]-  total_time[p1];
            var empty_name='empty';
           //empty일때는 시작시간이 이전 모션실행시간의 끝=즉 (total시간-맨처음 모션 시작시간) 이 된다.
           var empty_startTime=total_time[p1];
            relativeStartTime[p1].push({
              motion_name:empty_name,target:target_name, time:total_time[p1], duration:empty_time
            });
            total_time[p1]= total_time[p1]+ empty_time+ duration_arr[p1][p2];
            relativeStartTime[p1].push( {
              motion_name:motion_name,target:target_name, time:start_time, duration:duration_arr[p1][p2]
            });
         }
          else{
            var end_time= start_arr[p1][p2]+ duration_arr[p1][p2];
            relativeStartTime[p1].push({
              motion_name:motion_name,target:target_name,time:start_time, duration:duration_arr[p1][p2]
            });
            if(total_time[p1] <end_time){
              total_time[p1]= end_time;
            }
            else ;
         }
       }
         //console.log("test"+relativeStartTime[p1][p2].motion_name);
      }
      //처음 시작시간은 delay로 결정할 수 있음
     // total_time[p1]=total_time[p1]-(eval('NewArray'+p1+'[0]').start_time+ eval('NewArray'+p1+'[0]').delay);
    }
    console.log("total_time"+total_time);
    return {
      first_delay:first_delay,
      relativeStartTime: relativeStartTime,
      total_time: total_time
    };

  };
  /////////////////////////////////////////////텍스트 생성 관련/////////////////////////////////////////////
  function ffcreateText (contents, textType){
    var textArray = new Array();
     if (textType == "word") {
        textArray=contents.split(" ")
     } else if (textType == "char") {
        textArray=contents.split("")
        while(true){
           var search = textArray.indexOf(" ");
           if(search!=-1){
              textArray.splice(search,1);
           }else{
              break;
           }
        console.log("gere"+textArray[0]+textArray[1]+textArray[2]);
        }
     } else if (textType == "line") {
        textArray=[contents];
     }
     console.log("textArray "+textArray.length);
     return textArray;
  }

  /////////////////////////////////////////////폰트 속성 관련/////////////////////////////////////////////
  function ffSetFontAttr(target, options) {
     options = options || {};
     var defaults = {
       fontFamily: "맑은 고딕",
        fontSize : 60,
        fontOpacity : 1,
        fontRotation : 0,
       fontStyle: "normal",
       fontWeight: "normal"
     };
     for ( var prop in defaults) {
        options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
              : defaults[prop];
     }

     target.style.color = options.fontColor;
     target.style.fontSize = options.fontSize + 'px';
     target.style.opacity = options.fontOpacity;
     target.style.fontFamily = options.fontFamily;
     target.style.fontStyle = options.fontStyle;
     target.style.fontWeight = options.fontWeight;
     target.style.textShadow = "-" + options.fontOutlineWidth + "px " + "0 " + options.textSpreadWidth + "px " + options.fontOutlineColor + ", " + "0 " + options.fontOutlineWidth + "px " + options.textSpreadWidth + "px " + options.fontOutlineColor + ", " + options.fontOutlineWidth + "px " + "0 " + options.textSpreadWidth + "px " + options.fontOutlineColor + ", " + "0 " + "-" + options.fontOutlineWidth + "px " + options.textSpreadWidth + "px " + options.fontOutlineColor;
  };

  /////////////////////////////////////////////텍스트 속성 관련/////////////////////////////////////////////
  function ffSetTextAttr(target, options) {
     options = options || {};
     var defaults = {
        initX : 0,
        initY : 0,
       textDecoration: "none",
       letterSpacing: 0,
       wordSpacing : 5,
       lineHeight: 10,
       textAlign: "center"
     };
     for ( var prop in defaults) {
        options[prop] = typeof options[prop] !== 'undefined' ? options[prop]
              : defaults[prop];
     }

     target.style.display = 'inline-block';
     target.style.top = options.initY + "px";
     target.style.left = options.initX + 'px';
     target.style.textDecoration = options.textDecoration;
     target.style.textShadow = options.textShadowWidth + "px " + options.textShadowWidth + "px " + options.textShadowColor;
     target.style.letterSpacing = options.letterSpacing + "px";
     target.style.wordSpacing = options.wordSpacing + "px";
     target.style.lineHeight = options.lineHeight + "px";
     target.style.textAlign = options.textAlign;
  };

 /////////////////////////////////// 모션 데이터 배열 리턴///////////////////////////////////
 var getMotionData = function(arguments){
   var result = [];
   for (var i = 0; i < arguments.length; i++) {
     result[i] = {
       delay: arguments[i].delay,
       duration: arguments[i].duration,
       func: arguments[i].func,
       iteration:arguments[i].iteration,
       start_time: arguments[i].start_time
     };
   }
   return result;
 };

 function getPos(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)){
       _x += el.offsetLeft - el.scrollLeft;
       _y += el.offsetTop - el.scrollTop;
       el = el.offsetParent;
    }
    return {
       top : _y,
       left : _x
    };
 }

 /////////////////////////////////////////저장 포맷으로 보내기////////////////////////////////////////
 var sendFormat = function(arg){
;
 }
 ////////////////////////////////////////opacity 설정 함수////////////////////////////////////////
 var opacityArray = new Array();
 function setOpacity(opacityTime, opacityValue){
   opacityArray.push({time:opacityTime, opacity: opacityValue});
   console.log(opacityArray[0]);

 }
 ///////////////////////////////////////텍스트 바인딩////////////////////////////////////
 function ffTextBinding(upper, lower){
   var upper_limit= upper;
   var lower_limit= lower;

   return {
     upper_limit: upper_limit,
     lower_limit : lower_limit
   };
 }

function toRadians(degree){
  return degree*(Math.PI/180);
}

//px를 제거하기 위해서 getpos사용
function removePx(value){
  var resultValue;
  resultValue= value.replace("px","");

  return resultValue;
}

/////////////////
var uniq = function(ary) {
   var prim = {
      "boolean" : {},
      "number" : {},
      "string" : {}
   }, obj = [];

   return ary.filter(function(x) {
      var t = typeof x;
      return (t in prim) ? !prim[t][x] && (prim[t][x] = 1)
            : obj.indexOf(x) < 0 && obj.push(x);
   });
};
var sort_offset = function(ary) {
  ary.sort(function(a, b) { // 오름차순
    return a.offset < b.offset ? -1 : a.offset> b.offset ? 1 : 0;
  });
  return ary;
};
