const collisionDetector = {
  detect(ctx, ship, asteroids) {
    for (let i = 0; i < ship.bullets.length; i++) {
      for (let j = 0; j < asteroids.length; j++) {
        if (ctx.isPointInPath(asteroids[j].path,
            ship.bullets[i].location.x - asteroids[j].location.x,
            ship.bullets[i].location.y - asteroids[j].location.y)) {
          return {bullet: ship.bullets[i], asteroid: asteroids[j]}
        }
      }
    }
    return false
  },
}

export default collisionDetector