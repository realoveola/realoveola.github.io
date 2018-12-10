define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function main(content, width, height) {
        if (width % 2 != 0 && height % 2 != 0) {
            return;
        }
        var table = document.createElement('table');
        for (var i = 0; i < height; i++) {
            var tr = table.insertRow();
            for (var j = 0; j < width; j++) {
                var td = tr.insertCell();
                var cell = document.createElement('div');
                cell.setAttribute('class', 'circle');
                cell.id = i + ' ' + j;
                if (i == j && (i == height / 2 || i == height / 2 - 1)) {
                    cell.style.background = 'white';
                    cell.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
                }
                else if (i == height / 2 && j == width / 2 - 1 || i == height / 2 - 1 && j == width / 2) {
                    cell.style.background = 'black';
                    cell.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
                }
                else {
                    cell.style.background = 'limegreen';
                }
                td.appendChild(cell);
            }
        }
        content.appendChild(table);
        var text = document.createElement('p');
        text.setAttribute('id', 'step');
        text.textContent = 'Black Play';
        content.appendChild(text);
        var div = document.createElement('div');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var text1 = document.createElement('p');
        var text2 = document.createElement('p');
        text1.textContent = 'White:';
        text2.textContent = 'Black:';
        var white = document.createElement('p');
        var black = document.createElement('p');
        white.setAttribute('id', 'white');
        black.setAttribute('id', 'black');
        div1.appendChild(text1);
        div2.appendChild(text2);
        div1.appendChild(white);
        div2.appendChild(black);
        div.appendChild(div1);
        div.appendChild(div2);
        content.appendChild(div);
    }
    exports.default = main;
});
