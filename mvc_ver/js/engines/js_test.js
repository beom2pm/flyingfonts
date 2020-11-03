//특정 offset에 transform이 필요없을때 사용 -> partial keyframes를 제공하지 않기 때문에 생성
var emtpy_transform = "translate(0px,0px)";
var motionNum0;
var targetss;

function js_to_css() {
  //target만드는거 new array 만드는것처럼 하면 될듯
  setOpacity(1, 2000);
  targetss = document.getElementById('txt1');
  var keyframeEffects = [];

  var motion1 = 'rotate(360deg)';
  var motion2 = 'rotate(-360deg)';
  var motion3 = 'translate(-1px, -1px)';
  //  var motion4="translate(1px, 1px)";
  motion2 = motion2 + 'scale(2.0,2.0)';

  //offset에 따라 애니메이션 설정-해당 offset이 있으면 거기에 애니메이션 추

  //alert(typeof(target));

  var mot1 = ffLine("txt0", { //텍스트 모션 설정
    line_route: "ltor",
    length: 150
  });
  var mot2 = ffStaticRotation("txt0", {
    angle: 360,
    axis: "left"
  });
  var mot3 = ffStaticShake("txt0", {
    shake_count: 3,
    direction: "lr"
  });
  var mot4 = ffAppearance("txt0", {
    mode: "top"
  });
  var mot5 = ffStaticBlink("txt0", {
    opacity: 0,
    num_per_second: 2
  });
  var mot6 = ffCircle("txt0", {
    radius: 3,
    direction: "clock",
    start_angle: 360,
    end_angle: 20
  });
  var mot7 = ffRectangle("txt0", {
    length: 5,
    direction: "clock",
    start_quadrant: 2
  });
  var mot8 = ffStaticScale("txt0", {
    scaleX: 2.0,
    scaleY: 2.0
  });

  ffMotion( //텍스트 모션 적용
    {
      func: mot1,
      delay: 1,
      duration: 3,
      iteration: 2,
      start_time: 0
    }, {
      func: mot8,
      delay: 5,
      duration: 2,
      iteration: 3,
      start_time: 1
    }
    /*{func : mot3, delay : 2, duration : 3,start_time: 2},
    {func : mot4, delay : 2, duration : 2,start_time: 3}*/
  );

  ffTextBinding({
    upper: 8,
    lower: 1
  });
  /*ffMotionBinding(
    {}
  );*/

}
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
  var len_target = getTarget.length;
  var len_motion = motion_data_arr.length;
  var targetArr = new Array();
  for (var p1 = 0; p1 < len_target; p1++) {
    var pk = 0;
    //같은 target을 기준으로 delay, duration, func(motion)이 들어감->모션갯수만큼
    var tempArr = new Array();
    for (var p2 = 0; p2 < len_motion; p2++) {
      if (getTarget[p1] == motion_data_arr[p2].func.target) {
        tempArr.push(motion_data_arr[p2]);
        // console.log("motion name "+motion_data_arr[p2].func.name);
      }
    }
    targetArr[p1] = tempArr;
  }
  ////////////////////////////////텍스트 객체 생성 및 div 생성////////////////////////////////////
  var contentArr = new Array();
  contentArr[0] = "키네틱 타이포그래피"
  var tag_arr = new Array();
  tag_arr = create_div(getTarget, contentArr);
  //console.log(tag_arr[0].Line);
  //test는 motionTag_test.js에서
  ////////////////////////////////실행시간 계산 관련//////////////////////////////
  var relativeStartTime = Array(Array(), Array());
  //같은 객체에 적용된 모션들의 실행시간/시작시간 등을 계산해 저장한다.
  relativeStartTime = calculateRunTime(len_target, targetArr).relativeStartTime;

  var total_time = calculateRunTime(len_target, targetArr).total_time;
  var offset_per_second = new Array();
  for (var i = 0; i < total_time.length; i++) {
    offset_per_second[i] = total_time[i] / 10000;
    //  console.log("초당 offset "+offset_per_second[i]);
  }

  //시작 delay는 offset에 포함 안시키려고 일부러 빼고함
  var first_delay = calculateRunTime(len_target, targetArr).first_delay;
  ///////////////////////////////////offset구하기//////////////////////////////////
  var offsetArray = Array(Array(), Array());
  offsetArray = calculateOffset(len_target, relativeStartTime, total_time);
  // console.log("offsetArray"+offsetArray[0][1].start_offset);
  var totalMotion = Array(Array(), Array());


  //offset이 같을때는 어떻게 해줄지
  var motionOffset;
  var startOffset;
  var endOffset;
  var motion_count = 0;
  var txtMotionArr = Array(Array(), Array());
  var lineMotionArr = Array(Array(), Array());
  var rotationMotionArr = Array(Array(), Array());
  var shakeMotionArr = Array(Array(), Array());
  var appearMotionArr = Array(Array(), Array());
  var blinkMotionArr = Array(Array(), Array());
  var circleMotionArr = Array(Array(), Array());
  var rectangleMotionArr = Array(Array(), Array());
  var scaleMotionArr = Array(Array(), Array());
  //console.log("offsetArray size "+offsetArray[0].length);
  for (var i = 0; i < offsetArray.length; i++) {
    motion_count = 0;
    for (var j = 0; j < offsetArray[i].length; j++) {
      startOffset = offsetArray[i][j].start_offset;
      endOffset = offsetArray[i][j].end_offset;
      var motionName = offsetArray[i][j].motion_name;
      var targetName = offsetArray[i][j].target;
      var iteration = targetArr[i][motion_count].iteration;
      //console.log("iter"+iteration);
      //var duration=targetArr[i][motion_count].duration;
      if (motionName == "Line") {
        var left_px = targetArr[i][motion_count].func.toLeft;
        var top_px = targetArr[i][motion_count].func.toTop;
        lineMotionArr[i] = setOffset_Line(startOffset, endOffset, left_px, top_px, lineMotionArr[i], offset_per_second[i], iteration);
        motion_count++;
      }
      //offset만드는건 따로 함수로 빼기
      else if (motionName == "Rotation") {
        var angle = targetArr[i][motion_count].func.angle;
        var rotate_axis = targetArr[i][motion_count].func.axis;
        rotationMotionArr[i] = setOffset_Rotation(startOffset, endOffset, angle, rotationMotionArr[i], offset_per_second[i], rotate_axis, iteration);
        motion_count++;
      } else if (motionName == "Shake") {
        var topArr_shake = targetArr[i][motion_count].func.topArr;
        var leftArr_shake = targetArr[i][motion_count].func.leftArr;
        var shake_duration = targetArr[i][motion_count].duration;
        var shake_count = targetArr[i][motion_count].func.shake_count;
        //console.log("start "+j+" "+startOffset);
        shakeMotionArr[i] = setOffset_Shake(startOffset, endOffset, shake_count, shake_duration, shakeMotionArr[i], topArr_shake, leftArr_shake, offset_per_second[i], iteration);
        motion_count++;
      } else if (motionName == "Appearance") {
        var appear_fromTop = targetArr[i][motion_count].func.fromTop;
        var appear_fromLeft = targetArr[i][motion_count].func.fromLeft;
        var appear_toTop = targetArr[i][motion_count].func.toTop;
        var appear_toLeft = targetArr[i][motion_count].func.toLeft;
        var appearOpacity = targetArr[i][motion_count].func.appearOpacity;
        appearMotionArr[i] = setOffset_Appear(startOffset, endOffset, appearMotionArr[i], appear_fromTop, appear_fromLeft, appear_toTop, appear_toLeft, appearOpacity, offset_per_second[i], iteration);
        motion_count++;
      } else if (motionName == "Blink") {
        var blink_opacity = targetArr[i][motion_count].func.opacity;
        var blink_duration = targetArr[i][motion_count].duration;
        var num_per_second = targetArr[i][motion_count].func.num_per_second;
        blinkMotionArr[i] = setOffset_Blink(startOffset, endOffset, blinkMotionArr[i], blink_duration, blink_opacity, num_per_second, iteration);
        motion_count++;
      } else if (motionName == "Circle") {
        var circle_leftArr = targetArr[i][motion_count].func.leftArr;
        var circle_topArr = targetArr[i][motion_count].func.topArr;
        circleMotionArr[i] = setOffset_Circle(startOffset, endOffset, circleMotionArr[i], circle_leftArr, circle_topArr, offset_per_second[i], iteration);
        motion_count++;
      } else if (motionName == "Rectangle") {
        var rectangle_leftArr = targetArr[i][motion_count].func.leftArr;
        var rectangle_topArr = targetArr[i][motion_count].func.topArr;
        rectangleMotionArr[i] = setOffset_Rectangle(startOffset, endOffset, rectangleMotionArr[i], rectangle_leftArr, rectangle_topArr, offset_per_second[i], iteration);
        motion_count++;
      } else if (motionName == "Scale") {
        var scaleX = targetArr[i][motion_count].func.scaleX;
        var scaleY = targetArr[i][motion_count].func.scaleY;
        scaleMotionArr[i] = setOffset_Scale(startOffset, endOffset, scaleMotionArr[i], scaleX, scaleY, offset_per_second[i], iteration);
        motion_count++;
      }
    }
  }

  var lineTag = tag_arr[0].Line;
  var line_target = document.getElementById(lineTag);
  var parameter_duration = total_time * 1000;
  //console.log("total seconds"+parameter_duration);
  var effects = new Array();
  for (var i = 0; i < lineMotionArr[0].length; i++) {
    effects.push(lineMotionArr[0][i]);
    //console.log(rectangleMotionArr[0][i]);
  }

  var effects2 = new Array();
  //console.log("SHAKE"+shakeMotionArr[0].length);
  for (var i = 0; i < scaleMotionArr[0].length; i++) {
    effects2.push(scaleMotionArr[0][i]);
    console.log(scaleMotionArr[0][i].offset);
  }
  var scaleTag = tag_arr[0].Scale;
  var scale_target = document.getElementById(scaleTag);


  line_target.animate(effects, {
    duration: parameter_duration
  });

  scale_target.animate(effects2, {
    duration: parameter_duration
  });

  //blink_target.animate(effects2,2000);
  /*
  //모션 테스트 - motionRuntTest.js
   //button click motion
    var btn = document.getElementById('player');
  btn.addEventListener('click', function(e) {
    line_target.animate(effects,{
     duration:parameter_duration
    });

    scale_target.animate(effects2,{
     duration:parameter_duration
    });
  });
  */

}
///////////////////////////Binding/////////////////////////////////

