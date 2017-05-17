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
    });
    $(".schema").click(function() {
        openContent("schema");
    });
    $(".routes").click(function() {
        openContent("routes");
        $('.map').hide();
        initializeFirstRoute();
    });
    $(".route_second").click(function() {
        $('.map').hide();
        $('#mapTwo').show();
        initializeSecondRoute();
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
    $('#uithangt').click(function() {
        $('.onderwegbent').hide();
    });

    $('#onderwegbent').click(function() {
        $('.uithangt').hide();
    });
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

function initializeFirstRoute() {

    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: {lat: 50.903535, lng: 5.633004},
        zoom: 13,
        mapTypeId: 'satellite'
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
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

function initializeSecondRoute() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: {lat: 50.903535, lng: 5.633004},
        zoom: 13,
        mapTypeId: 'satellite'
    }
    map = new google.maps.Map(document.getElementById('mapTwo'), mapOptions);
    directionsDisplay.setMap(map);
    var request = {
        origin: {lat: 50.906948, lng: 5.639857},
        destination: {lat: 50.927243, lng: 5.635093},
        waypoints: [
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
