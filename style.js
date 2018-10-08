

$(document).ready(function() {
    // fix menu when passed
    $(".masthead").visibility({
        once: false,
        onBottomPassed: function() {
            $(".fixed.menu").transition("fade in")
        },
        onBottomPassedReverse: function() {
            $(".fixed.menu").transition("fade out")
        }
    })

    // create sidebar and attach to menu open
    $(".ui.sidebar").sidebar("attach events", ".toc.item")

    $(".ui.accordion").accordion()
})



$(document).ready(function() {
    var scroll_start = 0
    var startchange = $("#startchange1")
    var offset = startchange.offset()
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop()
        if (scroll_start > offset.top) {
            $(".bg-secon-menu0").css("background-color", "#fff")
            $(".bg-secon-menu0").css("box-shadow", "0px 1px 10px #00000040")
            $(".bg-secon-menu02").css("color", "#1474DF")
            $(".pad-index img").attr("src", "./assets/logo-top.png")
        } else {
            $(".bg-secon-menu0").css("background-color", "#1474DF")
            $(".bg-secon-menu02").css("color", "#fff")
            $(".bg-secon-menu0").css("box-shadow", "0px 0px 0px #1474DF")
            $(".pad-index img").attr("src", "./assets/logo.png")
        }
    })
})


$(document).ready(function() {
    var scroll_start = 0
    var startchange = $("#startchange2")
    var offset = startchange.offset()
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop()
        if (scroll_start > offset.top) {
            $(".bg-secon-menu0").css("background-color", "#fff")
            $(".bg-secon-menu0").css("box-shadow", "0px 1px 10px #00000040")
            $(".bg-secon-menu02").css("color", "#1474DF")
            $(".img-change img").attr("src", "./assets/logo-top.png")
        } else {
            $(".bg-secon-menu0").css("background-color", "#00000040")
            $(".bg-secon-menu02").css("color", "#fff")
            $(".bg-secon-menu0").css("box-shadow", "0px 0px 0px #1474DF")
            $(".img-change img").attr("src", "./assets/logo.png")
        }
    })
})



$(".ui.embed").embed()

function change() {
    $(".ui.embed").embed("change", "vimeo", "125292332")
}

var e = document.getElementById("change")
e.onclick = change

function newembed() {
    $(".ui.embed").embed({
        source: "vimeo",
        id: "125292332",
        placeholder: "https://semantic-ui.com/images/vimeo-example.jpg"
    })
}
var e = document.getElementById("newembed")
e.onclick = newembed


UPLOADCARE_LOCALE = "en"
UPLOADCARE_TABS =
    "file url facebook gdrive gphotos dropbox instagram evernote flickr skydrive"
UPLOADCARE_PUBLIC_KEY = "813177f93f8d6c54563d"
UPLOADCARE_LOCALE_TRANSLATIONS = {
    buttons: {
        cancel: "Cancel",
        remove: "Remove",
        choose: {
            files: {
                one: "Upload a CV",
                other: "Uplaod CV & Resume"
            },
            images: {
                one: "Choose an image",
                other: "Choose images"
            }
        }
    }
}




$(document).ready(function() {
var scroll_start = 0
var startchange = $("#startchange3")
var offset = startchange.offset()
$(document).scroll(function() {
scroll_start = $(this).scrollTop()
if (scroll_start > offset.top) {
$(".bg-secon-menu0").css("background-color", "#fff")
$(".bg-secon-menu0").css("box-shadow", "0px 1px 10px #00000040")
$(".join-burger").css("color", "#1474DF")
$(".pad-index img").attr("src", "./assets/logo-top.png")
} else {
$(".bg-secon-menu0").css("background-color", "#132A445f")
$(".join-burger").css("color", "#fff")
$(".bg-secon-menu0").css("box-shadow", "0px 0px 0px #1474DF")
$(".pad-index img").attr("src", "./assets/logo.png")
}
})
})
