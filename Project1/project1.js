//MAKE DOG BARK, THEN LEAVES FALL FROM TREES.

var count = 0;
var pinkColor,whiteColor,greenColor,yellowColor,brownColor;
var deerSize = 1;
function setup(){
	createCanvas(900,640);
	background(255);
	pinkColor=color('#FD5B68');
	whiteColor=color('#F5F5F5');
	greenColor=color('#798543');
	yellowColor=color('#F9B016');
	deerColor=color('#724438');
	treeColor=color('#744C40');
	noStroke();
}

function draw(){
	sky();
	clouds();
	push();
		translate(500,0);
		clouds();
	pop();
	hills();
	trees();
	deer();
	push();
		translate(500,190);
		scale(0.8);
		dog();
		human();
		//text();
	pop();
	drawLeaves();
	love();
	push();
	translate(500,50);
		unAveugle();
	pop();
	if(count>400){
		count=0;
		bark();
	}else{
		if(barkVar>0){
			barkVar-=1;
				dogBarkAnimation();
		}
		count+=1;
	}
}
function dogBarkAnimation(){
	translate(825,535);
	strokeWeight(2);
	stroke(255);
	line(5,5,20,20);
	line(5,-5,20,-20);
	line(-5,5,-20,20);
	line(-5,-5,-20,-20);
	line(0,7,0,26);
	line(0,-7,0,-26);
	line(7,0,26,0);
	line(-7,0,-26,0);
}
var barkVar=0;
var leafGroups = [];
function bark(){
	barkVar=10;
	var newLeaves = [];
	for(var i=0;i<10;i++){
		newLeaves.push(random(0,width),random(0,100));
	}
	leafGroups.push(10,newLeaves);
}
function drawLeaves(){
	for(var i=0;i<leafGroups.length;i+=2){
		leafGroups[i]+=2;
		if(leafGroups[i]>height){
			leafGroups.shift();
			leafGroups.shift();
		}else{
			push();
			translate(0,leafGroups[i]);
			var leafList = leafGroups[i+1];
			for(var j=0;j<leafList.length;j++){
				push();
				translate(leafList[2*j],leafList[2*j+1]);
				drawLeaf();
				pop();
			}
			pop();
		}
	}
}
function drawLeaf(){
	rotate(1.8);
	fill(255, 165, 0)
	stroke(255, 165, 0)
	ellipse(0,0,15,35)
	triangle(-3.1,-15,3.1,-15,0,-20)
	fill(0)
	stroke(0)
	strokeWeight(.7)
	line(0,-20,0,25)
}
function mouseClicked(){
	bark();
}

