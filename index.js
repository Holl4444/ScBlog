const expandBtn = document.querySelector('#expand-btn');
const blogSection = document.querySelector('.blog-posts');

function toggleBlogs(e) {
  e.preventDefault();
  blogSection.classList.toggle('hidden');
  expandBtn.textContent =
    expandBtn.textContent === 'View More' ? 'View Less' : 'View More';
}

expandBtn.addEventListener('click', toggleBlogs);
