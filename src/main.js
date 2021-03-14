const main = document.getElementById('asteroids')
document.body.removeChild(main)

const canvas = document.createElement('canvas')
document.body.insertAdjacentElement('afterbegin', canvas)
canvas.width = 640
canvas.height = 480

const ctx = canvas.getContext('2d')
ctx.strokeStyle = '#fff'

const shipSize = 20

ctx.rotate(0)
ctx.translate(canvas.width / 2, canvas.height / 2)

ctx.beginPath()
ctx.moveTo(0, -1.5 * shipSize / 2)
ctx.lineTo(shipSize / 2,
  0.5 + (shipSize * 1.5 / 2))
ctx.lineTo(-shipSize / 2,
  0.5 + (shipSize * 1.5 / 2))
ctx.closePath()
ctx.stroke()

