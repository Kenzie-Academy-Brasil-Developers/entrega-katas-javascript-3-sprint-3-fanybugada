const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const Results = document.getElementById('results');

function showResults(parametro) {
    const div = document.createElement("div");
        div.innetHTML = parametro;
        Results.appendChild(div);
}

// 1.  Exibir os números de 1 a 25: _(1, 2, 3, …, 24, 25)
function kata1() {
    let result = [];
        for (let i = 0; i < 26; i++) {
            result.push(i);
        }
        showResults(result);
    return result;
}
kata1();

// 2.  Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
function kata2() {
    let result = [];
        for (let i = 25; i >= 1; i--) {
            result.push(i);
        }
        showResults(result);
    return result;
}
kata2();

// 3.  Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
function kata3() {
    let result = [];
        for (let i = -1; i > -26; i--) {
            result.push(i);
        }
        showResults(result);
    return result;
}
kata3();

// 4.  Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
function kata4() {
    let result = [];
    for (let i = -25; i < 0; i++) {
        result.push(i);
    }
    showResults(result);
return result;
}
kata4();

// 5.  Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
function kata5() {
    let result = [];
        for (let i = 25; i > -26; i--) {
            if (i % 2 === 1 || i % 2 === -1) {
                result.push(i);
            }
        }
        showResults(result);
    return result;
}
kata5();

// 6.  Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
function kata6() {
    let result = [];
        for (let i = 3; i <= 100; i++) {
            if (i % 3 === 0) {
                result.push(i);
            }
        }
        showResults(result);
    return result;
}
kata6();

// 7.  Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
function kata7() {
    let result = []
        for (let i = 1; i <= 100 ; i++) {
            if(i % 7 === 0) {
                result.push(i) 
            }
        }
        showResults(result)
    return result;
}
kata7();


// 8.  Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
function kata8() {
    let result = [];
        for (let i = 100; i >= 1; i--) {
            if (i % 3 === 0 || i % 7 === 0) {
                result.push(i);
            }
        }
        showResults(result);
    return result;
}
kata8();

// 9.  Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)_
function kata9() {
    let result = [];
        for (let i = 1; i < 101; i++) {
            if (i % 2 === 1 && i % 5 === 0) {
                result.push(i);
            }
        }
        showResults(result);
    return result;
}
kata9();

// 10. Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
function kata10() {
    let result = [];
        for (let i = 0; i < sampleArray.length; i++) {
            result.push(sampleArray[i]);
        }
        showResults(result);
    return result;
}
kata10();

// 11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
function kata11() {
    let result = [];
    let array = 0;
        for (let i = 0; i < sampleArray.length; i++) {
            array = sampleArray[i];
                if (array % 2 === 0) {
                    result.push(sampleArray[i]);
                }
        }
        showResults(result);
    return result;
}
kata11();

// 12. Exibir todos os números ímpares contidos em sampleArray. _(469, 755, 245, …, 179, 535)
function kata12() {
    let result = [];
        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i] % 2 === 0) {
                result.push(sampleArray[i]);
            }
        }
        showResults(result);
    return result;
}
kata12();

// 13. Exibir os números divisíveis por 8 em sampleArray: _(712, 456, …, 472)_
function kata13() {
    let result = [];
        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i] % 8 === 0) {
                result.push(sampleArray[i]);
            }
        }
        showResults(result);
    return result;
}
kata13();

// 14. Exibir o quadrado de cada elemento de sampleArray. _(219961, 570025, …, 222784)_
function kata14() {
    let result = [];
        for ( let i = 0; i < sampleArray.length; i++) {
            result.push(sampleArray[i] * sampleArray[i]);
        }
        showResults(result);
    return result;
}
kata14();

// 15. Exibir a soma de todos os números de 1 a 20.
function kata15() {
    let result = [];
        for (let i = 0; i < 21; i++) {
            result = result + 1;
        }
        showResults(result);
    return result;
}
kata15();

// 16. Exibir a soma de todos os elementos de sampleArray.
function kata16() {
    let result = 0;
        for (let i = 0; i < sampleArray.length; i++) {
            result = result + (sampleArray[i]);
        }
        showResults(result);
    return result;
}
kata16();

// 17. Exibir o menor elemento de sampleArray.
function kata17() {
    let result = 0;
        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i] > result) {
                result = sampleArray[i];
            }
        }
        showResults(result);
    return result;
}
kata17();

// 18. Exibir o maior elemento de sampleArray.
function kata18() {
    let result = 0;
        for (let i = 0; i < sampleArray.length; i++) {
            if (result < sampleArray[i]) {
                sampleArray[i] = result;
            }
        }
        showResults(result);
    return result;
}
kata18();








/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
