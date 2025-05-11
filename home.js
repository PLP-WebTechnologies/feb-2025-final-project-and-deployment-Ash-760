const blogList = document.getElementById('blog-list');
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

if (blogs.length === 0) {
  blogList.innerHTML = "<p>No posts yet. <a href='post.html'>Write one now</a>!</p>";
} else {
  blogs.forEach((blog) => {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="author">By ${blog.author}</p>
      <p>${blog.content.substring(0, 150)}...</p>
    `;
    blogList.appendChild(post);
  });
}
