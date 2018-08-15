const getUser = (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    req.app
    .get("db")
    .user.getUser([username, password])
    .then(response => {
        // console.log(response)
        req.session.usersid = response[0].usersid
        console.log("req.session: ", req.session)
        res.status(200).json(response)})
    .catch(err => res.status(500).json(err));
};

const addUser = (req, res, next) => {
    // console.log(req.body)
    const { username, password } = req.body;
    req.app
    .get("db")
    .user.addUser([username, password])
    .then(response => {req.session.usersid = response[0].usersid
        res.status(200).json(response)})
    .catch(err => res.status(500).json(err));
};

const getPosts = (req, res, next) => {
    // console.log(req.query.userposts)
    const { userposts, search } = req.query;
    const { usersid } = req.session;
    req.app
    .get("db")
    .posts.getPosts()
    .then( posts => {
        if(userposts === "true" && search !== ""){
            let filteredPosts = posts.filter(posts => posts.title.includes(search));
            res.status(200).json(filteredPosts);
        } else if(userposts === "false" && search === ""){
            let filteredPosts = posts.filter(posts => usersid != posts.author_id);
            res.status(200).json(filteredPosts);
        } else if(userposts === "false" && search !== ""){
            let filteredPosts = posts.filter(posts => (usersid != posts.author_id) && posts.title.includes(search));
            res.status(200).json(filteredPosts);
        } else if(userposts === "true" && search === ""){
            res.status(200).json(posts);
        }
    })
};

const getOnePost = (req, res, next) => {
    // console.log(req.params)
    req.app
    .get("db")
    .posts.getOnePost([req.params.postid])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const addPost = (req, res, next) => {
    console.log(req.body)
    const { title, img, content } = req.body;
    const { usersid } = req.session;
    req.app
    .get("db")
    .posts.addPost([title, img, content, usersid])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const logout = (req, res, next) => {
    req.session.destroy();
    res.status(200).json('LOGGED OUT')
}

const getMe = (req, res, next) => {
    console.log(req.session)
    const { usersid } = req.session;
    req.app
    .get("db")
    .user.getMe([usersid])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
}

module.exports = {
    getUser,
    addUser,
    getPosts,
    getOnePost,
    addPost,
    logout,
    getMe
}