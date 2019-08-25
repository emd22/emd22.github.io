var width = window.innerWidth;
var height = window.innerHeight;
var aspect_ratio = width/height;

var solarSystem = new SolarSystem();
var flip = false;

var page = document.getElementById('page');

function getUrlVars() {
    // https://html-online.com/articles/get-url-parameters-javascript/
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function siteLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var mp = solarSystem.planets[0];
    for (var i = 0; i < solarSystem.planets.length; i++) {
        var currentPlanet = solarSystem.planets[i];
        currentPlanet.orbit(solarSystem.star)
        /*for (var j = 0; j < currentPlanet.moons.length; j++) {
            currentPlanet.moons[j].orbit(currentPlanet);
        }*/
    }
    drawAll();

    setTimeout(function () {
	    window.requestAnimationFrame(siteLoop);    
    }, 1000/30);
}

function init() {
    canvas.width = width-200;
    canvas.height = height-200;
    
    if (localStorage.getItem('usedEthanm') != undefined) {
        page.style.display = 'none';
    }
    //page.innerHTML = '<h1>welcome to the site!</h1>';
    //alert('toots');
    /*    localStorage.setItem('usedEthanm', 'true');
    }
    else {
        alert(localStorage.getItem('usedEthanm'))
    }*/
    
    window.onresize();
    
    //var urlMobile = getUrlVars()['mobile']
    
    /*if ((urlMobile == 'false' || urlMobile === undefined) && !mobile) {
    }*/
    
    document.getElementById('canvas').className += " loaded";
    solarSystem.populatePlanets();
}

function hideStartForever() {
    localStorage.setItem('usedEthanm', 'true');
    page.style.display = 'none';
}

window.onload = function () {
    document.getElementById("loading_text").style.display = "none";
    init();
    siteLoop();
}

window.onresize = function () {
    if (window.innerHeight < 325) {
        return;
    }
    width = window.innerWidth;
    height = window.innerHeight;
    aspect_ratio = width/height;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if (aspect_ratio < 1 || mobile) {
        document.getElementById('info').innerHTML = 'Mobile';
        page.classList.add('mobile');
        
    }
    else {
        page.classList.remove('mobile');
    }
    
    solarSystem.star.obj.x = canvas.width/2;
    solarSystem.star.obj.y = canvas.height/2;
    for (var i = 0; i < solarSystem.planets.length; i++) {
        solarSystem.planets[i].orbitLine.x = canvas.width/2;
        solarSystem.planets[i].orbitLine.y = canvas.height/2;   
    }
}
