      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => showUserNames(data));

      function showUserNames(data){
        let userHTML = "";
        data.forEach(user => {
          userHTML = userHTML + `<div class="user">
          <h2><span>User name:</span> ${user.name}</h2>
          <h3><span>User Name:</span> ${user.username}</h3>
          <p class="email"><span>User emails:</span> ${user.email}</p>
          <p>Company Name: ${user.company.name}. <br> Company Phrase: ${user.company.catchPhrase}. <br> Company BS: ${user.company.bs}</p>
          </div>`
        });
        const userContiner = document.getElementById("user-container");
        userContiner.innerHTML = userHTML;
      }