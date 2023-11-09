let j = 0;
let work = 0;
let flg = false;
let btn = 0;
let cnt = 1;
let num0 = document.querySelector('#td0');
let num1 = document.querySelector('#td1');
let num2 = document.querySelector('#td2');
let num3 = document.querySelector('#td3');
let num4 = document.querySelector('#td4');
let num5 = document.querySelector('#td5');
let num6 = document.querySelector('#td6');
let num7 = document.querySelector('#td7');
let num8 = document.querySelector('#td8');
let num9 = document.querySelector('#td9');

let mark = document.querySelector('p');
let percent = document.querySelector('#percent');
let change = document.querySelector('#change');
let AC = document.querySelector('#AC');
let point = document.querySelector('#point');
let rtnValue = document.querySelector('#return');

let total = document.querySelector('#total span');

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multi = document.querySelector('#multi');
let division = document.querySelector('#division')

function formatNumber(number) { //３桁ごとにカンマをつける
    return number.toLocaleString(undefined, { maximumFractionDigits: 10 });
}
function del(number) { //カンマを削除
    return number.replace(/,/g, '');
}

function calculator(num) { //入力した値をspanに表示
    let currentValue = del(total.textContent);
    if ((currentValue === '0' || flg === true) && cnt === 1) { //1桁目を表示
        total.textContent = num.textContent;
        flg = false;
        btn = 0;
    } else {
        if (cnt === 1) { //少数点がない時に桁上がりしながら表示
            let newValue = parseFloat(currentValue) * 10 + parseFloat(num.textContent);
            total.textContent = formatNumber(newValue)
            btn = 0;
        } else { //小数点がある時
            if (num.textContent === '0') { //入力された数が0だった時
                let newValue = currentValue + '0';
                cnt *= 10;
                total.textContent = newValue;
                btn = 0;
            } else {
                let newValue = parseFloat(currentValue) + parseFloat(num.textContent) / cnt;
                cnt *= 10;
                total.textContent = formatNumber(newValue)
                btn = 0;
            }
        }
    }
}


function pointval() { //小数点をクリックした時
    if (!total.textContent.includes('.')) {
        total.textContent += '.';
        cnt *= 10;
    }
}

function cler() { //入力した情報をクリア
    total.textContent = 0;
    work = 0;
    flg = false;
    j = 0;
    btn = 0;
    cnt = 1;
    mark.textContent = '';
}

function addval() { //足し算
    flg = true;
    cnt = 1;
    mark.textContent = plus.textContent;
    if (j !== 1) {
        if (btn === 0) {
            valset();
        }
        work = parseFloat(del(total.textContent));
        j = 1;
        btn = 1;
    }
}

function minusval() { //引き算
    flg = true;
    cnt = 1;
    mark.textContent = minus.textContent;
    if (j !== 2) {
        if (btn === 0) {
            valset();
        }
        work = parseFloat(del(total.textContent));
        j = 2;
        btn = 1;
    }
}

function multival() { //掛け算
    flg = true;
    cnt = 1;
    mark.textContent = multi.textContent;
    if (j !== 3) {
        if (btn === 0) {
            valset();
        }
        work = parseFloat(del(total.textContent));
        j = 3;
        btn = 1;
    }
}

function divisionval() { //掛け算
    flg = true;
    cnt = 1;
    mark.textContent = division.textContent;
    if (j !== 4) {
        if (btn === 0) {
            valset();
        }
        work = parseFloat(del(total.textContent));
        j = 4;
        btn = 1;
    }
}

function output() { //=を押した時
    if (j === 1) {
        total.textContent = formatNumber(work + parseFloat(del(total.textContent)));
    } else if (j === 2) {
        total.textContent = formatNumber(work - parseFloat(del(total.textContent)));
    } else if (j === 3) {
        total.textContent = formatNumber(work * parseFloat(del(total.textContent)));
    } else if (j === 4) {
        total.textContent = formatNumber(work / parseFloat(del(total.textContent)));
    } else {
        // work = parseFloat(del(total.textContent));
    }
    j = 0;
    btn = 0;
    cnt = 1;
    mark.textContent = '';
}

function valset() { //🟰を押す前に他の計算記号を押した時
    if (j === 1) {
        total.textContent = formatNumber(work + parseFloat(del(total.textContent)));
    }
    else if (j === 2) {
        total.textContent = formatNumber(work - parseFloat(del(total.textContent)));
    }
    else if (j === 3) {
        total.textContent = formatNumber(work * parseFloat(del(total.textContent)));
    }
    else if (j === 4) {
        total.textContent = formatNumber(work / parseFloat(del(total.textContent)));
    }
}

function changeval(number) { //+/-を押した時
    number = -(number);
    total.textContent = number;
}

function percentval(number) {
    number = parseFloat(number) / 100; //%を押した時
    total.textContent = number;
}

num1.addEventListener('click', function () {
    calculator(num1);
})
num2.addEventListener('click', function () {
    calculator(num2);
})
num3.addEventListener('click', function () {
    calculator(num3);
})
num4.addEventListener('click', function () {
    calculator(num4);
})
num5.addEventListener('click', function () {
    calculator(num5);
})
num6.addEventListener('click', function () {
    calculator(num6);
})
num7.addEventListener('click', function () {
    calculator(num7);
})
num8.addEventListener('click', function () {
    calculator(num8);
})
num9.addEventListener('click', function () {
    calculator(num9);
})
num0.addEventListener('click', function () {
    calculator(num0);
})

plus.addEventListener('click', function () {//+ボタン
    addval();
})

minus.addEventListener('click', function () {//-ボタン
    minusval();
})

multi.addEventListener('click', function () {//×ボタン
    multival();
})

division.addEventListener('click', function () {//÷ボタン
    divisionval();
})

AC.addEventListener('click', function () {//クリアボタン
    cler();
})

rtnValue.addEventListener('click', function () {//イコールボタン
    output();
})

change.addEventListener('click', function () {//+/-ボタン
    changeval(parseFloat(total.textContent));
})

percent.addEventListener('click', function () {//%ボタン
    percentval(parseFloat(total.textContent));
})

point.addEventListener('click', function () {//.ボタン
    pointval();
})
