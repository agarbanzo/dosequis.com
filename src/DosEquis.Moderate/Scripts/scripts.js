var checkBox = function (e, url, type) {
    var cb = e;
    var id = e.val();
    var checked = (cb.attr('checked') == 'checked' ? false : true);
    var post = cb.closest('.post');
    cb.attr("disabled", true);

    var updateType;
    if (typeof (type) != "undefined") {

        if (type == "finalist" || type == "winner") {
            updateType = type;
            checked = (cb.attr('checked') == 'checked' ? true : false);
            cb.attr("disabled", false);
        }
        else {
            updateType = "approved";
        }
    }
    else {

        updateType = "";
    }


    $.ajax({
        type: 'POST',
        url: url,
        contentType: "application/x-www-form-urlencoded",
        traditional: true,
        data: {
            Id: id,
            Status: checked,
            type: updateType
        },
        error: function (e) {
            console.log('error', e)
        },
        success: function (e) {
            if (updateType == "" || updateType == "approved") {
                cb.removeAttr("disabled");
                if (checked) {
                    post.removeClass('checked');
                } else {
                    post.addClass('checked');
                }
            }
        }
    });
}

var modCheckBox = function (e) {
    var cb = e;
    var id = e.val();
    var checked = (cb.attr('checked') == 'checked' ? false : true);
    var post = cb.closest('.post');
    cb.attr("disabled", true);
    $.ajax({
        type: 'POST',
        url: '/proveyoureinteresting/update',
        contentType: "application/x-www-form-urlencoded",
        traditional: true,
        data: {
            id: id,
            isPublished: !checked
        },
        success: function (e) {
            cb.removeAttr("disabled");
            if (checked) {
                post.addClass('checked');
            } else {
                post.removeClass('checked');
            }
        },
        error: function (e) {
            console.log('error', e);
            debugger;
        }
    });
}

var banCheckBox = function (e) {
    var cb = e;
    var id = e.val();
    var checked = (cb.attr('checked') == 'checked' ? false : true);
    cb.attr("disabled", true);
    $.ajax({
        type: 'POST',
        url: '/proveyoureinteresting/setBan',
        contentType: "application/x-www-form-urlencoded",
        traditional: true,
        data: {
            id: id,
            isBanned: !checked
        },
        success: function (e) {
            cb.removeAttr("disabled");
        },
        error: function (e) {
            console.log('error', e);
            debugger;
        }
    });
}

$(function () {
    $('a.click').click(function (e) {
        var img = new Image()
            , overlay = $('<div id="overlay">')
            , imgH, imgW, scTop = 0;
        img.src = $(this).attr('href');
        img.id = 'fullIMg';
        $(img).load(function () {
            imgH = $(this)[0].naturalHeight;
            imgW = $(this)[0].naturalWidth;
            $(img).css({ 'max-width': imgW, marginLeft: (-imgW / 2) + 'px' });
            $(window).resize(function () {
                boxSize($(img));
            });
            $(window).scrollTop(0);
            $('body').append(img);
        });
        $('body').append(overlay);
        scTop = $(window).scrollTop();
        overlay.click(function () {
            overlay.remove();
            img.remove();
            $(window).scrollTop(scTop);
        });
        return false;
    });
});

var boxSize = function (el) {
    return el.css({ 'width': ($(window).width() * .8) + 'px' }).css({ 'marginLeft': -(el.width() / 2) + 'px' });
};