function sky(){
	noStroke();
	fill(255,91,104);
	rect(0,0,width,height);
	var radius=300;
	var deltag=(255-91)/radius;
	var deltab=(255-104)/radius;
	while(radius-=4>0){
		fill(255,255-(radius*deltag),255-(radius*deltab));
		ellipse(250,400,radius,radius);
	}
}
function clouds(){
	noStroke();
	fill(color('#797898'));
	var cloudData = [
		[49,190,50],
		[16,242,30],
		[205,322,15],
		[263,203,45],
		[274,263,30],
		[410,325,20],
		[434,355,10],
		[85,315,30],
	]
	for(var i=0;i<cloudData.length;i++){
		push();
		translate(cloudData[i][0],cloudData[i][1])
		scale(cloudData[i][2]);
		drawCloud();
		pop();
	}
	push();
	translate(100,180)
	scale(50,-30);
	drawCloud();
	pop();
	push();
	translate(340,180)
	scale(60,-40);
	drawCloud();
	pop();
}
function drawCloud(){
	ellipse(0,0,2,2);
	ellipse(-1,0.3,1.5,1.5);
	ellipse(+1,0.3,1.5,1.5);
	ellipse(-1.8,0.5,1,1);
	ellipse(+1.8,0.5,1,1);
	ellipse(+2.3,0.6,0.7,0.7);
	ellipse(-2.3,0.6,0.7,0.7);
	ellipse(+2.6,0.7,0.4,0.4);
	ellipse(-2.6,0.7,0.4,0.4);
	ellipse(+2.8,0.7,0.4,0.4);
	ellipse(-2.8,0.7,0.4,0.4);
	ellipse(+3,0.75,0.3,0.3);
	ellipse(-3,0.75,0.3,0.3);
}
function hills(){
	noStroke();
	beginShape();
	fill(yellowColor);
	quad(900,362,0,414,0,640,900,640);
	stroke(255);
	strokeWeight(8);
	noFill();
	beginShape();
    curveVertex(186,445);curveVertex(228,429);curveVertex(257,424);curveVertex(316,428);curveVertex(348,449);curveVertex(402,475);curveVertex(444,478);
	curveVertex(498,474);curveVertex(542,463);curveVertex(591,438);curveVertex(620,438);curveVertex(651,446);curveVertex(698,460);curveVertex(736,469);
	curveVertex(686,528);curveVertex(636,546);curveVertex(586,546);curveVertex(545,511);curveVertex(510,492);curveVertex(479,485);curveVertex(463,478);curveVertex(463,478);
    endShape();
	noStroke();
	fill(greenColor)
	beginShape();
	vertex(0,356);vertex(11,346);vertex(30,333);vertex(54,312);vertex(71,308);vertex(106,318);vertex(119,326);vertex(131,333);vertex(147,342);vertex(167,354);
	vertex(183,371);vertex(202,382);vertex(215,398);vertex(228,410);vertex(246,432);vertex(260,453);vertex(272,481);vertex(286,506);vertex(291,520);vertex(332,502);
	vertex(368,492);vertex(401,485);vertex(430,480);vertex(446,482);vertex(454,487);vertex(471,494);vertex(486,502);vertex(523,517);vertex(550,533);vertex(570,505);
	vertex(597,478);vertex(640,459);vertex(686,450);vertex(706,450);vertex(726,456);vertex(751,467);vertex(765,453);vertex(779,432);vertex(797,413);vertex(821,401);
	vertex(839,382);vertex(854,368);vertex(871,354);vertex(885,342);vertex(894,338);vertex(905,337);vertex(900,640);vertex(0,640);
	endShape();
}
function trees(){
	noStroke();
	fill(treeColor);
	var treeData = [
		[33,483,30],
		[378,642,35],
		[301,625,24],
		[105,456,15],
		[152,446,10],
		[75,385,10],
		[462,539,15],
		[552,592,25],
		[622,496,15],
		[800,535,30],
		[878,420,15],
		[895,593,40]
	]
	for(var i=0;i<treeData.length;i++){
		push();
		translate(treeData[i][0],treeData[i][1])
		scale(treeData[i][2],-1);
		drawTree();
		pop();
	}
}
function drawTree(){
	rect(0,0,1,1000);
}
function deer(){
	push();
	translate(82,624);
	scale(deerSize);
	fill(deerColor);
	noStroke();
	deer1();
	deer2();
	pop();
}
function deer1(){
	//To create this part, I made a seperate p5.js applet where whenever you click, it logs a translation of the cursor position
	//inside of the vertex command and appends that to a string. I then outlined the reference image with the mouse, and logged
	//the string when i was done, then pasted that text into here.
	beginShape();
	vertex(-69,4);vertex(-72,-35);vertex(-67,-59);vertex(-56,-85);vertex(-44,-114);vertex(-34,-170);vertex(-20,-184);
	vertex(20,-195);vertex(40,-192);vertex(64,-191);vertex(94,-191);vertex(117,-207);vertex(152,-267);vertex(149,-307);
	vertex(153,-294);vertex(160,-308);vertex(157,-296);vertex(153,-291);vertex(155,-281);vertex(160,-289);vertex(157,-279);
	vertex(156,-274);vertex(163,-280);vertex(166,-274);vertex(168,-278);vertex(162,-287);vertex(168,-283);vertex(169,-289);
	vertex(165,-304);vertex(172,-295);vertex(176,-307);vertex(175,-291);vertex(173,-276);vertex(172,-267);vertex(168,-257);
	vertex(204,-237);vertex(201,-222);vertex(167,-223);vertex(148,-160);vertex(140,-139);vertex(123,-119);vertex(111,-111);
	vertex(95,-109);vertex(98,-103);vertex(91,-14);vertex(99,-9);vertex(95,1);vertex(88,-1);vertex(81,-11);vertex(80,-19);
	vertex(84,-55);vertex(84,-79);vertex(78,-49);vertex(76,-15);vertex(80,-7);vertex(76,-3);vertex(68,-11);vertex(68,-31);
	vertex(70,-107);vertex(20,-118);vertex(-32,-71);vertex(-28,-11);vertex(-24,-3);vertex(-32,4);vertex(-40,-6);vertex(-40,-61);
	vertex(-52,-63);vertex(-62,-24);vertex(-64,-15);vertex(-57,-5);vertex(-68,3);
	endShape();
}
function deer2(){
	//To create this part, I made a seperate p5.js applet where whenever you click, it logs a translation of the cursor position
	//inside of the vertex command and appends that to a string. I then outlined the reference image with the mouse, and logged
	//the string when i was done, then pasted that text into here.
	beginShape();
	vertex(218,-193);vertex(208,-195);vertex(207,-197);vertex(213,-210);vertex(213,-222);vertex(204,-236);vertex(211,-259);
	vertex(219,-245);vertex(228,-235);vertex(235,-237);vertex(244,-234);vertex(257,-249);vertex(264,-249);vertex(264,-238);
	vertex(257,-225);vertex(250,-219);vertex(251,-201);vertex(245,-173);vertex(239,-161);vertex(228,-139);vertex(224,-115);
	vertex(220,-102);vertex(216,-98);vertex(212,-76);vertex(204,-61);vertex(203,-45);vertex(200,-28);vertex(199,-8);vertex(201,4);
	vertex(201,9);vertex(195,10);vertex(186,4);vertex(188,-14);vertex(190,-28);vertex(188,-36);vertex(192,-55);vertex(194,-84);
	vertex(172,-75);vertex(167,-63);vertex(168,-59);vertex(167,-34);vertex(164,-27);vertex(164,-15);vertex(164,-2);vertex(163,9);
	vertex(159,11);vertex(152,8);vertex(153,-16);vertex(156,-41);vertex(156,-74);vertex(140,-52);vertex(124,-33);vertex(111,-15);
	vertex(114,1);vertex(112,6);vertex(99,7);vertex(95,4);vertex(99,-20);vertex(104,-40);vertex(113,-52);vertex(122,-67);
	vertex(122,-81);vertex(114,-60);vertex(110,-54);vertex(100,-31);vertex(97,-47);vertex(93,-61);vertex(87,-82);vertex(85,-107);
	vertex(93,-135);vertex(112,-149);vertex(130,-154);vertex(149,-156);vertex(168,-158);vertex(180,-161);vertex(203,-174);
	vertex(218,-191);
	endShape();
}

