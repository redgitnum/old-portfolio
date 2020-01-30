let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let projectInfos = document.getElementsByClassName('info-page');
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onresize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

let show = (e) => {
    if(e.className!=='hexagon active-hex') {
        for(let singleBox of projectInfos) {
            singleBox.style.display='none'
        }
        about.className='hexagon about-right-inactive';
        about.childNodes[3].className = 'content-box';
        projects.className='hexagon projects-inactive';
        projects.childNodes[3].className = 'content-box';
        contact.className='hexagon contact-inactive';
        contact.childNodes[3].className = 'content-box';

        let activeOne = document.getElementById(e.id);
        if(e.id === 'contact') {
            activeOne.className='hexagon active-hex';
            about.className='hexagon about-left-inactive';
            activeOne.childNodes[3].className = 'content-box-open';
        }
            activeOne.className='hexagon active-hex'
            activeOne.childNodes[3].className = 'content-box-open';
        }
}

let showInfo = (e) => {
    for(let singleBox of projectInfos) {
        singleBox.style.display = 'none'
    }
    let target = document.getElementById(e.id+'-info');
    target.style.display = 'flex';
}

let closeInfo = (e) => {
    e.parentNode.style.display = 'none';
}

let hover = (e) => {
    if(e.className !== 'hexagon active-hex'){
        e.parentNode.className = 'hex-container'; 
    }
}

let resetStyle = (e) => {
    e.parentNode.className = 'hex-container-idle'; 
}