/////////////////////////모션별 offset 설정 함수/////////////////////////////////
var setOffset_Line = function(startOffset, endOffset, leftPx, topPx, motionArr, offset_gap, iteration) {
  var empty_translate = 'translate(0px,0px)';
  motionArr.push({
    offset: startOffset,
    transform: empty_translate
  });
  var line_translate = "translate(" + leftPx + "px," + topPx + "px)";
  var finishOffset = endOffset - offset_gap;
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset / iteration;
  for (var i = 1; i <= iteration; i++) {
    var line_start = startOffset + offset_interval * i;
    var line_end = line_start - offset_gap;
    motionArr.push({
      offset: line_end,
      transform: line_translate
    });
    motionArr.push({
      offset: line_start,
      transform: empty_translate
    });
  }

  return motionArr;
};

var setOffset_Scale = function(startOffset, endOffset, motionArr, scaleX, scaleY, offset_gap, iteration) {
  var empty_scale = 'scale(1,1)';
  var scale_transform = 'scale(' + scaleX + ',' + scaleY + ')';
  var offsetGap = endOffset - startOffset;
  var offset_interval = offsetGap / iteration;

  motionArr.push({
    offset: startOffset,
    transform: empty_scale
  });
  for (var i = 1; i <= iteration; i++) {
    var scale_start = startOffset + offset_interval * i;
    var scale_end = scale_start - offset_gap;
    motionArr.push({
      offset: scale_end,
      transform: scale_transform
    });
    motionArr.push({
      offset: scale_start,
      transform: empty_scale
    });
  }
  return motionArr;
};

