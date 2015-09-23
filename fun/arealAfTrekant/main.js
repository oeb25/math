import V from 'vectorjs'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 700
canvas.height = 700

ctx.scale(1, -1)
ctx.translate(0, -canvas.height)

document.body.appendChild(canvas)

const a = V(100, 100)
const b = V(200, 100)
const c = V(100, 200)

let offset = V(20, 20)

const drawPoint = v =>
  ctx.fillRect(v.x - 3 + offset.x, v.y - 3 + offset.y, 6, 6)

const fillPolygon = (start, ...points) => {
  ctx.beginPath()
  ctx.moveTo(start.x + offset.x, start.y + offset.x)
  points.map(v => v.add(offset)).forEach(v => ctx.lineTo(v.x, v.y))
  ctx.fill()
}

const draw = () => {
  drawPoint(a)
  drawPoint(b)
  drawPoint(c)

  ctx.beginPath()
  ctx.moveTo(-100000, offset.y)
  ctx.lineTo(10000, offset.y)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(offset.x, -100000)
  ctx.lineTo(offset.x, 10000)
  ctx.stroke()

  fillPolygon(a, b, c)
}

draw()
