let comments = [];

loadComments();

document.getElementById('add-comment').onclick = function() 
{
	let commentText = document.getElementById('comment-area').value; // получаем текст комментария
	comments.push(commentText); // добавляем комментарий в массив

	saveComments();
	showComment();
}

function saveComments() 
{
	localStorage.setItem('comments', JSON.stringify(comments)); // добавляем комменатрий в хранилище
}

function showComments()
{
	for (let comment of comments) {
		commentsField.insertAdjacentHTML('beforeend', `<div class='comment'><p>${comment}</p></div>`)
	}
}

function loadComments()
{
	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComment()
{
	let commentAreaText = document.getElementById('comment-area').value;
	commentsField.insertAdjacentHTML('beforeend', `<div class='comment'><p>${commentAreaText}</p></div>`)
}
