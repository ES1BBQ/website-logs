(function () {
    let a = "abcdefghijklmnopqrstuvwx"
    var qth = document.getElementById("qth");

    var calcQTH = function (pos) {
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;

        lng_a = lng + 180;
        lat_a = lat + 90;

        qth_1 = a[Math.trunc(lng_a/20)].toUpperCase();
        qth_2 = a[Math.trunc(lat_a/10)].toUpperCase();
        qth_3 = Math.trunc(lng_a/2 % 10);
        qth_4 = Math.trunc((lat_a) % 10);

        lng_b = (lng_a - 2*Math.trunc(lng_a/2)) * 12;
        lat_b = (lat_a - Math.trunc(lat_a)) * 24;

        qth_5 = a[Math.trunc(lng_b)];
        qth_6 = a[Math.trunc(lat_b)];
        qth_7 = Math.trunc( (lng_b - Math.trunc(lng_b)) * 10 );
        qth_8 = Math.trunc( (lat_b - Math.trunc(lat_b)) * 10 );

        qth.innerHTML = ''.concat(qth_1,qth_2,qth_3,qth_4,qth_5,qth_6,qth_7,qth_8);

    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(calcQTH);
    } else {
        qth.innerHTML = "Geolocation is not supported by this browser.";
    }
})();