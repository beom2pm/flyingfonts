import Router from '../routers/Router.js'
import FullMenuController from '../controllers/FullMenuController.js'

const router = new Router()

// router는 map을 상속받고 있고, map의 set은 체이닝으로 할당이 가능하다.
// 때문에 마지막에 route에서 맨 처음 set으로 할당한 index(컨트롤러)를 호출하면 그 이후의 것들도 다 라우팅될 수 있는 것.
router.set('fullmenu', new FullMenuController(router))
      .route('fullmenu')
