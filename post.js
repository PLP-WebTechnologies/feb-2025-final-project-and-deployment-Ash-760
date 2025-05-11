const form = document.getElementById('blog-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !author || !content) {
    alert("Please fill in all fields.");
    return;
  }

  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  blogs.unshift({ title, author, content });
  localStorage.setItem('blogs', JSON.stringify(blogs));

  alert('Blog posted!');
  window.location.href = 'index.html';
});
