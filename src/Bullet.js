import ship from './ship'
import Vector from './vector'

export default class Bullet {
  constructor() {
    this.ctx = ship.ctx
    this.location = new Vector(ship.location.x, ship.location.y)
    this.heading = ship.heading
    this.size = 4
    this.speed = new Vector(ship.speed.x, ship.speed.y)
    this.acceleration = Vector.fromAngle(this.heading, 10)
    this.speed.add(this.acceleration)
  }

  update() {
    this.location.add(this.speed)
    this.draw()
  }

  draw() {
    this.ctx.save()
    this.ctx.translate(this.location.x, this.location.y)
    this.ctx.rotate(this.heading)
    this.ctx.fillRect(-this.size / 2, -this.size / 2, this.size / 2, this.size / 2)
    this.ctx.restore()
  }
}