import controller from './controller'
import Vector from './vector'
import Bullet from './Bullet'

const ship = {
  size: 20,
  speed: null,
  heading: 0,
  location: null,
  acceleration: null,
  canvas: null,
  ctx: null,
  bulletTimer: -1,
  bulletTimerTreshold: 10,
  bullets: [],

  init(canvas, ctx) {
    controller.init()
    this.canvas = canvas
    this.ctx = ctx
    this.location = new Vector(this.canvas.width / 2, this.canvas.height / 2)
    this.speed = new Vector(0, 0)
  },
  update() {
    controller.activeKeys.forEach((activeKey) => {
      if (activeKey === 'ArrowUp') {
        this.acceleration = Vector.fromAngle(this.heading)
        this.speed.add(this.acceleration)
      }
      else if (activeKey === 'ArrowRight' || activeKey === 'ArrowLeft') {
        this.updateHeading(controller.keys[activeKey])
      }
      else if (activeKey === ' ') {
        this.bulletTimer++
        if (!(this.bulletTimer % this.bulletTimerTreshold)) {
          this.bullets.push(new Bullet())
        }
        console.log('gne')
      }
      else {
        this.bulletTimer = 0
      }
    })

    this.speed.multiply(0.94)

    this.location.add(this.speed)

    if (this.location.y > this.canvas.height + this.size) {
      this.location.y = -this.size
    }
    if (this.location.y < -this.size) {
      this.location.y = this.canvas.height + this.size
    }
    if (this.location.x > this.canvas.width + this.size) {
      this.location.x = -this.size
    }
    if (this.location.x < -this.size) {
      this.location.x = this.canvas.width + this.size
    }

    this.draw()
  },
  updateHeading(angle) {
    this.heading += angle
  },
  draw() {
    this.ctx.save() //Left top corner

    this.ctx.translate(this.location.x, this.location.y)
    this.ctx.rotate(this.heading)

    this.ctx.beginPath()
    this.ctx.moveTo(0, -1.5 * this.size / 2)
    this.ctx.lineTo(this.size / 2,
        0.5 + (this.size * 1.5 / 2))
    this.ctx.lineTo(-this.size / 2,
        0.5 + (this.size * 1.5 / 2))
    this.ctx.closePath()
    this.ctx.stroke()

    this.ctx.restore()
  },
}

export default ship