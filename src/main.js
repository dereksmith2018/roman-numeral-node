import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Translation } from './roman-numeral.js';

$(document).ready(function(){

  $("form#formOne").submit(function(event){
    event.preventDefault();
    // var  newTranslation = new Translation();
    // var results = newTranslation.
    var userInput = parseInt($("#textInput").val());
    var newTranslation = new Translation(userInput);
    $("#result").text(newTranslation.translate());
  });
});




