const cityMark = { lat: 48.01818765301029, lng: 33.066987770685095 };
const markers = [
     {lat: 47.89794315203629, lng: 33.33144490029106},
     {lat: 48.006310, lng: 33.474967},
     {lat: 47.942331183475844, lng: 33.41976795682561},
     {lat: 47.90496956638132, lng: 33.337805479969916},
     {lat: 47.90489908349975, lng: 33.34230744223397},
     {lat: 48.10614520383011, lng: 33.53366473547281},
     {lat: 48.14786395098501, lng: 33.58025468124332},
     {lat: 47.98990147767701, lng: 33.46247425123711},
]

function initMap() {

    const map = new google.maps.Map(document.getElementById("map__container"), {
        zoom: 10,
        center: cityMark,
    });

    for (let i = 0; i < markers.length; i++){
        const marker = new google.maps.Marker({
            position: markers[i],
            map: map,
        });

    }    


    // const secondMarker = new google.maps.Marker({
    //     position: secondMark,
    //     map: map,
    // });

    // const thirdMarker = new google.maps.Marker({
    //     position: thirdMark,
    //     map: map,
    // });

    // const fourthMarker = new google.maps.Marker({
    //     position: fourthMark,
    //     map: map,
    // });

    // const fifthMarker = new google.maps.Marker({
    //     position: fifthMark,
    //     map: map,
    // });

    // const sixthMarker = new google.maps.Marker({
    //     position: sixthMark,
    //     map: map,
    // });

    // const seventhMarker = new google.maps.Marker({
    //     position: seventhMark,
    //     map: map,
    // });

    // const eighthMarker = new google.maps.Marker({
    //     position: eighthMark,
    //     map: map,
    // });


}

window.initMap = initMap;
