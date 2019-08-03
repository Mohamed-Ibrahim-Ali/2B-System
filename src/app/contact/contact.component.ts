import { Component, OnInit } from '@angular/core';
declare var $:any ;
import 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
