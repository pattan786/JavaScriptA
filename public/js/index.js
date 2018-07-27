import './controller/card.controller';
import './controller/list.controller';
import './controller/dashboard.controller';

require('../../node_modules/jquery/dist/jquery.js');
require('../../node_modules/popper.js/dist/popper.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../../node_modules/bootstrap/scss/bootstrap.scss');
require('../scss/style.scss');

$(() => {
  $('.drag').sortable();
  $('.drag').disableSelection();
});
$(() => {
  $('.sortable').sortable();
  $('.sortable').disableSelection();
});
