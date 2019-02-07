function inception(params){

  this.recurence = params.recurence
  this.source = document.querySelectorAll(params.selector + ' > *')

  this.source.forEach((e) => {

    e.parentNode.style.position = 'relative'
    e.parentNode.style.display = 'inline-block'
    e.style.display = 'block'

    for (var i = 1; i < this.recurence; i++) {
      let newItem = e.cloneNode(true)
      newItem.style.position = 'absolute'
      newItem.style.top = 0
      newItem.style.transform = 'scale(' + (this.recurence - i) / this.recurence + ')'
      e.parentNode.appendChild(newItem)
    }

  })


}

var instance = new inception({
  selector: '.myimage',
  recurence: 5
});
