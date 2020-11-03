export default class Motion {
  constructor(type, options) {
    this._name = type;
    this._options = getDefaultMotion(type);
    if (options) {
      setMotionOptions(this, options);
    } else {
      console.log('err: 모션 속성이 없습니다!');
    }
  }

  getDefaultMotion(type) {
    let motionType = new Map(
      [
        [
          'LineMotion',
          {
            direction: 'ltor',
            length: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Circle',
          {
            radius: 0,
            direction: 'clock',
            start_angle: 0,
            end_angle: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Rectangle',
          {
            length: 0,
            direction: 'clock',
            start_quadrant: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Rotation',
          {
            angle: 0,
            pivot: 'ceneter',
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Shake',
          {
            shake_count: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Opacity',
          {
            opacity: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Scale',
          {
            scaleX: 0,
            scaleY: 0,
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ],
        [
          'Appearance',
          {
            mode: '',
            start_offset: 0,
            end_offset: 0,
            start_top: 0,
            start_left: 0,
            end_top: 0,
            end_left: 0
          }
        ]
      ]
    )

    return motionType[type];
  }

  // 인풋값 options는 각 type에 맞는 속성들을 가진 객체여야함.
  setMotionOptions(target, options){
    target._options = options;
  }

}
