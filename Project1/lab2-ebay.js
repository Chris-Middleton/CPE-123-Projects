

function setup() {
	createCanvas(500,600);
}
	

function draw() {
	background(235,235,220)




//x - x coordinate of body center
//y - y coordinate of body center
function drawDog(x,y)
{
//Dog
	

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

push()
drawDog()
pop()

//hand

	push()
	fill(255,70,60)
	stroke(255,70,60)
	translate(350,360)
	rotate(-PI/8)
	ellipse(0,0,35,50)
	pop()

//head
	push()
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
	push()
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
	





