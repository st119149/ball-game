let circle = document.querySelector('.circle');
circle.radius = circle.clientHeight/2;
circle.x = Number(circle.style.left);
circle.y = Number(circle.style.bottom);
circle.speedX = 1;
circle.speedY = 1;

function move(x, y) {

    if (this.y + y - circle.radius < 0 || this.y + y + circle.radius > 500)
        circle.speedY *= -0.8;

    else if(this.x + x - circle.radius < 0 || this.x + x + circle.radius > 400)

        circle.speedX *= -0.8;
    
        

        
    
    else {
        this.x += x;
        this.y += y;
        this.style.left = this.x + 'px';
        this.style.bottom = this.y + 'px';
        return 0;
    }


    console.log(this.style.left, this.x, this.style.bottom, this.y, y, x, circle.speed);
    
}

circle.move = move;
circle.move(300, 300);

let interval = setInterval(() => {
    circle.move(circle.speedX, circle.speedY);
}, 17);

let gravity = setInterval(() => {
    if (circle.speedX >= 0)
        circle.speedX -= 0.005;
    else
        circle.speedX += 0.005;
    circle.speedY -= 0.09;
}, 17);


document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyW')
        if (circle.speedY < 5)
            circle.speedY += 2;
    if (event.code == 'KeyS')
        if (circle.speedY > -5)
            circle.speedY -= 2;
    if (event.code == 'KeyA')
        if (circle.speedX > -5)
            circle.speedX -= 2;
    if (event.code == 'KeyD')
        if (circle.speedX < 5)
            circle.speedX += 2;
});