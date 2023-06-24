const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const search = document.getElementById("search").value;

    const searchJoin = search.split(' ').join('');

    document.getElementById("main").innerHTML = "";

     fetch(APIURL+searchJoin)
        //   alert(searchJoin)
         .then((response) => response.json())
         .then((data) => {
         console.log(data)

         document.getElementById("main").innerHTML = 
            `<div class="card">
                <div class="card-img-name">
                 <a target="_blank" href="https://www.github.com/${searchJoin}"><img class="avatar" src="${data.avatar_url}"/></a>
                 <p class="name">${data.name}</p>
                </div>
                 <p class="user-info">Bio: ${data.bio}</p>
                 <p class="user-info">Profile: ${data.login}</p>
                 <p class="user-info">Followers: ${data.followers}</p>
                 <p class="user-info">Followings: ${data.following}</p>
                 <p class="repo">Repos: ${data.public_repos}</p>
            </div>`
    })
})




