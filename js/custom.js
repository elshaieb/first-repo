/*global $, alert, console*/

$(document).ready(function () {
    'use strict';
    
    var todoVal,
        content = $('section').html(),
        MakeString,
        makeIndex,
        timeEffect;
    
    $('header').height($(window).height());
    
    $(window).resize(function () {
        
        $('header').height($(this).height());
        
    });
    
    
    if (content === '') {
        
        $('<nav>Have a nice day</nav>').appendTo('section');
        
        $('.todo').keyup(function () {
        
            todoVal = $(this).val();
        
        });
        
        $('button').click(function () {
            
            if ($('.todo').val() === '') {
                alert('You Must Write SomeThig New');
            }
            
            $('nav').hide(300);
        
            $('.todo').val('');
            
            $('<div>' + todoVal + '</div>').appendTo('section').fadeIn(500);
            
            $('.main section > div').click(function () {
                
                $(this).css('textDecoration', 'line-through').fadeOut(1000);
                
                setTimeout(function () {
                    
                    $('<div class="toast">Finished</div>').appendTo('.container').fadeIn(500).fadeOut(2000);
                    
                }, 50);
                
            });
        });
    }
    
    // Make It Now (Animated) every 200 millsecond
    
    MakeString = 'Make It Now';
    makeIndex = 0;
    timeEffect = setInterval(function () {
        
        document.querySelector('.make').innerHTML += MakeString[makeIndex];
        makeIndex += 1;
        document.querySelector('.make').style.opacity = '1';
        document.querySelector('.make').style.transition = 'opacity .5s linear';
        
        if (makeIndex > MakeString.length - 1) {
            clearInterval(timeEffect);
        }
        
    }, 200);
    
    // Make It Now (Animated) every 200 millsecond
});