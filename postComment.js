//Array de profiles

let igs = []

let count = 0;

const funcComments = () => {
 let comment_text = document.getElementsByClassName('Ypffh')[0];
 let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
  let position1 = count + 1
  let position2 = count + 2
  
nativeInputValueSetter.call(comment_text, "Perfil 1: " + igs[position1] + " e Perfil 2: " + igs[position2] );

let ev2 = new Event('input', { bubbles: true});
comment_text.dispatchEvent(ev2);

console.log(new Date())
console.log("Perfil comentado: " + igs[position1] + " e " + igs[position2] ) 
if(igs[position1] !== undefined && igs[position2] !== undefined) {
document.getElementsByClassName("y3zKF")[0].click()
}
count = position2++
}


setInterval(funcComments , 90000)