var setOffset_Rectangle = function(startOffset, endOffset, motionArr, leftArr, topArr, offset_gap, iteration) {
  var empty_rectangle = 'translate(0px, 0px)';
  var offsetGap = endOffset - startOffset;
  var arrSize = leftArr.length;
  //console.log("arrsize "+arrSize);
  //offset이 증가하는 크기
  var offset_interval = offsetGap / (arrSize * iteration);
  var rectangle_transform;
  var count = 0;

  for (var i = 0; i < iteration; i++) {
    var rectangle_offset = startOffset + (count * offset_interval);
    var rectangle_start = rectangle_offset + offset_gap;
    rectangle_transform = 'translate(' + leftArr[0] + 'px,' + topArr[0] + 'px)';
    motionArr.push({
      offset: rectangle_offset,
      transform: empty_rectangle
    });
    motionArr.push({
      offset: rectangle_start,
      transform: rectangle_transform
    });
    for (var j = 1; j < arrSize; j++) {
      count++;
      rectangle_transform = 'translate(' + leftArr[j] + 'px,' + topArr[j] + 'px)';
      rectangle_offset = startOffset + (count * offset_interval);
      //console.log(leftArr[i]+ " "+topArr[i]);
      motionArr.push({
        offset: rectangle_offset,
        transform: rectangle_transform
      });
    }
    count++;
  }
  motionArr.push({
    offset: endOffset,
    transform: empty_rectangle
  });
  return motionArr;
};

var setOffset_Circle = function(startOffset, endOffset, motionArr, leftArr, topArr, offset_gap, iteration) {
  var empty_circle = 'translate(0px, 0px)';
  var offsetGap = endOffset - startOffset;
  var arrSize = leftArr.length;
  //console.log("arrsize "+arrSize);
  //offset이 증가하는 크기
  var offset_interval = offsetGap / (arrSize * iteration);
  var circle_transform;
  var count = 0;
  for (var i = 0; i < iteration; i++) {
    var circle_offset = startOffset + (count * offset_interval);
    var circle_start = circle_offset + offset_gap;
    circle_transform = 'translate(' + leftArr[0] + 'px,' + topArr[0] + 'px)';
    if (i == 0) {
      motionArr.push({
        offset: circle_offset,
        transform: empty_circle
      });
      motionArr.push({
        offset: circle_start,
        transform: circle_transform
      });
    } else {
      motionArr.push({
        offset: circle_offset,
        transform: circle_transform
      });
    }
    for (var j = 1; j < arrSize - 1; j++) {
      count++;
      circle_transform = 'translate(' + leftArr[j] + 'px,' + topArr[j] + 'px)';
      circle_offset = startOffset + (count * offset_interval);
      motionArr.push({
        offset: circle_offset,
        transform: circle_transform
      });
    }
    count++;
    var circle_end = startOffset + (count * offset_interval) - offset_gap;
    circle_transform = 'translate(' + leftArr[arrSize - 1] + 'px,' + topArr[arrSize - 1] + 'px)';
    motionArr.push({
      offset: circle_end,
      transform: circle_transform
    });
  }
  motionArr.push({
    offset: endOffset,
    transform: empty_circle
  });

  return motionArr;
};

