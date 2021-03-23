// кажется тут должен быть код...

// Подсказка №1: Содержимое тега textarea хранится в его свойстве value

// Подсказка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение

// -----------------------------------------------------------------------

// let comments = [];
// loadComments();

// function addComment ()
// {
// 	let text = document.getElementById('comment-area').value;

// 	comments.push(text);
	
// 	localStorage.setItem('comments', JSON.stringify(comments));

// 	console.log(localStorage.getItem('comments'));

// 	comments.forEach(function{

// 	});
// }	

// function loadComments(){
//     if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
//     addComment();
// }


// -----------------------------------------------------------------------

// let comments = [];
// loadComments();

// function addComment()
// {
// 	let commentText = document.getElementById('comment-area').value;
// 	let comment = {
// 		text: commentText,
// 	}

// 	commentText.value = '';

// 	comments.push(comment);

// 	saveComments();
// 	showComments();
// }

// function saveComments()
// {
// 	localStorage.setItem('comments', JSON.stringify(comments));
// }
// function showComments()
// {
// 	let commentArea = document.getElementById('comment-area');
// 	let out = '';
// 	comments.forEach(function(item){
// 		out += `<div class='comment'>${item.commentText}</div>`
// 	});
// 	commentArea.innerHTML = out;
// }

// function loadComments()
// {
// 	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
// 	showComments;
// }

// -----------------------------------------------------------------------

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