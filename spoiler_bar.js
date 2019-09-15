javascript:{
    var debugMode = true;

    function addSpoilerBar() {
        var spoilerBarColor = '#223344';
        var height = $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainerContent').height();
        if (debugMode) {
            console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainerContent'));
            console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainerContent').height());
        }
        var marginTop = height * 0.08;
        var borderSize = height * 0.1;
        $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainer').append('<div id="gamepassAntiSpoilerBar" style="z-index: 1 !important;margin-top: -' + marginTop + 'px;position: relative;border-top: ' + borderSize + 'px solid ' + spoilerBarColor + ';padding:0;"></div>');
        $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.controlbar-diva').find('.mcEvents').hide();
        if (debugMode) {
            if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length !== 0) {
                console.log('spoiler bar was added sucessfully');
            } else {
                console.log('spoiler bar could not get added');
            }
        }
    }

    function removeSpoilerBar() {
        $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').remove();
        $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.controlbar-diva').find('.mcEvents').show();
        if (debugMode) {
            if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length === 0) {
                console.log('spoiler bar was removed sucessfully');
            } else {
                console.log('spoiler bar could not get removed');
            }
        }
    }

    if (debugMode) {
        console.log($('.gp-container'));
        console.log($('.gp-container').first());
        console.log($('.gp-container').first().find('.gp-video'));
        console.log($('.gp-container').first().find('.gp-video').first());
        console.log($('.gp-container').first().find('.gp-video').first().find('iframe'));
        console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents());
        console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar'));
        console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length);
        console.log($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length === 0);
    }

    if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length === 0) {
        if (debugMode) {
            console.log("add spoiler bar");
        }
        addSpoilerBar();
    } else {
        if (debugMode) {
            console.log("remove spoiler bar");
        }
        removeSpoilerBar();
    }
    $(window).on('resize', function () {
        if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length !== 0) {
            removeSpoilerBar();
            addSpoilerBar();
        }
    });
}