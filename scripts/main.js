// template_y0eeyyb
// service_tq3b6ed
// user_TVJp4mNWhM8sBscFJU4nR

// import{ init } from 'emailjs-com';
// init("user_TVJp4mNWhM8sBscFJU4nR");

var projIBlur   = $("#backgroundI");
var descriptI   = $("#descriptionI");
var projImgI    = $("#projectImgI");
var loading     = $(".loading");
var success     = $(".success");
var modal       = $(".modal");
var overlay     = $(".overlay");
var contrast    = $(".fa-adjust");
var shapes      = $(".shape");
const scaleFact = 1 / 20;


projIBlur.mouseenter (
    function () {
        projIBlur.css("opacity", "0.7");
        descriptI.css("transform", "translateY(-50%)");
        projImgI.css("filter", "blur(5px)");
        projImgI.css("transform", "scale(1.07)");
    }
);
projIBlur.mouseleave (
    function () {
        projIBlur.css("opacity", "0");
        descriptI.css("transform", "translateY(175%)");
        projImgI.css("filter","none");
        projImgI.css("transform", "scale(1)");
    }
);

function contact(event) {
    event.preventDefault();
    loading.css("z-index", "1");
    emailjs.sendForm(
        "service_tq3b6ed",
        "template_y0eeyyb",
        event.target,
        "user_TVJp4mNWhM8sBscFJU4nR"
    ).then(() => {
        // throw new Error("error");
        console.log("This email sent");
        overlay.css("display", "flex");
        loading.css("z-index", "-1");
        success.css("z-index", "1")
    }).catch(() => {
        overlay.css("display", "flex");
        loading.css("z-index", "-1");
        success.html("Whoops!\nLooks like I've recieved too many emails this month.\nPlease contact me directly at\nHayden@LugoWebDevelopment.com.\nThank you for your time and I apologize about the inconvenience")
        success.css("font-size", "24px");
        success.css("z-index", "1");
    });
}

function toggleModal() {
    modal.toggleClass("modalOpen");
    $("body").toggleClass("open");
}

function toggleContrast() {
    $("body").toggleClass("dark");
}
function moveBackground(event) {
    const shapesII = document.querySelectorAll(".shape");
    var xPos = event.clientX * scaleFact;
    var yPos = event.clientY * scaleFact;
    for (let i=0; i < shapes.length; i++) {
        const isOdd = i % 2 !==0;
        var oddInt;
        if (isOdd) {
            oddInt = 1;
        } else {
            oddInt = -1;
        }
        xPos = xPos * oddInt;
        yPos = yPos * oddInt;
        shapesII[i].style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
}