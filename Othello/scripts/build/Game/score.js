define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function main() {
        var white = document.getElementById('white');
        var black = document.getElementById('black');
        if (white == null || black == null) {
            return '';
        }
        var scoreW = 0;
        var scoreB = 0;
        var buttons = document.getElementsByClassName('circle');
        for (var i = 0; i < buttons.length; i++) {
            var tmp = buttons[i];
            if (tmp.style.background == 'white') {
                scoreW++;
            }
            if (tmp.style.background == 'black') {
                scoreB++;
            }
        }
        white.textContent = '' + scoreW;
        black.textContent = '' + scoreB;
        if (scoreW > scoreB) {
            return 'white';
        }
        else if (scoreW < scoreB) {
            return 'black';
            ;
        }
        else {
            return 'draw';
            ;
        }
    }
    exports.default = main;
});
