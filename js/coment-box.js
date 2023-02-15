// console.log("Hello JS");

// Step - 01 :: Adding 'addEventListener' to the 'Post' button
document.getElementById('btn-post').addEventListener('click', function(){
    // console.log("Post Button Check");

    // Step - 02 :: Getting the comment inside the Textarea
    let commentBox = document.getElementById('new-comment');
    // console.log(commentBox);
    let newComment = commentBox.value;
    // console.log(newComment);

    // Step - 03 :: Setting the comment inside the comment container
    // Step - 03.01 :: Selecting the comment container where comment will be stored
    let commentContainer = document.getElementById('comment-container');
    // console.log(commentContainer);
    
    
    // Step - 03.02 :: Creating a new paragraph element for storing the comment inside the paragraph
    let commentShow = document.createElement('p');

    // Step - 03.03 :: Putting the comment text inside the paragraph
    commentShow.innerText = newComment;

    // Step - 03.04 :: Adding the paragraph as a child of the empty comment container
    commentContainer.appendChild(commentShow);

    // Step - 04:: Clearing the comment box after posting 
    commentBox.value = '';
})