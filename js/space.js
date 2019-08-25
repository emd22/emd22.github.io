function randomRange(start, end) {
    return (Math.random() * (end-start)+start);
}

function rad(degrees) {
    return (degrees * (Math.PI / 120));
}

function Body(circleRadius, randomColour=true) {
    this.obj = new Circle();
    this.obj.radius = circleRadius;
    
    var innerColours = ['#FF00AA', '#FFDD55', '#66FF00'];
    var outerColours = ['#AA0088', '#CCAA33', '#33CC00'];
    
    if (randomColour) {
        var index = Math.floor(randomRange(0, innerColours.length));
        this.obj.fillColour = innerColours[index];
        this.obj.edgeColour = outerColours[index];
    }

    this.mass = 5.5-(circleRadius * 0.2);
    this.orbitAngle = 0; // degrees relative to x axis
	this.orbitRadius = randomRange(30, 70);
	
	this.orbitLine = new Circle();
    
    this.moons = [];
}

Body.prototype.orbit = function (primary) {
    //this.mesh.position.x = (primary.mesh.position.x + this.orbitRadius * Math.cos(rad(this.orbitAngle)));
    //this.mesh.position.z = (primary.mesh.position.z + this.orbitRadius * Math.sin(rad(this.orbitAngle)));

    this.obj.x = (primary.obj.x + (this.orbitRadius*(canvas.height * 0.001)) * Math.cos(rad(this.orbitAngle)));
    this.obj.y = (primary.obj.y + (this.orbitRadius*(canvas.height * 0.001)) * Math.sin(rad(this.orbitAngle)));
	// add mass to orbit angle to move the object. when orbit angle = 240, reset
    this.orbitAngle = ((this.orbitAngle + (this.mass * 0.5)) % 240);
}

function SolarSystem() {
    var innerColours = ['#000080'];
    var outerColours = ['#000060'];
    var index = Math.floor(randomRange(0, innerColours.length));
    
    this.star = new Body(70, false);
    
    if (randomRange(0, 2) == 1) {
        this.star.obj.fillColour = innerColours[index];
        this.star.obj.edgeColour = outerColours[index];
        console.log('winner!!!');
    }
    this.star.obj.level = 1;
    drawStack.push(this.star.obj);
    
    this.planets = [];
    this.orbitLevels = Math.floor(randomRange(1, 6));
}

SolarSystem.prototype.populatePlanets = function (planets) {
    //var planetCount = Math.floor(randomRange(1, 5));
    console.log('adding '+this.orbitLevels+' planets');
    
    for (var i = 0; i < this.orbitLevels; i++) {
        var newPlanet = new Body(randomRange(15, 25));
        //var moonCount = Math.floor(randomRange(0, 4))
        newPlanet.level = 3;
        
        /*for (var j = 0; j < moonCount; j++) {
            var newMoon = new Body(5);
            newMoon.orbitRadius = 55;
            newMoon.level = 0;
            newPlanet.moons.push(newMoon);
            drawStack.push(newMoon.obj);
        }*/
        newPlanet.orbitRadius = 120+(i*50);
        newPlanet.orbitAngle += i*(240/this.orbitLevels);
        
        newPlanet.orbitLine.fill = false;
	    newPlanet.orbitLine.lineWidth = 2;
	    newPlanet.orbitLine.level = 0;
	    newPlanet.orbitLine.radius = newPlanet.orbitRadius;
	    newPlanet.orbitLine.edgeColour = newPlanet.obj.edgeColour;
	    drawStack.push(newPlanet.orbitLine);
        drawStack.push(newPlanet.obj);
        
        this.planets.push(newPlanet);
    }
}
