document.addEventListener('DOMContentLoaded', function () 
{
    const contactForm = document.getElementById('contactForm');
    const commentsContainer = document.getElementById('comments-container');

    contactForm.addEventListener('submit', function (event) 
    {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        commentElement.innerHTML = `
            <p><strong>${name}</strong> (${email}): ${message}</p>
        `;

        commentsContainer.appendChild(commentElement);

        contactForm.reset();
    });
});
