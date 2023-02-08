const names = ['jony','sylvie', 'nana']

function removeName(names, name){
  const nameIdx = names.indexOf(name);
  if(nameIdx != -1){
    names.splice(nameIdx, 1);
  }
}
console.log(names);
removeName(names, 'sylvie');
console.log(names);