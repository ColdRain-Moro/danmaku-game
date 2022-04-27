import "../css/style.css"
import Particle from './class/particle'
import Vector2D from './utils/vector2d'

const canvas = document.querySelector('canvas')!
const ctx = canvas.getContext('2d')!
const particles: Particle[] = Array.from({ length: 20 }, () => {
  return {
    loc: new Vector2D(Math.random() * canvas.width, Math.random() * canvas.height),
    velocity: new Vector2D(Math.random() - 1, Math.random() - 1),
    rect: {
      width: 10,
      height: 10,
    },
    draw: (ctx: CanvasRenderingContext2D, particle: Particle) => {
        ctx.beginPath()
        ctx.fillStyle = '#999'
        ctx.arc(particle.loc.x, particle.loc.y, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
  }
})

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(p => {
    if (p.loc.x > canvas.width || p.loc.x < 0) {
      p.velocity.x = -p.velocity.x
    }
    if (p.loc.y > canvas.height || p.loc.y < 0) {
      p.velocity.y = -p.velocity.y
    }
    if (p.render) {
      p.render(ctx, p)
    }
    p.loc.x += p.velocity.x
    p.loc.y += p.velocity.y
  })
}

setInterval(tick, 1000 / 60)