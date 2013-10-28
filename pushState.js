/*
 * 
    jQuery pushState plugin
    
    Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org/>

    This plugin uses the new method avalible in most modern browsers to push history
    and browse using AJAX without having to use #hashtags in your urls.

    Usage $('a').pushState({container:'#content'});
    
    */

    (function( $ ){
      $.fn.pushState = function( options ) {  
        var settings = {};

    //settings
    settings = $.extend( {  
     container        :   'body',
     respect_onclick  :    true,
     event            :   'click',
     callbefore       :    function(){},
     callback         :    function(){},
     use_title        :    true, 
     use              :    true 

 }, options);
    
    //detect if we have possibilities to use window.history.pushState with this browser
    if( typeof window.history.pushState != 'function' ){ 
        settings.use = false;
    }

    //watch for the back browser button
    if( settings.use ){ 

        window.onpopstate = function(e) {
            if (e.state != null) {
                $(settings.container).html(e.state);
                document.title = e.state.pageTitle;
            }
        };
        
        //push the first state
        window.history.pushState( $(settings.container).html(), document.title, document.location.href );

        //main
        $('body').on(settings.event, this.selector, function(event){
                
                //the link
                target = this;

                url = $(target).attr('href');

                //typical urls that need no action
                if( url == '#' ){ 
                    return;
                }
                //your funky animations n all
                settings.callbefore.call();

                $(settings.container).load(url, function(response, status, xhr) {
                    link_title = '';
                    //we have to do this cause it currently gets ignored in all browsers. 
                    //One day it will be implemented
                    if( settings.use_title ){ 
                        link_title = $(target).attr('title');
                        if( link_title != undefined ){ 
                            document.title = link_title;
                        }
                    }
                    window.history.pushState(response, link_title, url);
                    //more funky animations 4u
                    settings.callback.call();
                });
                //prevent default document.location change
                event.preventDefault();
                //makes the plugin chainable
                return $(target);
            });
    }

};

})( jQuery );
