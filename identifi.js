/*! identifi.js v0.0.01 | MIT License | http://lucasbonomi.com/MIT */
/* With the help of bullgit fellow @dervondenbergen */
$(document).ready(function () {

    function consoleText() {
        var img, consoleTxt;
        consoleTxt = $("#console ul");
        img = $('img');
        var data = $('img.identifi').data();
        for (var i in data) {
            $('<li>', {
                html: '<small>' + i + '</small>' + ': <span>' + data[i] + '</span>'
            }).appendTo(consoleTxt);
        }
    }

    function init() {
        var body = $('body');
        var toolStyle = '.person-face{min-width:80px;width:auto;height:26px;position:absolute;z-index:999999999;top:10em;left:8.5em;background:rgba(0,0,0,.85);border:2px solid #000;border-radius:5px;color:#fff;text-align:center;line-height:1.6;cursor:pointer}.person-face:before{content:"";display:block;position:absolute;margin-top:-.55em;margin-left:2em;width:0;height:0;border-left:.5em solid transparent;border-right:.5em solid transparent;border-bottom:.5em solid rgba(0,0,0,.85)}';
        var overlay = '<div class="imgoverlay"></div>';
        body.append('<style id="identifiStyle" >' + toolStyle + '</style>' + overlay);
    }

    function identifi() {

        var image = document.querySelector('img');
        var imgo = document.querySelector('.imgoverlay');

        var data = image.dataset;

        var peoplenumber = data.peoplenumber;

        var people = [];

        for (var i = 1; i <= peoplenumber; i++) {

            var r = new RegExp('person' + i);
            var rn = new RegExp('name');
            var rx = new RegExp('x');
            var ry = new RegExp('y');
            var person = {};

            for (p in data) {

                if (p.match(r)) {

                    if (p.match(rn)) {
                        person.name = data[p];
                    }

                    if (p.match(rx)) {
                        person.x = data[p];
                    }

                    if (p.match(ry)) {
                        person.y = data[p];
                    }
                }
            }
            people.push(person);
        }

        for (var i = 0; i < peoplenumber; i++) {

            var p = document.createElement('div');
            p.className = "person-face";
            p.style.top = people[i].y + 'px';
            p.style.left = people[i].x + 'px';
            p.style.position = 'absolute';
            p.style.color = 'white';
            p.textContent = people[i].name;

            imgo.appendChild(p);
        }
    }

    function tooltip() {
        var body = $('body');
        var person = $('.person-face');
        person.fadeOut();

        $('img').on('mouseover', function () {
            person.fadeIn().addClass('pop');

        }).on('mouseleave', function () {
            person.fadeOut().removeClass('pop');
        });
    }

    function deploy() {
        init(); // Initialize the elements
        consoleText(); // Useful to debug
        identifi(); // Function that reads data attributes of the image
        tooltip(); // Function to hide and display the names
    }

    deploy();

});
