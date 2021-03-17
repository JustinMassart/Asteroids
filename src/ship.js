import controller from './controller'

const ship = {
  size: 20,
  speedY: 0,
  locationY: 0,
  canavs: null,
  ctx: null,

  init(canvas, ctx) {
    controller.init()
    this.canvas = canvas
    this.ctx = ctx
    this.locationY = this.canvas.height / 2
  },
  update() {
    controller.activeKeys.forEach((activeKey) => {
      this.speedY += controller.keys.[activeKey] * 0.05
    })
    this.locationY += this.speedY
    if (this.locationY > this.canvas.height + this.size) {
      this.locationY = -this.size
    }else if (this.locationY < -this.size) {
      this.locationY = this.canvas.height + this.size
    }
    this.draw()
  },
  draw() {
    this.ctx.save() //Left top corner

    this.ctx.rotate(0)
    this.ctx.translate(this.canvas.width / 2, this.locationY)

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