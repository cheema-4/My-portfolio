


alert("⚠️⚠️⚠️This Website is not Optimized Dynamically,So kindly adjust your view scale\nTo adjust scale press CTRL - or ctrl + \nIt will be optimized soon\nSorry For Inconvenience😕\n");

const piczoom = document.getElementsByClassName('imgz')

piczoom.addEventListener('mouseenter', zoomin);
piczoom.addEventListener('mouseleave', zoomout);

function zoomin() {
    piczoom.style.transform = 'scale(1.2)'; 
}


function zoomout() {
    piczoom.style.transform = 'scale(1)'; 
}


