

document.getElementById('btn-post').addEventListener('click', function () {

    // 2nd step
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // 3rd step

    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // 4rth step

    commentBox.value = '';
})
