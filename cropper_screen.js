class cropperImg {

    constructor() {
        this.createDom()
    }
    createDom() {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
            '<foreignObject width="100%" height="100%">' +
            
            document.body.innerHTML +
            
            '</foreignObject>' +
            '</svg>';
        var DOMURL = window.URL || window.webkitURL || window;
        var img = new Image();
        var svg = new Blob([data], { type: 'image/svg+xml' });
        var url = DOMURL.createObjectURL(svg);
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
        }
        img.src = url;
        document.body.appendChild(canvas)

    }
}
new cropperImg()