var setOffset_Blink = function(startOffset, endOffset, motionArr, duration, opacity, num_per_second, iteration) {

  var blink_num = duration * num_per_second * 2 * iteration;
  var offsetGap = endOffset - startOffset;
  var offset_interval = offsetGap / blink_num;

  //중복 offset check
  motionArr.push({
    offset: startOffset,
    opacity: 1
  });
  console.log("blink_num" + blink_num);
  for (var i = 1; i <= blink_num; i++) {
    var blink_offset = startOffset + offset_interval * i;
    var evenOrodd = i % 2;
    if (evenOrodd == 0) {
      motionArr.push({
        offset: blink_offset,
        opacity: 1
      });
    } else {
      motionArr.push({
        offset: blink_offset,
        opacity: opacity
      });
    }
  }

  return motionArr;
};
var setOffset_Appear = function(startOffset, endOffset, motionArr, fromTop, fromLeft, toTop, toLeft, opacityArr, offset_gap, iteration) {
  var empty_appear = 'translate(0px, 0px)';
  var startGap = startOffset + offset_gap;
  var endGap = endOffset - offset_gap;
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset / iteration;
  var appear_transform = 'translate(' + fromLeft + 'px,' + fromTop + 'px)';
  //init- 처음시작만 설정
  motionArr.push({
    offset: startOffset,
    transform: empty_appear,
    opacity: 1
  });
  var appear_start = startOffset + offset_gap;
  motionArr.push({
    offset: appear_start,
    transform: appear_transform,
    opacity: opacityArr[0]
  });

  var appear_end;
  for (var i = 1; i <= iteration; i++) {
    var start_empty = startOffset + offset_interval * i;
    appear_start = start_empty + offset_gap;
    appear_end = start_empty - offset_gap;
    //end-gap에 [1] 적용
    appear_transform = 'translate(' + toLeft + 'px,' + toTop + 'px)';
    motionArr.push({
      offset: appear_end,
      transform: appear_transform,
      opacity: opacityArr[1]
    });
    //다음꺼에 empty - 시작부분임 -> 설명은 메모에서 사진첨부
    motionArr.push({
      offset: start_empty,
      transform: empty_appear,
      opacity: 1
    });
    //다음 반복횟수 시작+gap 에 [0] 적용
    if (i != iteration) {
      appear_transform = 'translate(' + fromLeft + 'px,' + fromTop + 'px)';
      motionArr.push({
        offset: appear_start,
        transform: appear_transform,
        opacity: opacityArr[0]
      });
    }
  }
  return motionArr;
};
var setOffset_Shake = function(startOffset, endOffset, shake_count, duration, motionArr, topArr, leftArr, offset_gap, iteration) {
  var empty_shake = 'translate(0px, 0px)';
  var gapOffset = startOffset + offset_gap;
  var offsetGap = endOffset - startOffset;
  var shake_transform = 'translate(' + leftArr[0] + 'px,' + topArr[0] + 'px)';
  var totalShakeNum = shake_count * 2 * duration * iteration;
  console.log("totalshake" + totalShakeNum);
  var offset_interval = offsetGap / totalShakeNum;
  var index_count = 1;

  motionArr.push({
    offset: startOffset,
    transform: empty_shake
  });
  motionArr.push({
    offset: gapOffset,
    transform: shake_transform
  });
  shake_transform = 'translate(' + leftArr[1] + 'px,' + topArr[1] + 'px)';
  var offset_one = startOffset + offset_interval;
  motionArr.push({
    offset: offset_one,
    transform: shake_transform
  });

  //offset_interval이 offset_gap보다 작아질 때는 에러처리 해야함!
  for (var i = 2; i < totalShakeNum; i++) {
    var shake_offset = startOffset + (offset_interval * i);
    if (index_count == shake_count) {
      index_count = 0;
    }
    shake_transform = 'translate(' + leftArr[index_count] + 'px,' + topArr[index_count] + 'px)';
    motionArr.push({
      offset: shake_offset,
      transform: shake_transform
    });
    index_count++;
    //console.log("shake "+shake_offset);
  }
  motionArr.push({
    offset: endOffset,
    transform: empty_shake
  });
  //  console.log("motionArrshake"+motionArr.length);
  return motionArr;
};

