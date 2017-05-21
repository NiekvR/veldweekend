$(document).ready(function(){
    $('head').append('<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,height=device-height,target-densitydpi=device-dpi,user-scalable=yes" />');
    
    $("#submenu > div").hide();
    $("#content > div").hide();
    $('.subcontent_birds').hide();
    $(".menu").click(function() {
        toggleNav();
    });
    $(".onderweg").click(function() {
        openSubmenu(1);
    });
    $(".programma").click(function() {
        openSubmenu(2);
        $('.sm_programma').css('z-index', '2');
    });
    $(".area").click(function() {
        openSubmenu(3);
    });
    $(".flora").click(function() {
        openSubmenu(4);
    });
    $(".fauna").click(function() {
        openSubmenu(5);
    });
    $(".smallmenu").click(function() {
        openNavFromSmallMenu();
    });
    $(".sudoku").click(function() {
        openContent("sudoku");
    });
    $(".zoeker").click(function() {
        openContent("zoeker");
    });
    $(".camping").click(function() {
        openContent("camping");
        initializeCampingMap();
    });
    $(".weather").click(function() {
        openContent("weather");
    });
    $(".schema").click(function() {
        openContent("schema");
    });
    $(".routes").click(function() {
        openContent("routes");
        initializeMap();
        firstRoute();
    });
    $(".route_first").click(function() {
        firstRoute();
    });
    $(".route_second").click(function() {
        secondRoute();
    });
    $(".route_third").click(function() {
        thirdRoute();
    });
    $(".route_fourth").click(function() {
        fourthRoute();
    });
    $('.first-route').click(function(e) {
        e.preventDefault();
        openContent("routes");
        initializeMap();
        firstRoute();
    });
    $('.second-route').click(function(e) {
        e.preventDefault();
        openContent("routes");
        initializeMap();
        secondRoute();
    });
    $('.third-route').click(function(e) {
        e.preventDefault();
        openContent("routes");
        initializeMap();
        thirdRoute();
    });
    $('.four-route').click(function(e) {
        e.preventDefault();
        openContent("routes");
        initializeMap();
        fourthRoute();
    });
    $(".gb_informatie").click(function() {
        openContent("gb_informatie");
    });
    $(".maastricht").click(function() {
        openContent("maastricht");
    });
    $(".politiek").click(function() {
        openContent("politiek");
    });
    $(".geologie").click(function() {
        openContent("geologie");
    });
    $(".algemeen").click(function() {
        openContent("algemeen");
    });
    $(".arme_grond").click(function() {
        openContent("arme_grond");
    });
    $(".vegetatietypen").click(function() {
        openContent("vegetatietypen ");
    });
    $(".planten").click(function() {
        openContent("planten");
    });
    $(".mammals").click(function() {
        openContent("mammals");
    });
    $(".birds").click(function() {
        $('.subcontent_birds').hide();
        $('.content_birds_intro').show();
        openContent("birds");
    });
    $(".overig").click(function() {
        openContent("overig");
    });
    $(".wespendief").click(function() {
        $('.subcontent_birds').hide();
        $(".content_wespendief").show();
    });
    $(".zwartespecht").click(function() {
        $('.subcontent_birds').hide();
        $(".content_zwartespecht").show();
    });
    $(".boomleeuwerik").click(function() {
        $('.subcontent_birds').hide();
        $(".content_boomleeuwerik").show();
    });
    $(".oehoe").click(function() {
        $('.subcontent_birds').hide();
        $(".content_oehoe").show();
    });
    $('#uithangt').click(function() {
        $('.onderwegbent').hide();
    });

    $('#onderwegbent').click(function() {
        $('.uithangt').hide();
    });

    $('.searchImg').click(function() {
         $(this).css('background-color','#f2c500');
    })
});
var activeMenu = 0;
var navOpen = false;
function toggleNav(){
    if (navOpen == false) {
        openNav();
        navOpen = true;
    } else {
        closeNav();
        navOpen = false;
    }
}

function openNavFromSmallMenu() {
    activeMenu = 0;
    $("#footer > ul").animate({
        bottom: "0px"
    });
    $("#footer > ul > li").show();
    $(".smallmenu").css("left", "-50px");
}
/* Set the position of the navigation to 0 from bottom */
function openNav() {
    activeMenu = 0;
    $("#footer > ul").animate({
        bottom: "0px"
    });
}

