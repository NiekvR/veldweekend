$(document).ready(function(){
    $('head').append('<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,height=device-height,target-densitydpi=device-dpi,user-scalable=yes" />');
    
    $("#submenu > div").hide();
    $("#content > div").hide();
    $(".menu").click(function() {
        toggleNav();
    });
    $(".onderweg").click(function() {
        openSubmenu(1);
    });
    $(".camping").click(function() {
        openSubmenu(2);
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
    $(".birds").click(function() {
        openContent("birds");
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
    resetMenuItems();
}

function openSubmenu(childNumber) {
    if(activeMenu == childNumber) {
        //Do Nothing
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