// parent가 있는 메뉴들만 간편메뉴로 등록할 수 있도록 할 예정.
// subtitle: 간편메뉴로 등록할 때 필요한 부제
// icon_html: 간편메뉴로 등록할 때 필요한 아이콘 정보(폰트어썸으로 통일)
// 아직 데이터 다 안 채운 상태.
let menuData;
export default menuData = [
  {
    title: '프로젝트',
    isFavorite: false,
    parent: '',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '새 프로젝트 생성하기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '프로젝트 열기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '새 템플릿 생성하기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '템플릿 불러오기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '저장하기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '다른 이름으로 저장',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '현재 템플릿 삭제',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '프로젝트 삭제',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '마이페이지로 돌아가기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '템플릿 내보내기',
    isFavorite: false,
    parent: '프로젝트',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '편집',
    isFavorite: false,
    parent: '',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '실행 취소',
    isFavorite: false,
    parent: '편집',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '실행 복구',
    isFavorite: false,
    parent: '편집',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '애니메이션 실행하기',
    isFavorite: true,
    parent: '편집',
    icon_html: '<i class="far fa-play-circle fa-lg"></i>',
    subtitle: '애니메이션 실행'
  },
  {
    title: '텍스트 선택모드',
    isFavorite: true,
    parent: '편집',
    icon_html: '<i class="fas fa-mouse-pointer fa-lg"></i>',
    subtitle: '텍스트 선택'
  },
  {
    title: '텍스트 속성 편집하기',
    isFavorite: true,
    parent: '편집',
    icon_html: '<i class="fas fa-text-height fa-lg"></i>',
    subtitle: '텍스트 속성 편집'
  },
  {
    title: '모션 적용 편집하기',
    isFavorite: true,
    parent: '편집',
    icon_html: '<i class="fas fa-magic fa-lg"></i>',
    subtitle: '모션 편집'
  },
  {
    title: '설정',
    isFavorite: false,
    parent: '',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '간편도구 설정',
    isFavorite: false,
    parent: '설정',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '에디터모드 설정',
    isFavorite: false,
    parent: '설정',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '도움말',
    isFavorite: false,
    parent: '',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '튜토리얼 시작하기',
    isFavorite: false,
    parent: '도움말',
    icon_html: '',
    subtitle: ''
  },
  {
    title: '문의하기',
    isFavorite: false,
    parent: '도움말',
    icon_html: '',
    subtitle: ''
  }
]
