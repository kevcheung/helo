SELECT posts.title, posts.img, posts.content, users.username, users.profile_pic FROM posts JOIN users ON posts.author_id = users.usersid WHERE postsid = $1;