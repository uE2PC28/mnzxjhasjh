function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        // Obtém o pai da DIV com o ID "nubank"
        let parentDiv = divRemover.parentNode;

        // Remove a DIV com o ID "nubank" do seu pai
        parentDiv.removeChild(divRemover);
    }
}




function scrollToTop() {
    // Rola a página para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}

function nubank() {
    removeDiv('nubank');
    document.getElementById("bradesco").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$100,00';
    scrollToTop();


}

function bradesco() {
    removeDiv('bradesco');
    document.getElementById("mcdonalds").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$150,00';
    scrollToTop();


}

// function americanas() {
//     removeDiv('americanas');
//     document.getElementById("mcdonalds").style.display = "block";

//     document.getElementById('saldo').innerHTML = 'R$81,25';
//     scrollToTop();
// }

function mcdonalds() {
    removeDiv('mcdonalds');
    document.getElementById("finalizacao").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$200,00';
    scrollToTop();


}



function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        // Obtém o pai da DIV com o ID "nubank"
        let parentDiv = divRemover.parentNode;

        // Remove a DIV com o ID "nubank" do seu pai
        parentDiv.removeChild(divRemover);
    }
}

function trocarDiv(esconderId, mostrarId) {
    document.getElementById(esconderId).style.display = 'none';
    document.getElementById(mostrarId).style.display = 'block';
  }



// Carregando B2


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB2() {
        var button = document.getElementById("enviarResposta");
            showPopupB2();
            playAudio('cash.mp3');
            
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB2();
                nubank();
            }, 4000); // 3 segundos
        }

// Carregando B3


function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB3() {
        var button = document.getElementById("enviarResposta");
            showPopupB3();
            playAudio('cash.mp3');
            
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB3();
                bradesco();
            }, 4000); // 3 segundos
        }

// Carregando B4


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('enviarResposta').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('enviarResposta').disabled = true;
}   

    function showLoadingB4() {
        var button = document.getElementById("enviarResposta");
            showPopupB4();
            playAudio('cash.mp3');
            
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB4();
                mcdonalds();
            }, 4000); // 3 segundos
        }

