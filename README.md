  <h1>jQuery pushState plugin</h1>
  <p> This plugin uses the new method avalible in most modern browsers to push history
    and browse using AJAX without having to use #hashtags in your urls.</p>
 
 
    
   

    Usage
    1) $('a').pushState(); //wll load via ajax into the body, will omit reloading the resopurces like css, javascript
    2) $('a').pushState({container:'#someDiv'}); //will load everything into #someDiv
    
    Options:
     container        :   'body',           //default container
     respect_onclick  :    true,            //dont do anything if onclick is not null
     event            :   'click',          //default event
     callbefore       :    function(){},    //define your own function here for preloading animations
     callback         :    function(){},    //define your function for after loading animations
     use_title        :    true,            //use the title of the link for the document title.
    
    
    
    Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org/>

    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
    
    
