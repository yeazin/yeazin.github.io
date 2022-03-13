
let url = "https://api.github.com/users/yeazin"

function APIFetch(){
  fetch(url)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
//       console.log(data);
      document.getElementById('name').innerHTML = data.name;
      document.getElementById('img').src = data.avatar_url;
      document.getElementById("username").innerHTML = '@'+data.login;
      document.getElementById("username").href = data.html_url;
      document.getElementById("bio").innerHTML = data.bio;

    })
    .catch((err)=>{
      console.log(err);
    })
};

APIFetch()
