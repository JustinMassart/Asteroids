const collisionDetector = {
  detectBulletAsteroidCollision(ctx, ship, asteroids) {
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
  detectShipAsteroidCollision(ctx, ship, asteroids) {
    for (let j = 0; j < asteroids.length; j++) {
      for (let i = 0; i < ship.shape.length; i += 2) {
        if (ctx.isPointInPath(asteroids[j].path,
            ship.location.x - ship.shape[i] - asteroids[j].location.x,
            ship.location.y - ship.shape[i + 1] - asteroids[j].location.y)) {
          return true
        }
      }
    }
    return false
  },
}

export default collisionDetector