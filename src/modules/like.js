const getLikes = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8fqARNVkoqtapAj5nHFg/likes/`, options);
  const data = await response.text();
  return data;
};

const setLikes = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "item_id": `${id}`
    }),
  };

  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8fqARNVkoqtapAj5nHFg/likes/`, options);
 
};

module.exports = {getLikes,setLikes};