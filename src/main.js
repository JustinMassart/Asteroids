import ship from './ship'

const main = {
  mainElt: null,
  canvasElt: null,
  canvasEltDimensions: {
    width: 640,
    height: 480,
  },
  ctx: null,

  init() {
    this.mainElt = document.getElementById('asteroids')
    document.body.removeChild(this.mainElt)

    this.canvasElt = document.createElement('canvas')
    document.body.insertAdjacentElement('afterbegin', this.canvasElt)
    this.canvasElt.width = this.canvasEltDimensions.width
    this.canvasElt.height = this.canvasEltDimensions.height

    this.ctx = this.canvasElt.getContext('2d')
    this.ctx.strokeStyle = '#fff'
    this.ctx.fillStyle = '#fff'

    ship.init(this.canvasElt, this.ctx)

    this.animate()
  },
  animate() {
    window.requestAnimationFrame(() => {
      this.animate()
    })
    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height)
    ship.update()
    ship.bullets.forEach((bullet) => {
      bullet.update()
    })
  },
}

const asteroidSize = 20

function asteroidDraw() {
  this.ctx.save()

  this.ctx.rotate(0.1)
  this.ctx.translate(50, 50)
  this.ctx.strokeRect(-asteroidSize / 2, -asteroidSize / 2, asteroidSize,
      asteroidSize)
  this.ctx.restore()
}

main.init()
