score = 0
cross = true
const jump=new Audio('jump.wav')
const gameove=new Audio('gameover.wav')
document.onkeydown = ((e) => {
    if (e.keyCode === 37) {
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'))
        dragon.style.left = dragonX + (-300) + "px"
    }
    if (e.keyCode === 38) {
        dragon.classList.add('animate')
        setTimeout(() => {
            dragon.classList.remove('animate')
        }, 1500)
    }
    if (e.keyCode === 39) {
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'))
        dragon.style.left = dragonX + 300 + "px"
    }
})

setInterval(() => {
    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'))
    
    ox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    
    offSetX = Math.abs(dx - ox)
    offSetY = Math.abs(dy - oy)
    
    if (offSetX < 100 && offSetY < 54) {
        gameover.style.visibility='visible'
        dino.classList.remove('ani')
        if (score > 0)
        zero(score)
        gameove.play()
    }
    else if (offSetX < 200 && cross&&offSetX>100) {
        score=score+4;
        update(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)
        setTimeout(()=>{
            dur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'))
            if(dur>3){
                newDur = dur - 1
                dino.style.animationDuration = newDur + "s"
            }
            else if(dur>2.5){
                newDur = dur - 0.1
                dino.style.animationDuration = newDur + "s"
            }
            console.log(newDur)
            jump.play()
        },300)
    }

}, 100)

function zero(score) {
    score=score-4
    h3.innerHTML = "Score: " + score
}

function update(score) {
    h3.innerHTML = "Score: " + score;
}