//TODO => make it possible that this can trigger content inside the iframe
function triggerSpoilerBar () {
    function addSpoilerBar() {
        var spoilerBarColor = '#35383d';
        var height = $('.divaVideoContainerContent').height();
        var marginTop = height * 0.08;
        var borderSize = height * 0.1;
        $('.divaVideoContainer').append('<div id="gamepassAntiSpoilerBar" style="z-index: 1 !important;margin-top: -' + marginTop + 'px;background-color: ' + spoilerBarColor + ';position: relative;border-top: ' + borderSize
            + 'px solid yellow;padding:0;"></div>');
        var marginTopCtrl = height * 0.075;
        var borderSizeCtrl = height * 0.05;
        var ctrlBarWidth = $('.divaVideoContainerContent').width() - 400;
        $('.controlbar-diva').append('<div id="gamepassAntiSpoilerBarCtrl" style="z-index: 1 !important;margin-top: -' + marginTopCtrl + 'px; margin-left:95px; width: ' + ctrlBarWidth + 'px; position: relative;border-top: ' + borderSizeCtrl + 'px solid white;padding:0;"></div>');
    }

    function removeSpoilerBar() {
        $('#gamepassAntiSpoilerBar').remove();
        $('#gamepassAntiSpoilerBarCtrl').remove();
    }

    if ($('#gamepassAntiSpoilerBar').length === 0) {
        addSpoilerBar();
    } else {
        removeSpoilerBar();
    }

    $(window).on('resize', function () {
        console.log('resize triggered');
        if ($('#gamepassAntiSpoilerBar').length !== 0) {
            console.log('resize');
            removeSpoilerBar();
            addSpoilerBar();
        }
    });
};