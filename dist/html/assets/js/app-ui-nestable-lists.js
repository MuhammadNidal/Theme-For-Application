/*!
 * Maisonnette-admin v1.3.2
 * https://foxythemes.net
 *
 * Copyright (c) 2019 Foxy Themes
 */

var App = (function () {
  'use strict';
  
  App.uiNestableLists = function( ){

    $('.dd').nestable();
    //Watch for list changes and show serialized output
    function update_out(selector, sel2){
      var out = $(selector).nestable('serialize');
      $(sel2).html(window.JSON.stringify(out));
    }
    
    update_out('#list1',"#out1");
    update_out('#list2',"#out2");
    
    $('#list1').on('change', function() {
      update_out('#list1',"#out1");
    });
    
    $('#list2').on('change', function() {
      update_out('#list2',"#out2");
    });

  };

  return App;
})(App || {});
