import { Component, OnInit } from '@angular/core';
declare var $:any ;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      /*Start Curosol*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false
        }
    }
});
/*End Curosol*/
/*Start Up*/ 
$('.up').click(function () {

  $('html, body').animate({scrollTop: 0}, 1000);

});

$(window).scroll(function () {

if ($(this).scrollTop()>= 200) {

  $('.up').show();

} else {

  $('.up').hide();
}

});
/*End Up*/ 

    }
}
