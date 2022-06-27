//Ejercicio10
const removeHTMLTags = ( codigo ) => {
  return codigo.replace( /(<([^>]+)>)/ig, '')
}

const result = ('<div><span>lorem</span> <strong>ipsum</strong></div>')
 
console.log(removeHTMLTags(result)) // lorem ipsum