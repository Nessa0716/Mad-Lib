let adjective=prompt('Enter an Adjective:')
let noun=prompt ('Enter A Noun:')
let verb=prompt ('Enter A Verb:')
let adverb=prompt ('Enter A Adverb:')

let story=`Once Upon A Time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`
let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML=`<p>${story}</p>`