/* Set the position of the side navigation to -250px from bottom */
function closeNav() {
    $("#footer > ul").animate({
        bottom: "-250px"
    });
    resetMenuItems();
}

function openSubmenu(childNumber) {
    if(activeMenu == childNumber) {
        $("#submenu > div:nth-child("+childNumber+")").show("fast")
    } else {
        $("#footer > ul").animate({
            bottom: "-250px"
        }, {
            complete: function() {
                $("#submenu > div:nth-child("+childNumber+")").show("fast")
            }
        });
        for(i = 1; i <= childNumber; i++) {
            $("#footer > ul > li:nth-child("+i+")").hide(400);
        }
        $(".smallmenu").animate({
            left: "5px"
        });
        resetMenuItems();
    }
    activeMenu = childNumber;
}

function resetMenuItems() {
    $("#content").animate({
        left: "-100%"
    });
    $(".sm_onderweg").first().hide("fast", function showNext() {
        $( this ).next( "div" ).hide( "fast", showNext );
    });
    $("#content > div").hide();
}

function openContent(content_tab) {
    $("#content > div").hide();
    $(".content_" + content_tab).show();
    if(content_tab == "sudoku") {
        setUpSudoku();
    };
    $("#content").animate({
        left: "0"
    });
    $(".sm_onderweg").first().hide("fast", function showNext() {
        $( this ).next( "div" ).hide( "fast", showNext );
    });
}
var directionsDisplay;

function initializeMap() {
    var map;

    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: {lat: 50.903535, lng: 5.633004},
        zoom: 13,
        mapTypeId: 'hybrid'
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
}

function firstRoute() {
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: {lat: 50.906948, lng: 5.639857},
        destination: {lat: 50.906948, lng: 5.639857},
        waypoints: [
            {
                location: {lat: 50.927243, lng: 5.635093},
                stopover: false
            }
        ],
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}

function secondRoute() {
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: {lat: 50.906948, lng: 5.639857},
        destination: {lat: 50.906948, lng: 5.639857},
        waypoints: [
            {
                location: {lat: 50.914677, lng: 5.655179},
                stopover: false
            },
            {
                location: {lat: 50.959985, lng: 5.631001},
                stopover: false
            },
            {
                location: {lat: 50.955864, lng: 5.628585},
                stopover: false
            },
            {
                location: {lat: 50.914520, lng: 5.614108},
                stopover: false
            }
        ],
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}


function thirdRoute() {
    var directionsService = new google.maps.DirectionsService();
   
    var request = {
        origin: {lat: 50.903535, lng: 5.633004},
        destination: {lat: 50.903535, lng: 5.633004},
        waypoints: [
            {
                location: {lat: 50.850033, lng: 5.688860},
                stopover: true
            },
            {
                location: {lat: 50.821066, lng: 5.685999},
                stopover: false
            },
            {
                location: {lat: 50.850094, lng: 5.675754},
                stopover: false
            },
            {
                location: {lat: 50.875961, lng: 5.662337},
                stopover: false
            }
        ],
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}

function fourthRoute() {
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: {lat: 50.977656, lng: 5.659131},
        destination: {lat: 50.977656, lng: 5.659131},
        waypoints: [
            {
                location: {lat: 50.981183, lng: 5.641522},
                stopover: false
            },
            {
                location: {lat: 50.980367, lng: 5.631955},
                stopover: false
            },
            {
                location: {lat: 50.977959, lng: 5.640194},
                stopover: false
            },
            {
                location: {lat: 50.972514, lng: 5.656136},
                stopover: false
            }
        ],
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}

function initializeCampingMap() {
    var map;

    var mapOptions = {
        center: {lat: 50.903535, lng: 5.633004},
        zoom: 15,
        mapTypeId: 'hybrid',
        mapTypeControl: false,
        streetViewControl: false,
    }
    map = new google.maps.Map(document.getElementById('mapCamping'), mapOptions);
    var marker = new google.maps.Marker({
        position: {lat: 50.904241, lng: 5.633747},
        map: map,
        title: 'Jocomo Parc'
    });    
}