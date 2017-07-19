module.exports = {
    init(){
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-35662208-1', 'auto');
        ga('send', 'pageview');
        this.clickTracking();
    },
    trackEvent(options){
        console.log(options);
            var options = options || {};
            var opts = {};
            opts.category = options.category || 'category';
            opts.action = options.action || 'click';
            opts.label = options.label || 'label';
            ga('send', 'event', opts.category, opts.action,opts.label);
    },
    clickTracking(){
        $('body').on('click','[data-ga]',(e)=>{
            var el = $(e.currentTarget);
            var data = el.data('ga');
            data.label = data.label || el.text();
            var options = data;
            this.trackEvent(options);
        });
    }
}