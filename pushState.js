/*
 * 
 * jQuery pushState plugin
 * 
 * The MIT License
 * Copyright (c) 2013 Aleksandr Bogdanov
    
    This plugin uses the new method avalible in most modern browsers to push history
    and browse using AJAX without having to use #hashtags in your urls.

    Usage
    
*/

(function( $ ){
  $.fn.pushState = function( options ) {  
    var settings = {};

    //detect if we have possibilities to use window.history.pushState with this browser
    if( window.history.pushState != undefined ){ 
        setting.use = false;
    }

    //settings
    settings = $.extend( {  
       container        :   'body',
       respect_onclick  :    true,
       event            :   'click',
       callback         :    function(){},
       use_title        :    true 

    }, options);

    if( settings.use ){ 
        return this.each(function() {        
            $(this).on(settings.event, function(){
                    url = $(this).attr('href');
                    $(settings.container).load(url, function(response, status, xhr) {
                        
                        title = '';
                        //we have to do this cause it currently gets ignored in all browsers. 
                        //One day it will be implemented
                        if( settings.use_title ){ 
                            document.title = $(this).attr('title');
                            title = document.title;
                        }
                        window.history.pushState(response, title, url);
                    });
            });  
        });
    }

  };
})( jQuery );
