const controller = {
  keys: {
    'ArrowUp': -1,
  },
  activeKeys: [],

  init() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (Object.keys(this.keys).includes(e.key) &&
          !this.activeKeys.includes(e.key)) {
        this.activeKeys.push(e.key)
      }
    })
    document.addEventListener('keyup', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (this.activeKeys.includes(e.key)) {
        const i = this.activeKeys.indexOf(e.key)
        this.activeKeys.splice(i, 1)
      }
    })
  },
}

export default controller