var setOffset_Rotation = function(startOffset, endOffset, angle, motionArr, offset_gap, axis, iteration) {
  var empty_rotate = 'rotate(0deg)';
  var gapOffset = endOffset - startOffset;
  var offset_interval = gapOffset / iteration;
  var rotate_transform = 'rotate(' + angle + 'deg)';
  //중복 offset check
  //시작시 -0으로 초기화하고 0.001초부터 시작
  motionArr.push({
    offset: startOffset,
    transform: empty_rotate
  });
  for (var i = 1; i <= iteration; i++) {
    var rotate_start = startOffset + offset_interval * i;
    var rotate_end = rotate_start - offset_gap;
    motionArr.push({
      offset: rotate_end,
      transform: rotate_transform,
      transformOrigin: axis
    });
    motionArr.push({
      offset: rotate_start,
      transform: empty_rotate
    });
  }
  return motionArr;
}
/////////////////////////////////////////////모션 속성 관련/////////////////////////////////////////////
//다 start_time 추가해주기
var ffLine = function(target, options) {
  options = options || {};
  var defaults = {
    line_route: "ltor",
    length: 100
  };

  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  ////이동경로에 따른 direction 설정
  /////l->left, r-> right, u-> up, d-> down, diag-> 대각선 ex)diag_ur-> 위,오른쪽 대각선
  var line_direction;
  switch (options.line_route) {
    case "ltor":
      line_direction = 360;
      break;
    case "rtol":
      line_direction = 180;
      break;
    case "dtou":
      line_direction = 270;
      break;
    case "utod":
      line_direction = 90;
      break;
    case "diag_ur":
      line_direction = 315;
      break;
    case "diag_ul":
      line_direction = 225;
      break;
    case "diag_dr":
      line_direction = 45;
      break;
    case "diag_dl":
      line_direction = 135;
      breal;

    default:
      line_direction = 360;
  }
  if (line_direction > 360) {
    line_direction = line_direction % 360;
  }

  var toValueOfTop = (options.length * Math.sin((line_direction) * Math.PI / 180));
  var toValueOfLeft = (options.length * Math.cos((line_direction) * Math.PI / 180));

  return {
    target: target,
    name: 'Line',
    toTop: toValueOfTop,
    toLeft: toValueOfLeft
  };
};

var ffStaticRotation = function(target, options) {
  options = options || {};
  var defaults = {
    angle: 180,
    axis: "center",
    goback: true,
    clockwise: true
  };
  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  //var initAngle = getTransformValue(target);
  var rotation_origin;

  switch (options.axis) {
    case "center":
      rotation_origin = "50% 50%";
      break;
    case "left":
      rotation_origin = "0% 0%";
      break;
    case "left":
      rotation_origin = "100% 100%";
      break;
  }

  return {
    target: target,
    name: 'Rotation',
    angle: options.angle,
    axis: rotation_origin,
    clockwise: options.clockwise,
    goback: options.goback
  };
};

var ffCircle = function(target, options) { // angle, radius, duration) {
  ////start와 end 각도가 같을때는 에디터에서 에러 화면///////
  ////0부터 360까지만 가능하도록 해야함 - 범위를 벗어나면 에디터에서 에러 화면//////
  options = options || {};
  var defaults = {
    radius: 3,
    direction: "clock",
    start_angle: 0,
    end_angle: 360
  };

  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  //end angle 설정
  ///circle_angle을 몇도씩 나눌것인지를 정해야함 !! circle_angle에서 그 값으로 나눠줘야함
  //radius_px: cm to px
  var radius_px = options.radius * 96 / 2.54;

  //offset도 같이 설정해야함
  var circleArr_left = new Array();
  var circleArr_top = new Array();
  var start_angle = options.start_angle;
  var end_angle = options.end_angle;
  var circle_num = 20;
  var gap_angle = Math.abs(end_angle - start_angle);
  var angle_interval = gap_angle / circle_num;
  console.log("angle interval " + angle_interval);

  //시계방향일때
  if (options.direction == "clock") {
    var circleAngle = start_angle;
    if (start_angle > end_angle) {
      end_angle += 360;
    }
    for (var i = 0; i <= circle_num; i++) {
      circleArr_left[i] = radius_px * Math.cos(toRadians(circleAngle));
      circleArr_top[i] = radius_px * Math.sin(toRadians(circleAngle));
      //console.log("circle "+circleArr_left[i]);
      circleAngle += angle_interval;
    }
  }
  //반시계일때
  else if (options.direction == "anti") {
    circleAngle = end_angle;
    if (start_angle < end_angle) {
      end_angle = -(360 - end_angle);
    }
    for (var i = 0; i <= circle_num; i++) {
      circleArr_left[i] = radius_px * Math.cos(toRadians(circleAngle));
      circleArr_top[i] = radius_px * Math.sin(toRadians(circleAngle));
      circleAngle -= angle_interval;
    }
  }

  return {
    target: target,
    name: 'Circle',
    leftArr: circleArr_left,
    topArr: circleArr_top
  };
};

