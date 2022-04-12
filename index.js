/*Hàm Mở Form*/
function openForm() {
    document.getElementById("myIcon").style.display = "block";
}

function closeForm() {
    document.getElementById("myIcon").style.display = "none";
}
let btnClose = document.getElementById("close");
let myForm;

function closeForm() {
    // $("div[id=myForm]").css("display", "none");
    $("div[id=myForm]").css("opacity", "0");
    console.log("aaa");

}
//Drap and drop
dragElement(document.getElementById("myForm"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        // pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        // pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Open Form
var btnIcon = document.querySelector('.open-button')

function toggleModal() {
    modal.classList.toggle('hide')
}
btnIcon.addEventListener('click', toggleModal);