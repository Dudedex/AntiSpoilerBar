function addSpoilerBar() {
    var spoilerBarColor = '#35383d';
    var height = $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainerContent').height();
    var marginTop = height * 0.08;
    var borderSize = height * 0.1;
    $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.divaVideoContainer').append('<div id="gamepassAntiSpoilerBar" style="z-index: 1 !important;margin-top: -' + marginTop + 'px;background-color: ' + spoilerBarColor + ';position: relative;border-top: ' + borderSize
        + 'px solid yellow;padding:0;"></div>');
    $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.controlbar-diva').find('.mcEvents').hide();
}

function removeSpoilerBar() {
    $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').remove();
    $('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('.controlbar-diva').find('.mcEvents').show();
}

if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length === 0) {
    addSpoilerBar();
} else {
    removeSpoilerBar();
}

$(window).on('resize', function () {
    if ($('.gp-container').first().find('.gp-video').first().find('iframe').contents().find('#gamepassAntiSpoilerBar').length !== 0) {
        removeSpoilerBar();
        addSpoilerBar();
    }
});


