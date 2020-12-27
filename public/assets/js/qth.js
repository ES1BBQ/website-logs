(function(){
    let a = "abcdefghijklmnopqrstuvwx"
    var qth = document.getElementById("qth");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        qth.innerHTML = "Geolocation is not supported by this browser.";
    }
})();