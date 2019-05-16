import { Component, OnInit  } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit() {


// Collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// END COLLAPSE
$(document).ready(function(){

  $('.circle-plus').on('click', function(){
    $(this).toggleClass('opened');
  })
})

// ENDPLUS

$(document).ready(function(){
  $("#shw").click(function() {
$("#des").slideToggle();
$('#underline1').slideToggle();

  })
  $("#shw2").click(function() {
    $("#des2").slideToggle();
    $('#underline2').slideToggle();
    
      })
    
})


}



}
