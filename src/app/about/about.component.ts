import { Component, OnInit } from '@angular/core';
declare var $:any ;
import 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
