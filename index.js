//Create a 'close' button and append it to each list item

const myNodelist = document.querySelectorAll("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Hey..um, you haven't wrote anything..");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Add a 'checked' symbol when clicking on a list name
const list = document.querySelector('myUL');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked')
    }
}, false);

