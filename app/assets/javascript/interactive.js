$(function() {
    // Our values UI logic
    $('.value').hover(function(){
        // Define which value was clicked
        let v = $(this).data('value');

        // Set active h3
        $('.value').removeClass('gradient');
        $('#value' +v).addClass('gradient');

        // Set active Text
        $('.valueText').hide();
        $('#value' +v +'Text').removeClass('hide').show();
    });

    // Showcase UI logic
    var slides = $('.showcase').children('.showcase__image').length;
    $('#showcaseLength').text( slides );
    
    // Showcase switcher - Next
    $('#showcaseNext').click(function(){
        // Hide all Showcases
        $('.showcase__image, .showcase__card').hide();

        // Define which showcase was clicked
        let v = $(this).data('value');

        // Increment v
        v++;
        
        // Hide back button on last slide
        if(v == slides)
            $(this).addClass('hide').hide();

        // Show Back Button
        $('#showcaseBack').removeClass('hide').addClass('flex');
    
        // Show next Showcase
        $('#scImg' +v).removeClass('hide').show();
        $('#scCrd' +v).removeClass('hide').show();

        // Increment Counter
        $('#showcaseCounter').text( v );

        // Return current slide number (v)
        $(this).attr('data-value', v);
    });

    // Showcase switcher - Back
    $('#showcaseBack').click(function(){
        // Hide all Showcases
        $('.showcase__image, .showcase__card').hide();

        // Define which showcase was clicked
        let v = $('#showcaseNext').attr('data-value');
        console.log(v);

        // Increment v
        v--;

        // Hide back button on first slide
        if(v == 1)
            $('#showcaseBack').hide().addClass('hide');

        // Show Next Button
        $('#showcaseNext').removeClass('hide').addClass('flex');

        // Show next Showcase
        $('#scImg' +v).show();
        $('#scCrd' +v).show();

        // Increment Counter
        $('#showcaseCounter').text( v );

        // Return current slide number (v)
        $('#showcaseNext').attr('data-value', v);
    });

    // Simulate Realtime Users
    $('#rtUsers').text( Math.round( Math.random() * (250 - 70) + 70) );

    // Toggle
    var pricing = $('.pricing');

    $('#eur').click(function(){
        pricing.find('sup').text('€');
        pricing.find('.eur').show();
        pricing.find('.chf').hide();
        
        $('#chf').removeClass('toggle__item--active');
        $(this).addClass('toggle__item--active');
    });

    $('#chf').click(function(){
        pricing.find('sup').text('CHF');
        pricing.find('.chf').show();
        pricing.find('.eur').hide();

        $('#eur').removeClass('toggle__item--active');
        $(this).addClass('toggle__item--active');
    });
});