function dog(){
	fill(255,56,0)
	stroke(255,60,0)
	push()
		translate(340,450)
		rotate(PI/12)
		ellipse(0,0,160,110)
		ellipse(-39,-10,95,90)
		ellipse(-40,-50,50,10)
		ellipse(-70,-52,15,20)
	pop()
	ellipse(265,470,15,60)
	triangle(300,445,265,485,265,445)
	ellipse(283,455,13,80)
	ellipse(285,492,13,8)
	ellipse(362,500,13,50)
	ellipse(360,508,11,50)
	ellipse(363,530,10,8)
	ellipse(402,500,15,55)
	ellipse(403,520,11,20)
	ellipse(406,528,15,10)
	push()
		translate(415,450)
		rotate(PI/18)
		ellipse(0,0,15,100)
	pop()

	//leash
	push()
		noFill()
		stroke(150,150,255,120)
		translate(340,380)
		rotate(-PI/6)
		strokeWeight(1.85)
		rect(0,0,35,55)
	pop()

	//dog head
	rect(372,380,50,60)
	ellipse(397.5,380,49.5,15)
	ellipse(373,413,25,70)
	ellipse(420,413,25,70)
	push()
		translate(418,418)
		rotate(-PI/9)
		ellipse(0,0,25,70)
	pop()
	push()
		translate(265,499)
		rotate(PI/16)
		ellipse(0,0,15,10)
	pop()

	//dog nose
	fill(10)
	stroke(10)
	ellipse(409,418,10)
	push()
		noFill()
		strokeWeight(.5)
		translate(406,420)
		rotate(PI/18)
		ellipse(0,0,5,10)
	pop()
	push()
		noFill()
		strokeWeight(.5)
		translate(412,420)
		rotate(-PI/18)
		ellipse(0,0,5,10)
	pop()
}

