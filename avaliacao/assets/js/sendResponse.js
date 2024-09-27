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

    playAudio('assets/audio/cash.mp3');
}

function bradesco() {
    removeDiv('bradesco');
    document.getElementById("mcdonalds").style.display = "block";

    document.getElementById('saldo').innerHTML = 'R$150,00';
    scrollToTop();

    playAudio('assets/audio/cash.mp3');
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

    playAudio('assets/audio/cash.mp3');
}