var ffRectangle = function(target, options) { // angle, radius, duration) {
  options = options || {};
  var defaults = {
    length: 3,
    direction: "clock",
    start_quadrant: 1
  };

  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  var length_px = options.length * 96 / 2.54;
  console.log("length " + length_px);

  var rectangleArr_left = new Array();
  var rectangleArr_top = new Array();
  //한번에 정리 - 이전꺼랑 같은걸 유지하는 경우가 반복됨
  if (options.start_quadrant == 1) {
    rectangleArr_top[0] = 0;
    rectangleArr_left[0] = 0;
    if (options.direction == "clock") {
      rectangleArr_top[1] = length_px;
      rectangleArr_left[1] = 0;
      rectangleArr_top[2] = length_px;
      rectangleArr_left[2] = -(length_px);
      rectangleArr_top[3] = 0;
      rectangleArr_left[3] = -(length_px);
    } else if (options.direction == "anti") {
      rectangleArr_top[1] = 0;
      rectangleArr_left[1] = -(length_px);
      rectangleArr_top[2] = length_px;
      rectangleArr_left[2] = -(length_px);
      rectangleArr_top[3] = length_px;
      rectangleArr_left[3] = 0;
    }
  } else if (options.start_quadrant == 2) {
    if (options.direction == "clock") {
      rectangleArr_top[1] = 0;
      rectangleArr_left[1] = length_px;
      rectangleArr_top[2] = length_px;
      rectangleArr_left[2] = length_px;
      rectangleArr_top[3] = length_px;
      rectangleArr_left[3] = 0;
    } else if (options.direction == "anti") {
      rectangleArr_top[1] = length_px;
      rectangleArr_left[1] = 0;
      rectangleArr_top[2] = length_px;
      rectangleArr_left[2] = length_px;
      rectangleArr_top[3] = 0;
      rectangleArr_left[3] = length_px;
    }
  } else if (options.start_quadrant == 3) {
    if (options.direction == "clock") {
      rectangleArr_top[1] = -(length_px);
      rectangleArr_left[1] = 0;
      rectangleArr_top[2] = -(length_px);
      rectangleArr_left[2] = length_px;
      rectangleArr_top[3] = 0;
      rectangleArr_left[3] = length_px;
    } else if (options.direction == "anti") {
      rectangleArr_top[1] = 0;
      rectangleArr_left[1] = length_px;
      rectangleArr_top[2] = -(length_px);
      rectangleArr_left[2] = length_px;
      rectangleArr_top[3] = -(length_px);
      rectangleArr_left[3] = 0;
    }
  } else if (options.start_quadrant == 4) {
    if (options.direction == "clock") {
      rectangleArr_top[1] = 0;
      rectangleArr_left[1] = -(length_px);
      rectangleArr_top[2] = -(length_px);
      rectangleArr_left[2] = -(length_px);
      rectangleArr_top[3] = -(length_px);
      rectangleArr_left[3] = 0;
    } else if (options.direction == "anti") {
      rectangleArr_top[1] = -(length_px);
      rectangleArr_left[1] = 0;
      rectangleArr_top[2] = -(length_px);
      rectangleArr_left[2] = -(length_px);
      rectangleArr_top[3] = 0;
      rectangleArr_left[3] = -(length_px);
    }
  }

  return {
    target: target,
    name: 'Rectangle',
    leftArr: rectangleArr_left,
    topArr: rectangleArr_top
  };
};
//px 받을 필요 없을듯
var ffStaticScale = function(target, options) {
  options = options || {};
  var defaults = {
    scaleX: 2.0,
    scaleY: 2.0,
    goback: true
  };
  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }

  return {
    target: target,
    name: 'Scale',
    scaleX: options.scaleX,
    scaleY: options.scaleY
  };
};

var ffStaticBlink = function(target, options) {
  options = options || {};
  var defaults = {
    opacity: 0,
    num_per_second: 5,
    goback: true
  };
  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }

  return {
    target: target,
    name: 'Blink',
    opacity: options.opacity,
    num_per_second: options.num_per_second
  };
};

