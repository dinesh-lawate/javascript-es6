var linkold = function (height, color, url) {
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'http://azat.co';
    console.log('Height = ' + height + ", Color = " + color + ", URL = " + url);
}

var linkNew = function (height = 50, color = 'red', url = 'http://azat.co') {
    console.log('Height = ' + height + ", Color = " + color + ", URL = " + url);
}

linkold();
linkNew();