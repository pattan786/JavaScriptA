import { RefreshModal } from '../view/dashboard.view';
import getjsondata from '../service/dashboard.service';

document.getElementsByClassName('rm')[0].addEventListener('click', RefreshModal);
getjsondata();
