alert("⚠️⚠️⚠️This Website is not Optimized Dynamically,So kindly adjust your view scal\nTo adjust scale press CTRL - or ctrl + \nIt will be optimized soon\nSorry For Inconvenience😕");




var tablinks = document.getElementsByClassName("tab-options");
var tabconts = document.getElementsByClassName("tab-contents");
function opencontents(name){
    for(tablink of tablinks){
        tablink.classList.remove("active");
}
    for(tabcont of tabconts)
        {
        tabcont.classList.remove("active_content");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("active_content")
}




const image1 = document.getElementById('myimg1');

image1.addEventListener('mouseenter', zoomin);
image1.addEventListener('mouseleave', zoomout);


function zoomin() {
    image1.style.transform = 'scale(1.3)'; 
}


function zoomout() {
    image1.style.transform = 'scale(1)';
}


// ****************


const image2 = document.getElementById('personalweb');

image2.addEventListener('mouseenter', zoomin_2);
image2.addEventListener('mouseleave', zoomout_2);

function zoomin_2() {
    image2.style.transform = 'scale(1.3)';
}
function zoomout_2() {
    image2.style.transform = 'scale(1)';
}

// *******************************

const img3 = document.getElementById('library');
img3.addEventListener('mouseenter', zoomin_3);
img3.addEventListener('mouseleave', zoomout_3);
function zoomin_3() {
    img3.style.transform = 'scale(1.3)';
}
function zoomout_3() {
    img3.style.transform = 'scale(1)'; 
}

// *********************
const img4 = document.getElementById('game');
img4.addEventListener('mouseenter', zoomin_4);
img4.addEventListener('mouseleave', zoomout_4);
function zoomin_4() {
    img4.style.transform = 'scale(1.3)';
}
function zoomout_4() {
    img4.style.transform = 'scale(1)';
}