var ffStaticShake = function(target, options) {
  options = options || {};
  var defaults = {
    shake_count: 5,
    direction: "lr",
    goback: true
  };
  //direction은 lr(옆으로 움직임), ud(up down), all(양옆, 위아래)
  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  var shakeArr_top = new Array();
  var shakeArr_left = new Array();
  //test하면서 몇 px 할지 정하
  //움직임을 글자크기에 따라 조정하던지 해야할듯하다 => 이후 수정사안!
  for (var i = 0; i < options.shake_count * 2; i += 2) {
    //left right
    if (options.direction == "lr") {
      shakeArr_top[i] = 0;
      shakeArr_left[i] = 4;
      shakeArr_top[i + 1] = 0;
      shakeArr_left[i + 1] = -4;
    }
    //up down
    else if (options.direction == "ud") {
      shakeArr_top[i] = 4;
      shakeArr_left[i] = 0;
      shakeArr_top[i + 1] = -4;
      shakeArr_left[i + 1] = 0;
    }
    //lr+ud
    else if (options.direction == "all") {
      shakeArr_top[i] = 4;
      shakeArr_left[i] = 4;
      shakeArr_top[i + 1] = -4;
      shakeArr_left[i + 1] = -4;
    }
  }
  //console.log("shake motion"+shakeArr_top.length);
  //duration을 1000으로 나누면 1초의 offset을 구할 수 있음 -> shake_count에 따른 offset간격 정하기
  return {
    target: target,
    name: 'Shake',
    shake_count: options.shake_count,
    topArr: shakeArr_top,
    leftArr: shakeArr_left
  };
}
var ffAppearance = function(target, options) {
  options = options || {};
  var defaults = {
    mode: "left",
    goback: true
  };
  for (var prop in defaults) {
    options[prop] = typeof options[prop] !== 'undefined' ? options[prop] :
      defaults[prop];
  }
  //나중에 속도조절 하고 싶으면 fromTop , toTop => 배열로 만들어서 3개의 offset으로 0, 0.5 1 opacity로 조정가능
  var fromTop;
  var fromLeft;
  var toTop;
  var toLeft;
  var appearOpacity = new Array();
  appearOpacity[0] = 0;
  appearOpacity[1] = 1;
  //test하면서 바꾸기
  if (options.mode == "left") {
    fromTop = 0;
    toTop = 0;
    fromLeft = -15;
    toLeft = 15;
  } else if (options.mode == "right") {
    fromTop = 0;
    toTop = 0;
    fromLeft = 15;
    toLeft = -15;
  } else if (options.mode == "bottom") {
    fromTop = 15;
    toTop = -15;
    fromLeft = 0;
    toLeft = 0;
  } else if (options.mode == "top") {
    fromTop = -15;
    toTop = 15;
    fromLeft = 0;
    toLeft = 0;
  }

  //duration을 1000으로 나누면 1초의 offset을 구할 수 있음 -> shake_count에 따른 offset간격 정하기
  return {
    target: target,
    name: 'Appearance',
    fromTop: fromTop,
    fromLeft: fromLeft,
    toTop: toTop,
    toLeft: toLeft,
    appearOpacity: appearOpacity,
    goback: options.goback
  };
}
/////////////////////////////////////////div생성 함수/////////////////////////////////////
function create_div(targetArr, contents) {

  var tagArr = new Array();
  for (var i = 0; i < targetArr.length; i++) {
    var originalTag = targetArr[i];
    var bindingTag = targetArr[i] + "Binding";
    var lineTag = targetArr[i] + "Line";
    var appearTag = targetArr[i] + "Appear";
    var opacityTag = targetArr[i] + "Opacity";
    var rotationTag = targetArr[i] + "Rotation";
    var scaleTag = targetArr[i] + "Scale";
    var shakeTag = targetArr[i] + "Shake";
    var blinkTag = targetArr[i] + "Blink";
    var circleTag = targetArr[i] + "Circle";
    var rectangleTag = targetArr[i] + "Rectangle";
    tagArr[i] = {
      Original: originalTag,
      Binding: bindingTag,
      Opacity: opacityTag,
      Line: lineTag,
      Circle: circleTag,
      Rectangle: rectangleTag,
      Blink: blinkTag,
      Appear: appearTag,
      Rotation: rotationTag,
      Scale: scaleTag,
      Shake: shakeTag
    };

    var newDivHtml = "<div id =" + opacityTag + "><div id=" + lineTag + "><div id=" + circleTag + "><div id=" + rectangleTag + "><div id=" + blinkTag + "><div id=" + shakeTag + "><div id=" + appearTag + "><div id=" + rotationTag + "><div id=" + scaleTag + "><div id=" + targetArr[i] + ">" + contents[i] + "</div></div></div></div></div></div>";
    var div = document.createElement('div');
    div.id = tagArr[i].Binding;
    div.innerHTML = newDivHtml;
    document.querySelector('.preview').appendChild(div);
    document.getElementById(bindingTag).style.position = 'absolute';
    document.getElementById(bindingTag).style.left = '40%';
    document.getElementById(bindingTag).style.top = '55%';
    document.getElementById(bindingTag).style.fontSize = 'x-large';
    document.getElementById(bindingTag).style.color = "#151515";
    document.getElementById(bindingTag).style.textShadow = "2px " +  "2px " + "#FFBF00";
  }
  return tagArr;
}

