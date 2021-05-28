$(function(){
    $('#accordion-1').on('click', function(){
      $(this).removeClass('active-a');
      $('#accordion-2').removeClass('active-a');
      $('#accordion-4').removeClass('active-a');
      $('#accordion1-panel').removeClass('active-accordion');
      $('#accordion2-panel').removeClass('active-accordion');
      $('#accordion3-panel').removeClass('active-accordion');
      $('#accordion4-panel').removeClass('active-accordion');
     });
   $('#accordion-2').on('click', function(){
      $(this).addClass('active-a');
      $('#accordion-1').addClass('active-a');
      $('#accordion-3').removeClass('active-a');
      $('#accordion-4').removeClass('active-a');
      $('#accordion2-panel').addClass('active-accordion');
      $('#accordion1-panel').addClass('active-accordion');
      $('#accordion3-panel').removeClass('active-accordion');
      $('#accordion4-panel').removeClass('active-accordion');
   });
   $('#accordion-3').on('click', function(){
      $(this).addClass('active-a');
      $('#accordion-1').addClass('active-a');
      $('#accordion-2').removeClass('active-a');
      $('#accordion-4').removeClass('active-a');
      $('#accordion3-panel').addClass('active-accordion');
      $('#accordion2-panel').removeClass('active-accordion');
      $('#accordion1-panel').addClass('active-accordion');
      $('#accordion4-panel').removeClass('active-accordion');
     });
   $('#accordion-4').on('click', function(){
      $(this).addClass('active-a');
      $('#accordion-1').addClass('active-a');
      $('#accordion-2').removeClass('active-a');
      $('#accordion-3').removeClass('active-a');
      $('#accordion4-panel').addClass('active-accordion');
      $('#accordion2-panel').removeClass('active-accordion');
      $('#accordion3-panel').removeClass('active-accordion');
      $('#accordion1-panel').addClass('active-accordion');
     });
   });