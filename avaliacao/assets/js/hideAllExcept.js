document.addEventListener('DOMContentLoaded', function () {
    hideAllExcept();
});

function hideAllExcept() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("nubank").style.display = "block";
    document.getElementById("bradesco").style.display = "none";
    // document.getElementById("americanas").style.display = "none";
    document.getElementById("mcdonalds").style.display = "none";
    document.getElementById("finalizacao").style.display = "none";
}