/////////////////////////////////////////실행 시간, offset 관련////////////////////////////////////////
var calculateOffset = function(len_target, relativeArr, total_time) {
  //getData
  var relativeStartTime = Array(Array(), Array());
  for (var i = 0; i < relativeArr.length; i++) {
    for (var j = 0; j < relativeArr[i].length; j++) {
      relativeStartTime[i][j] = {
        motion_name: relativeArr[i][j].motion_name,
        target: relativeArr[i][j].target,
        duration: relativeArr[i][j].duration,
        time: relativeArr[i][j].time
      };
    }
  }
  var offset_length = 0;
  var start_offset;
  var end_offset;
  var end_time;
  var offsetArray = Array(Array(), Array());

  for (var p1 = 0; p1 < len_target; p1++) {
    offset_length = relativeStartTime[p1].length;
    for (var p2 = 0; p2 < offset_length; p2++) {
      var motion_name = relativeStartTime[p1][p2].motion_name;
      var target_name = relativeStartTime[p1][p2].target;
      start_time = relativeStartTime[p1][p2].time;
      end_time = start_time + relativeStartTime[p1][p2].duration;
      start_offset = start_time / total_time[p1];
      end_offset = end_time / total_time[p1];
      //console.log("Endtime"+end_time);
      if (p2 == offset_length - 1) {
        offsetArray[p1][p2] = {
          motion_name: motion_name,
          target: target_name,
          start_offset: start_offset,
          end_offset: 1
        };
        //console.log(offsetArray[p1][p2]);
      } else {
        offsetArray[p1][p2] = {
          motion_name: motion_name,
          target: target_name,
          start_offset: start_offset,
          end_offset: end_offset
        };
      }
    }
  }

  return offsetArray;
};
/////////////////////////////////모션의 전체 실행시간 계산//////////////////////////////////////////
var calculateRunTime = function(len_target, arguments) {
  var targetArr = Array(Array(), Array());;
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      targetArr[i][j] = {
        delay: arguments[i][j].delay,
        duration: arguments[i][j].duration,
        func: arguments[i][j].func,
        iteration: arguments[i][j].iteration,
        start_time: arguments[i][j].start_time
      };
      //console.log("iteration "+targetArr[i][j].iteration);
    }
  }
  //console.log("test"+targetArr[0][0].delay);
  var start_arr = Array(Array(), Array());
  var duration_arr = Array(Array(), Array());
  //console.log("test"+targetArr[0][0].delay);
  //var total_motion=Array(Array(),Array());
  //전체 시간
  var total_time = new Array();
  var empty_time;
  var start_time;
  var count_motion = 0;
  var first_delay = 0;
  var relativeStartTime = Array(Array(), Array());
  for (var p1 = 0; p1 < len_target; p1++) {
    var start_count = 0;
    count_motion = targetArr[p1].length;
    for (var p2 = 0; p2 < count_motion; p2++) {
      var motion_name = "";
      duration_arr[p1][p2] = targetArr[p1][p2].duration;
      motion_name = targetArr[p1][p2].func.name;
      target_name = targetArr[p1][p2].func.target;
      if (p2 == 0) {
        first_delay = targetArr[p1][0].start_time + targetArr[p1][0].delay;
        start_arr[p1][p2] = 0;
        start_time = 0;
        total_time[p1] = duration_arr[p1][p2] + start_arr[p1][p2];
        //motion_name='motion'+ p2;
        relativeStartTime[p1][start_count] = {
          motion_name: motion_name,
          target: target_name,
          time: start_time,
          duration: duration_arr[p1][p2]
        };
        start_count++;
      } else {
        start_arr[p1][p2] = targetArr[p1][p2].start_time + targetArr[p1][p2].delay - first_delay;
        start_time = start_arr[p1][p2];
        if (total_time <= start_arr[p1][p2]) {
          empty_time = start_arr[p1][p2] - total_time[p1];
          var empty_name = 'empty';
          //empty일때는 시작시간이 이전 모션실행시간의 끝=즉 (total시간-맨처음 모션 시작시간) 이 된다.
          var empty_startTime = total_time[p1];
          relativeStartTime[p1][start_count] = {
            motion_name: empty_name,
            target: target_name,
            time: total_time[p1],
            duration: empty_time
          };
          start_count++;
          total_time[p1] = total_time[p1] + empty_time + duration_arr[p1][p2];
          relativeStartTime[p1][start_count] = {
            motion_name: motion_name,
            target: target_name,
            time: start_time,
            duration: duration_arr[p1][p2]
          };
          start_count++;
        } else {
          var end_time = start_arr[p1][p2] + duration_arr[p1][p2];
          motion_name = 'motion' + p2;
          relativeStartTime[p1][start_count] = {
            motion_name: motion_name,
            target: target_name,
            time: start_time,
            duration: duration_arr[p1][p2]
          };
          start_count++;
          if (total_time[p1] < end_time) {
            total_time[p1] = end_time;
          } else;
        }
      }
      //console.log("test"+relativeStartTime[p1][p2].motion_name);
    }
    //처음 시작시간은 delay로 결정할 수 있음
    // total_time[p1]=total_time[p1]-(eval('NewArray'+p1+'[0]').start_time+ eval('NewArray'+p1+'[0]').delay);
  }
  //console.log("total_time"+total_time);
  return {
    first_delay: first_delay,
    relativeStartTime: relativeStartTime,
    total_time: total_time
  };

};
/////////////////////////////////// 모션 데이터 배열 리턴///////////////////////////////////
var getMotionData = function(arguments) {
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    result[i] = {
      delay: arguments[i].delay,
      duration: arguments[i].duration,
      func: arguments[i].func,
      iteration: arguments[i].iteration,
      start_time: arguments[i].start_time
    };
  }
  return result;
};

function getPos(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return {
    top: _y,
    left: _x
  };
}

/////////////////////////////////////////저장 포맷으로 보내기////////////////////////////////////////
var sendFormat = function(arg) {
  ;
}
////////////////////////////////////////opacity 설정 함수////////////////////////////////////////
var opacityArray = new Array();

function setOpacity(opacityTime, opacityValue) {
  opacityArray.push({
    time: opacityTime,
    opacity: opacityValue
  });
  console.log(opacityArray[0]);

}
///////////////////////////////////////텍스트 바인딩////////////////////////////////////
function ffTextBinding(upper, lower) {
  var upper_limit = upper;
  var lower_limit = lower;

  return {
    upper_limit: upper_limit,
    lower_limit: lower_limit
  };
}

function toRadians(degree) {
  return degree * (Math.PI / 180);
}

//px를 제거하기 위해서 getpos사용
function removePx(value) {
  var resultValue;
  resultValue = value.replace("px", "");

  return resultValue;
}

/////////////////
var uniq = function(ary) {
  var prim = {
      "boolean": {},
      "number": {},
      "string": {}
    },
    obj = [];

  return ary.filter(function(x) {
    var t = typeof x;
    return (t in prim) ? !prim[t][x] && (prim[t][x] = 1) :
      obj.indexOf(x) < 0 && obj.push(x);
  });
};
var sort_offset = function(ary) {
  ary.sort(function(a, b) { // 오름차순
    return a.offset < b.offset ? -1 : a.offset > b.offset ? 1 : 0;
  });
  return ary;
};
