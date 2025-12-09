const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152 
    }
]


const main = document.getElementById("mainPost")
let post = ""
console.log(post)

function renderPost() {
    for (let i=0; i< posts.length ; i++) {
        post += `   
        <section>
            <div class="flex-au margin0">
                <img class="post-avatar margin0" src="images/avatar-vangogh.jpg">
                <div class="flex-ul">
                    <h1 class="margin0">${posts[i].name}</h1>
                    <h2 class="margin0">${posts[i].location}</h2>
                </div>
            </div>
            <img class="img-post margin0" src="images/post-vangogh.jpg">
            
            <div class="three-icons">
                <img class="margin0" src="/images/icon-heart.png">
                <img class="margin0" src="/images/icon-comment.png">
                <img class="margin0" src="/images/icon-dm.png">
            </div>

            <h3 class="likes margin0">${posts[i].likes}</h3>
            <div class="user-caption">
                <h3 class="username margin0">${posts[i].username}</h3> 
                <span class="comment margin0">${posts[i].comment}</span>  
            </div>
        </section> `
    } 
    main.innerHTML = post
    console.log(post)
}

renderPost()
