 var checkBox = function (e) {
            var cb = e;
            var id = e.val();
            var checked = (cb.attr('checked') == 'checked' ? false : true);
            var post = cb.closest('.post');
            cb.attr("disabled", true);
            $.ajax({
                type: 'POST',
                url: '/Home/Update',
                contentType: "application/x-www-form-urlencoded",
                traditional: true,
                data: {
                    Id: id,
                    Status: checked
                },
                error: function (e) {
                    console.log('error', e)
                },
                success: function (e) {
                    cb.removeAttr("disabled");
                    if (checked) {
                        post.removeClass('checked');
                    } else {
                        post.addClass('checked');
                    }
                }
            });
        }
    $(function () {
        $('a.click').click(function(e){
            var img = new Image()
                , overlay = $('<div id="overlay">')
                ,imgH,imgW,scTop = 0;
            img.src = $(this).attr('href');
            img.id = 'fullIMg';
            $(img).load(function () {
                    imgH = $(this)[0].naturalHeight;
                    imgW = $(this)[0].naturalWidth;
                    $(img).css({'max-width':imgW,marginLeft:(-imgW / 2) + 'px'});
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