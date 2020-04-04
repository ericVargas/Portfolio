let info = document.getElementById('info');

function show() {
    info.style.visibility = "visible";
}

function hide() {
    info.style.visibility = "hidden";
}

$('.project').each(function () {
    let $thisProject = $(this);
    $thisProject.click(function () {
        $thisProject.toggleClass('flipped');
    });
});