//Chris vars
var specialRender;
var palette;
var stars;
var flowerRot;
var starRot;
var moonClicked;
var moony;
var moonx;
var moondy;
var ebayClicked;
//Other vars

//Setup
function setup(){
	//Other setup

	//Chris Setup
	stars=[];
	starRot=0;
	flowerRot=0;
	moonClicked=false;
	ebayClicked=false;
	moondy=-4;
	moony=56;
	moonx=165;
	for(var i=0;i<200;i++){
		stars[i]=[random(-402,402),random(-402,402),random(3)]
	}
	specialRender=true;
	palette = {
		ceruleanBlue: color('#274BB5'),
		cocoaBrown: color('#1E1515'),
		green: color('#DDBBA8'),
		shark: color('#1A1F21'),
		royalBlue: color('#5385E4'),
		lightningYellow: color('#FCC817'),
	};
	createCanvas(500,700);
	background(0);
}

function draw(){
	drawChris();
	strokeWeight(1);
	push();
	translate(0,300);
	drawEbay();
	pop();
}
function mouseClicked(){
	console.log(round(mouseX)," ",round(mouseY));
	//Chris mouse position sensors
	if(sq(mouseX-408)+sq(mouseY-206) < 1000){
		specialRender=!specialRender;
	}
	if(!specialRender && sq(mouseX-165)+sq(mouseY-56) < 400){
		moonClicked=true;
	}
	//Ebay mouse position sensors
	if(mouseX>138 && mouseX<360 && mouseY>418 && mouseY<601){
		ebayClicked=!ebayClicked;
	}
}

//Chris Draw
function drawChris(){
	noStroke();
	if(specialRender){
		fill(palette.ceruleanBlue);
	}else{
		fill(palette.cocoaBrown);
	}
	rect(0,0,500,282);
	if(specialRender){
		//Stars
		starRot+=0.0002;
		if(starRot>2*PI){
			starRot-=2*PI;
		}
		push();
		translate(166,56);
		rotate(starRot);
		fill(255);
		for(var i=0;i<stars.length;i++){
			var star = stars[i];
			ellipse(star[0],star[1],star[2],star[2]);
		}
		pop();
	}
	//moon
	if(moonClicked && moony<height){
		moondy+=0.2;
		moony+=moondy;
		moonx+=0.36;
	}
	if(specialRender && !moonClicked){
		fill(255);
		ellipse(moonx,moony,40,40);
		fill(palette.ceruleanBlue);
		ellipse(moonx+5,moony,42,42);
	}else{
		fill(200);
		ellipse(moonx,moony,40,40);
	}
	fill(palette.royalBlue);
	rect(0,282,500,16);
	//flower petals
	fill(palette.shark);
	beginShape();
	curveVertex(367,231);curveVertex(371,225);curveVertex(375,218);curveVertex(371,212);curveVertex(363,207);curveVertex(359,210);
	curveVertex(356,213);curveVertex(346,214);curveVertex(340,217);curveVertex(333,222);curveVertex(328,228);curveVertex(324,233);
	curveVertex(327,237);curveVertex(333,241);curveVertex(336,244);curveVertex(339,244);curveVertex(341,246);curveVertex(344,249);
	curveVertex(352,250);curveVertex(360,254);curveVertex(364,257);curveVertex(367,251);curveVertex(367,242);curveVertex(366,233);
	curveVertex(364,228);
	endShape();
	beginShape();
	curveVertex(402,257);curveVertex(403,253);curveVertex(403,243);curveVertex(406,241);curveVertex(412,236);curveVertex(420,234);
	curveVertex(424,237);curveVertex(434,237);curveVertex(441,239);curveVertex(452,238);curveVertex(456,236);curveVertex(456,236);
	curveVertex(450,245);curveVertex(445,252);curveVertex(435,254);curveVertex(424,257);curveVertex(412,254);curveVertex(404,254);
	curveVertex(402,254);
	endShape();
	//surface flower stem
	noFill();
	stroke(color('#38472D'));
	strokeWeight(3);
	curve(401,225,392,231,390,294,391,330);
	curve(325,235,367,232,389,256,390,294);
	curve(386,274,390,270,414,247,445,249);
	noStroke();
	//flower
	if(specialRender){
		fill(color('#959ED5'));
	}else{
		fill(palette.shark);
		flowerRot+=0.06;
	}
	push();
	translate(407,208);
	rotate(flowerRot);
	for(var i=0;i<5;i++){
		rotate(0.4*PI);
		beginShape();
		curveVertex(1,5);curveVertex(-3,0);curveVertex(-9,-4);curveVertex(-14,-8);curveVertex(-19,-11);curveVertex(-22,-17);
		curveVertex(-22,-23);curveVertex(-17,-27);curveVertex(-11,-29);curveVertex(-9,-29);curveVertex(-3,-29);curveVertex(3,-23);
		curveVertex(3,-19);curveVertex(-1,-13);curveVertex(-1,-8);curveVertex(-3,3);curveVertex(-3,7);
		endShape();
	}
	fill(color(116,34,12,230));
	ellipse(0,0,13,13);
	fill(palette.lightningYellow);
	ellipse(0,0,6,6);
	pop();
	//rainbow
	if(specialRender){
		fill(color('#F13D1C'));
		triangle(167,222,500,-8,500,26);
		fill(color('#FB8510'));
		triangle(167,222,500,26,500,59);
		fill(palette.lightningYellow);
		triangle(167,222,500,59,500,114);
		fill(palette.royalBlue);
		triangle(167,222,500,114,500,140);
		fill(color(83,133,228,150));
		triangle(167,222,500,140,500,168);
	}
	//pyramid
	fill(color('#F09020'));
	triangle(134,294,156,296,164,196);
	fill(color('#CB6E0E'));
	triangle(156,296,164,196,196,294);
	//Light Beam
	if(specialRender){
		stroke(255);
		strokeWeight(2);
		line(158,221,0,170);
		noStroke();
	}
	fill(palette.cocoaBrown);
	rect(0,298,500,459);
}

