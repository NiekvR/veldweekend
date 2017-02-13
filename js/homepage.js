$(document).ready(function(){
    $("#submenu > div").hide();
    $(".menu").click(function() {
        toggleNav();
    });
    $(".onderweg").click(function() {
        openOnderweg(1);
    });
    $(".camping").click(function() {
        openOnderweg(2);
    });
    $(".area").click(function() {
        openOnderweg(3);
    });
    $(".flora").click(function() {
        openOnderweg(4);
    });
    $(".fauna").click(function() {
        openOnderweg(5);
    });
    $(".smallmenu").click(function() {
        openNavFromSmallMenu();
    });
    $(".sudoku").click(function() {
        openContent();
    });
});
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
    $("#footer > ul").animate({
        bottom: "0px"
    });
    $("#footer > ul > li").show();
    $(".smallmenu").css("left", "-50px");
}
/* Set the position of the navigation to 0 from bottom */
function openNav() {
    $("#footer > ul").animate({
        bottom: "0px"
    });
}

/* Set the position of the side navigation to -250px from bottom */
function closeNav() {
    $("#footer > ul").animate({
        bottom: "-250px"
    });
}

function openOnderweg(childNumber) {
    $("#footer > ul").animate({
        bottom: "-250px"
    }, {
        complete: function() {
            $(".sm_onderweg").first().show("fast", function showNext() {
                $( this ).next( "div" ).show( "fast", showNext );
            });
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

function resetMenuItems() {
    $("#content").animate({
        left: "-100%"
    });
    $(".sm_onderweg").first().hide("fast", function showNext() {
        $( this ).next( "div" ).hide( "fast", showNext );
    });
}

function openContent() {
    $("#content").animate({
        left: "0"
    });
    $(".sm_onderweg").first().hide("fast", function showNext() {
        $( this ).next( "div" ).hide( "fast", showNext );
    });
}