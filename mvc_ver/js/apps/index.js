import Router from '../routers/Router.js';
import FullMenuController from '../controllers/FullMenuController.js';
import FavoriteMenuController from '../controllers/FavoriteMenuController.js';
import PopupController from '../controllers/PopupController.js';
import PreviewController from '../controllers/PreviewController.js';
import ProjectManagementController from '../controllers/ProjectManagementController.js';

const router = new Router()

// router는 map을 상속받고 있고, map의 set은 체이닝으로 할당이 가능하다.
router.set('fullmenu', new FullMenuController(router))
      .set('favoritemenu', new FavoriteMenuController(router))
      .set('popup', new PopupController(router))
      .set('preview', new PreviewController(router))
      .set('pm', new ProjectManagementController(router));

router.route('fullmenu');
router.route('favoritemenu');
router.route('preview');
router.route('pm');
