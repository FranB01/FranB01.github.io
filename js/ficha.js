function cambiarTab(nombreTab){
    var i;
    var x = document.getElementsByClassName("tab")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(nombreTab).style.display = "block"; 
}