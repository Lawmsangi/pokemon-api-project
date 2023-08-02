const { setLikes, getLikes } = require("./like");
const { default: showComment } = require("./showComment");

const totalPokemon = (pokemons) => {
  return pokemons.length;
}

const display = (pokemons,likes) =>  {
  const container = document.getElementById('container');

  pokemons.forEach((item,index) => {
    const card = document.createElement('div');
    const name = document.createElement('div');
    const commentBtn = document.createElement('button');
    const likeBtn = document.createElement('button');
    const showLike = document.createElement('p');
   
    let likeCount = 0;
    likes.forEach((like) => {
      if(JSON.parse(like.item_id) === item.id){
        likeCount = like.likes
      }
    })
    card.className = 'card';
    name.className = 'name-content';
    commentBtn.className = 'comment-btn';
    likeBtn.className = 'like-btn';

    card.innerHTML = `<img src="${item.sprites.other.dream_world.front_default}"/>`
    name.innerHTML = `<h2> ${item.name}</h2> `
        
    showLike.innerHTML = `${likeCount}`
    likeBtn.innerHTML =  `<i class="fa-regular fa-heart"></i>`
    commentBtn.innerHTML = `Comment`

    likeBtn.addEventListener('click', async ()=> {
      await setLikes(item.id);
      const newLikes = JSON.parse(await getLikes())
      newLikes.forEach((like) => {
      if(JSON.parse(like.item_id) === item.id){
        showLike.innerHTML = like.likes;
      }
    })
    })

    commentBtn.addEventListener('click',async()=>{
      await showComment(item.id);
    })
    
    card.appendChild(name);
    name.appendChild(showLike)
    name.appendChild(likeBtn)
    card.appendChild(commentBtn);
    container.appendChild(card);
  });
};

module.exports = {display, totalPokemon};
