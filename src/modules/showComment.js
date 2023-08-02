import getPokemon from "./getPokemon"
import  { sendComment, getComment } from "./Comment";
import totalComment from "./totalCount";

const showComment = async (id) => {
    const header = document.querySelector('header')
    const mainContainer = document.getElementById('container');
    const footer = document.querySelector('footer');
    header.style.display = 'none';
    mainContainer.style.display = 'none';
    footer.style.display = 'none';

    const pokemon = await getPokemon(id);

    const container = document.createElement("div");
    const addComment = document.createElement('div');
    const name = document.createElement('input');
    const comment = document.createElement('textarea');
    const addCommentBtn = document.createElement('button');

    container.className = "comment-container";
    addComment.className = "add-comment";
    name.className = "name";
    comment.className = "comment"
    addCommentBtn.className = "add-comment-btn";

    name.type = "text";
    name.placeholder = "Your name"
    comment.placeholder = "Your comment"
    addCommentBtn.innerHTML = 'Comment'
  
    container.innerHTML = `<div class="image-x"><img src="${pokemon.sprites.other.dream_world.front_default}" alt="img"/>
                            <button class="close">X</button>
                            </div>
                            <h2>${pokemon.name}</h2>  
                            <div class="character">
                                <span class="first-span">Move:${pokemon.moves[0].move.name}</span>
                                <span class="second-span">Type: ${pokemon.types[0].type.name}</span>
                            </div>
                            <div class="character">
                                <span class="first-span">Base-Experience: ${pokemon.base_experience}</span> 
                                <span class="second-span">Height: ${pokemon.height}</span>
                            </div>
                            <p>Comments(<span id="comment-count"></span>)</p>
                            <ul id="comment-list"></ul>
                             <p>Add a comment </p>
                          `
    addComment.appendChild(name);
    addComment.appendChild(comment);
    addComment.appendChild(addCommentBtn);
    container.appendChild(addComment);
    document.body.appendChild(container);

  const commentList = document.getElementById('comment-list');
  const commentCountBox = document.getElementById('comment-count');
  const comments = await getComment(id);
  commentCountBox.innerHTML = totalComment(comments)
  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.className = "comment-item"
    commentItem.innerHTML = `<p>
                                   <i class="fa-regular fa-comments"></i> ${comment.creation_date}: ${comment.comment} by ${comment.username}
                                </p>`;

    commentList.appendChild(commentItem);
  });

  addCommentBtn.addEventListener('click', async () => {
    if (name.value !== '' && comment.value !== '') {
      await sendComment(id, name.value, comment.value);
      const commentCountBox = document.getElementById('comment-count');
      const comments = await getComment(id);
      commentCountBox.innerHTML = totalComment(comments)
      const newComment = comments[comments.length - 1];
      const commentList = document.getElementById('comment-list');
      const commentItem = document.createElement('li');
      commentItem.innerHTML = `<p>
                                  ${newComment.creation_date} ${newComment.username}:${newComment.comment}
                                </p>`;

      commentList.appendChild(commentItem);
    }
    name.value = '';
    comment.value = '';
  });

    const close = document.querySelector('.close');
      close.addEventListener("click",() =>{
        document.body.removeChild(container);
        header.style.display = 'flex';
        footer.style.display = 'flex'
        mainContainer.style.display = 'grid';
    })
    
}

export default showComment 