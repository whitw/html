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
const blocks = document.querySelectorAll(".column");
let openedCards = []
let openedCardsCnt = 0;
let moves = 0;
//////////////////////////////////////////////
const openCard = (idx) => {
  if(openedCards.length == 1 && openedCards[0] == idx){}
    else{
      openedCards.push(idx);
    }
    if(openedCards.length >= 2){
      if(cardArray[openedCards[0]].name == cardArray[openedCards[1]].name){
        blocks[openedCards[0]].classList.add('checked');
        blocks[openedCards[1]].classList.add('checked');
        openedCardsCnt += 2;
        if(openedCardsCnt == 12){
          alert(`Success! in ${moves} moves`);
        }
      }
      else{
        const firstBlock = blocks[openedCards[0]];
        const secondBlock = blocks[openedCards[1]];
        setTimeout(()=>{
          firstBlock.querySelector('img').setAttribute('src', './public/Question-Mark.png');
          secondBlock.querySelector('img').setAttribute('src', './public/Question-Mark.png');
        }, 500);
      }
      openedCards = [];
    }
}

//////////////////////////////////////////////
cardArray.sort(()=>Math.random()-0.5);

blocks.forEach((block, idx)=>{
  const image = document.createElement('img');

  image.setAttribute('src', './public/Question-Mark.png');
  block.append(image);

  block.addEventListener('click', ()=>{
    if(!block.classList.contains('checked')){
      image.setAttribute('src', cardArray[idx].img);
      moves++;
      openCard(idx);
    }
  });
})

/////////////////////////////////////////////////