function human(){
	//hand
	push()
		fill(255,70,60)
		stroke(255,70,60)
		translate(350,360)
		rotate(-PI/8)
		ellipse(0,0,35,50)
	pop()

	//head
	fill(255,70,60)
	stroke(255,70,60)
	push()
		translate(200,150)
		rotate(-PI/7.5)
		ellipse(0,0,20,100)
	pop()
	ellipse(200,125,20)
	push()
		translate(200,150)
		rotate(PI/7.5)
		ellipse(0,0,20,100)
	pop()
	ellipse(200,110,45)

	//neck
	fill(245,245,220)
	stroke(245,245,220)
	ellipse(200,147,70,20)
	push()
		fill(107,142,35)
		stroke(107,142,35)
		translate(201,174)
		rotate(PI/34)
		ellipse(2,0,146.5,50)
	pop()

	//chest
	fill(107,142,35)
	stroke(107,142,35)
	rect(150,175,125,225)

	//arms
	push()
		translate(130,165)
		rotate(PI/19)
		rect(0,0,75,150)
	pop()
		ellipse(155.7,315,100,50)
		fill(245,245,220)
		stroke(245,245,220)
		quad(117,240,113,260,149,265,150,245)
		fill(120,31,90)
		stroke(120,31,90)
		ellipse(125,255,5)
		ellipse(133,250,5)
		ellipse(139,257,5)
	push()
		fill(107,142,35)
		stroke(107,142,35)
		translate(230,200)
		rotate(-PI/6)
		rect(0,0,50,180)
		pop()
		push()
		fill(255)
		stroke(255)
		translate(316.7,350)
		rotate(-PI/6)
		rect(0,0,50,20)
	pop()

	//feet(right)
	fill(255,70,60)
	stroke(255,70,60)
	ellipse(249,515,23)
	push()
		fill(255,70,60)
		stroke(255,70,60)
		translate(238,520)
		rotate(-PI/18)
		rect(0,0,7,14)
	pop()
	push()
		fill(255,70,60)
		stroke(255,70,60)
		translate(257,523)
		rotate(-PI/12)
		ellipse(0,0,30,11)
	pop()

	//legs
	push()
		fill(107,142,35)
		stroke(107,142,35)
		triangle(150,400,163,420,170,400)
		quad(160,400,162,500,195,500,200,400)
		quad(208,400,196,450,195,499,170,400)
		quad(210,400,230,515,265,510,264,400)
		ellipse(265,400,20,10)
	pop()

	//feet
	fill(255,70,60)
	stroke(255,70,60)
	quad(164,500,164,505,190,510,190,500)
	quad(164,505,151,520,164,522,188,510)
	quad(188,510,190,510,189,510,189,510)
	push()
		fill(255,70,60)
		stroke(255,70,60)
		translate(163,515)
		rotate(PI/3)
		ellipse(0,0,13,30)
	pop()
	push()
		translate(186,510)
		rotate(PI/3)
		ellipse(0,0,5,10)
	pop()

	//necktie
	fill(245,245,220)
	stroke(245,245,220)
	triangle(175,145,200,225,225,145)
	fill(120,31,90)
	stroke(120,31,90)
	beginShape()
	vertex(200,226)
	vertex(207,202)
	vertex(204,190)
	vertex(208,185)
	vertex(200,165)
	vertex(193,185)
	vertex(196,190)
	vertex(194,210)
	endShape()

	//glasses/hair
	fill(150,75,0)
	stroke(150,75,0)
	quad(177.7,110,178,111,220,111,220,110)
	ellipse(197,110.5,10)
	ellipse(217,110.5,9.7)
	ellipse(200,92,25,5)
	ellipse(200,89.7,18.5,4)
	push()
		translate(183.5,100)
		rotate(-PI/3)
		ellipse(0,0,23,5)
	pop()

	//hand
	push()
		noFill()
		strokeWeight(2)
		stroke(255)
		translate(230,408)
		rotate(-PI/24)
		ellipse(0,0,25,200)
	pop()
	push()
		fill(107,142,35)
		stroke(107,142,35)
		translate(227,408)
		rotate(-PI/24)
		ellipse(-2,-2,20,202)
	pop()
	push()
		fill(107,142,35)
		stroke(107,142,35)
		translate(225,480)
		rotate(-PI/18)
		rect(0,0,25,35)
	pop()
	push()
		fill(255,70,60)
		stroke(255,70,60)
		translate(200,315)
		rotate(-PI/12)
		ellipse(0,0,30,20)
	pop()
	push()
		fill(245,245,220)
		stroke(245,245,220)
		translate(180,305)
		rotate(-PI/18)
		rect(0,0,10,30)
	pop()
}
function unAveugle(){
	//Text

	fill(135,206,235)
	stroke(135,206,235)
	textSize(49)
	textFont("Arial")
	text("UN",25,40)

	fill(135,206,235)
	stroke(135,206,235)
	textFont("Arial")
	text("AVEUGLE",50,78)
}

function love(){
	fill(whiteColor);
	rect(0,0,900,162);
	fill(pinkColor);
	textSize(90);
	text("LOVE",120,135);
}