function drawEbay(){
//grass
	fill(96,128,56);
	stroke(96,128,56);
	rect(0,150,500,200);

//road
	fill(50);
	stroke(50);
	rect(0,250,500,150);

	fill(255,175,0);
	stroke(255,175,0);
	rect(0,325,25,10);
	rect(75,325,50,10);
	rect(175,325,50,10);
	rect(275,325,50,10);
	rect(375,325,50,10);
	rect(475,325,50,10);

//tree
	fill(101,67,33);
	stroke(101,67,33);
	rect(75,110,10,110);

	fill(90,190,50);
	stroke(90,190,50);
	ellipse(80,100,90);
	if(ebayClicked){
		fill(240,210,170);
		noStroke();
		ellipse(280,220,220,160);
		ellipse(220,220,170,150);
		push();
			translate(200,159.5);
			rotate(-PI/13);
			fill(255,125,120,130);
			stroke(225);
			strokeWeight(2);
			ellipse(0,0,80,22);
		pop();
		fill(0,0,0,70);
		quad(280,140,280,190,282,190,282,140);
		quad(287,141,287,172,289,172,289,141);
		quad(295,142,295,183,297,183,297,142);
	}else{
		//tiresbottom
			fill(0,0,255);
			stroke(0);
			strokeWeight(3);
			rect(140,250,220,15)

		//truckTire;
			fill(90);
			strokeWeight(3);
			ellipse(170,275,50);
			ellipse(320,275,50);

			fill(255);
			ellipse(170,275,25);
			ellipse(320,275,25);

		//door
			fill(255,125,0);
			rect(250,150,75,100);
			rect(325,200,35,50);

		//doorwindow
			fill(255);
			rect(260,160,55,40);

		//headlights
			fill(255,255,0);
			ellipse(350,233,10,20);

		//Towingthingy
			fill(25,255,25);
			push();
			translate(140,130);
			rotate(-PI/4.7);
			rect(0,0,20,140);
			pop();

			fill(25,255,25);
			ellipse(235,235,30);

			line(150,144,150,210);
			ellipse(150,210,10);
			ellipse(150,220,20);

			fill(96,128,56);
			noStroke();
			ellipse(150,220,10);
			quad(155,220,150,225,125,210,131,200);
	}
}
