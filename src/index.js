//import 'bootstrap/dist/css/bootstrap.min.css';
import '@laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.slim.min.js';
import  $ from 'jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';


$(document).ready(function() {

    $('.add-to-cart-btn').click(function() {
        alert('اضيف الى عربة الشراء');
    }); 

});