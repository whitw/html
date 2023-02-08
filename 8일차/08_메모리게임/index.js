const cardArray = [
  {
    name: "cat",
    img: "./public/cat.png",
  },
  {
    name: "dog",
    img: "./public/dog.png",
  },
  {
    name: "elephant",
    img: "./public/elephant.png",
  },
  {
    name: "hedgehog",
    img: "./public/hedgehog.png",
  },
  {
    name: "pig",
    img: "./public/pig.png",
  },
  {
    name: "squirrel",
    img: "./public/squirrel.png",
  },
  {
    name: "cat",
    img: "./public/cat.png",
  },
  {
    name: "dog",
    img: "./public/dog.png",
  },
  {
    name: "elephant",
    img: "./public/elephant.png",
  },
  {
    name: "hedgehog",
    img: "./public/hedgehog.png",
  },
  {
    name: "pig",
    img: "./public/pig.png",
  },
  {
    name: "squirrel",
    img: "./public/squirrel.png",
  },
]
const gameDOM = [];
//////////////////////////////////////////////
const blocks = document.querySelectorAll(".column");
let openedCards = []
cardArray.sort(()=>Math.random()-0.5);

blocks.forEach((block, idx)=>{
  const image = document.createElement('img');

  image.setAttribute('src', './public/Question-Mark.png');
  block.append(image);

  block.addEventListener('click', ()=>{
    image.setAttribute('src', cardArray[idx].img);
    if(openedCards.length == 1 && openedCards[0] == idx){}
    else{
      openedCards.push(idx);
    }
    if(openedCards.length >= 2){
      if(cardArray[openedCards[0]].name == cardArray[openedCards[1]].name){
        blocks[openedCards[0]].classList.add('checked');
        blocks[openedCards[1]].classList.add('checked');
        openedCards.pop();
        openedCards.pop();
      }
      else{
        const firstBlock = blocks[openedCards[0]];
        const secondBlock = blocks[openedCards[1]];
        openedCards.pop();
        openedCards.pop();
        setTimeout(()=>{
          firstBlock.querySelector('img').setAttribute('src', './public/Question-Mark.png');
          secondBlock.querySelector('img').setAttribute('src', './public/Question-Mark.png');
        }, 500);
      }
    }
  })
})

/////////////////////////////////////////////////
