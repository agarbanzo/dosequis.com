import 'scss/components/loader';
const template = require('components/loader/loader.html');
require('jquery.transit');
const imagesrc = require("./logo-white.png")

export default class Loader {
    constructor(selector) {
        this.$el = selector;
        this.render();
    }

    render() {
        this.div = $('<div class="site-loader">');
        var d = {
            img:imagesrc
        }
        var html = $(template(d)).prependTo(this.div);  
        $(this.$el).append(this.div);
    }

    show (parent) {
        this.div.transition({ scale: 0.5,opacity:1 });
    }

    hide (parent) {
        var self = this;
        // $(self.wrapper).fadeOut(function () {
        //     self.wrapper.css('z-index', -1)
        //     if (parent) self.wrapper.parent(parent).remove();
        // });
         this.div.transition({
          opacity: 0, scale: 0,
          duration: 500,
          easing: 'in',
          complete: function() { if (parent) self.wrapper.parent(parent).remove();}
        });
    }
}