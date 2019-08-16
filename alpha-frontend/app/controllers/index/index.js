define (function (require, exports, module) {

    exports.render = function (params, layout, service) {

        // var content = $('<div id="content"></div>');
        var content = $('<div id="index"><img src="img/underCons.jpg" style="max-width: 30%; max-height: 30%" /></div>');
        
        layout.append(content);


    }
});