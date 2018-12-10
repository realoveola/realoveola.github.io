define(["require", "exports", "./initField", "./score"], function (require, exports, initField_1, score_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    var width = 8;
    var height = 8;
    function main() {
        var content = document.getElementById('content');
        var startButton = document.createElement('button');
        startButton.setAttribute('id', 'Start');
        startButton.textContent = 'Start';
        content.appendChild(startButton);
        Start(content);
    }
    exports.default = main;
    function Start(content) {
        var startButton = document.getElementById('Start');
        if (!startButton) {
            return;
        }
        var onClick = function (event) {
            if (event == undefined) {
                return;
            }
            var target = event.target;
            if (target.name == undefined) {
                return;
            }
            if (target.style.display != 'none') {
                target.style.display = 'none';
                initField_1.default(content, width, height);
                var step = document.getElementById('step');
                if (step) {
                    PlayGame(content, 'circle', step);
                    score_1.default();
                }
            }
        };
        startButton.addEventListener('click', onClick);
    }
    function PlayGame(content, buttonGroupName, step) {
        var buttons = document.getElementsByClassName(buttonGroupName);
        var blackStep = true;
        if (!buttons) {
            return;
        }
        var onClick = function (event) {
            if (event == undefined) {
                return;
            }
            if (chekForMove('black', buttons) || chekForMove('white', buttons)) {
                var target = event.target;
                if (target.style.background == 'black' || target.style.background == 'white') {
                    return;
                }
                else {
                    if (chekForMove('black', buttons) && blackStep == true) {
                        if (makeMove('black', target)) {
                            step.textContent = 'White Play';
                            blackStep = false;
                        }
                    }
                    else {
                        step.textContent = 'White Play';
                        blackStep = false;
                    }
                    if (chekForMove('white', buttons) && blackStep == false) {
                        if (makeMove('white', target)) {
                            step.textContent = 'Black Play';
                            blackStep = true;
                        }
                    }
                    else {
                        step.textContent = 'Black Play';
                        blackStep = true;
                    }
                    score_1.default();
                }
            }
            else {
                var result = score_1.default();
                if (result == 'draw') {
                    alert(result);
                }
                else if (result == '') {
                    return;
                }
                else {
                    alert('Win ' + result);
                }
                if (content.firstChild != undefined) {
                    while (content.lastChild) {
                        content.removeChild(content.lastChild);
                    }
                }
                var startButton = document.createElement('button');
                startButton.setAttribute('id', 'Start');
                startButton.textContent = 'Start';
                content.appendChild(startButton);
                Start(content);
            }
        };
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', onClick);
        }
    }
    function makeMove(color, target) {
        if (checkForMoveForOneChip(color, target)) {
            MoveForChip(color, target);
            return true;
        }
        return false;
    }
    function chekForMove(color, buttons) {
        for (var i = 0; i < height * width; i++) {
            if (checkForMoveForOneChip(color, buttons[i]))
                return true;
        }
        return false;
    }
    function checkForMoveForOneChip(color, name) {
        if (name.style.background == 'limegreen') {
            if ((checkForMoveToDirection(color, name.id, 0, 1) ||
                checkForMoveToDirection(color, name.id, 0, -1) ||
                checkForMoveToDirection(color, name.id, 1, 0) ||
                checkForMoveToDirection(color, name.id, -1, 0) ||
                checkForMoveToDirection(color, name.id, 1, 1) ||
                checkForMoveToDirection(color, name.id, -1, -1) ||
                checkForMoveToDirection(color, name.id, 1, -1) ||
                checkForMoveToDirection(color, name.id, -1, 1)))
                return true;
        }
        return false;
    }
    function MoveForChip(color, name) {
        if (checkForMoveToDirection(color, name.id, 0, 1)) {
            moveFromChipToDirection(color, name.id, 0, 1);
        }
        if (checkForMoveToDirection(color, name.id, 0, -1)) {
            moveFromChipToDirection(color, name.id, 0, -1);
        }
        if (checkForMoveToDirection(color, name.id, 1, 0)) {
            moveFromChipToDirection(color, name.id, 1, 0);
        }
        if (checkForMoveToDirection(color, name.id, -1, 0)) {
            moveFromChipToDirection(color, name.id, -1, 0);
        }
        if (checkForMoveToDirection(color, name.id, 1, 1)) {
            moveFromChipToDirection(color, name.id, 1, 1);
        }
        if (checkForMoveToDirection(color, name.id, 1, -1)) {
            moveFromChipToDirection(color, name.id, 1, -1);
        }
        if (checkForMoveToDirection(color, name.id, -1, 1)) {
            moveFromChipToDirection(color, name.id, -1, 1);
        }
        if (checkForMoveToDirection(color, name.id, -1, -1)) {
            moveFromChipToDirection(color, name.id, -1, -1);
        }
        name.style.background = color;
        name.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
    }
    function checkForMoveToDirection(color, name, i, j) {
        var x = parseInt(name.split(/\s/)[1], 10);
        var y = parseInt(name, 10);
        while (y < height && y >= 0 && x < width && x >= 0) {
            y += i;
            x += j;
            if (y < height && y >= 0 && x < width && x >= 0) {
                var check = document.getElementById(y + ' ' + x);
                var neighbor = document.getElementById((parseInt(name, 10) + i) + ' ' + (parseInt(name.split(/\s/)[1], 10) + j));
                if (check.style.background == color && check.style.background != neighbor.style.background)
                    return true;
                else if (check.style.background == 'limegreen' || ((color == 'white' && check.style.background != 'black') || (color == 'black' && check.style.background != 'white')))
                    return false;
            }
            else
                return false;
        }
        return false;
    }
    function moveFromChipToDirection(color, name, i, j) {
        var x = parseInt(name.split(/\s/)[1], 10) + j;
        var y = parseInt(name, 10) + i;
        var check = document.getElementById(y + ' ' + x);
        while (check.style.background != color) {
            var tmp = check;
            tmp.style.background = color;
            tmp.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
            y += i;
            x += j;
            check = document.getElementById(y + ' ' + x);
        }
    }
});
