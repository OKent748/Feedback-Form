const form = document.getElementById('feedback-form');
const inputs = form.querySelectorAll('input, textarea');
const feedbackDisplay = document.getElementById('feedback-display');
const charCount = document.getElementById('char-count');

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(toolTip);

form.addEventListener('input', (e) => {
    if (e.target.id === 'comments') {
        charCount.textContent = `Characters: ${e.target.value.length}`;
    }
});
form.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        tooltip.textContent = 'Enter your ${e.target.name}';
        tooltip.style.display = 'block';
        tooltip.style.top = `${e.pageY - 30}px`;
        tooltip.style.left = `${e.pageX + 10}px`;      
    }
});
form.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY - 30}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
});
form.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        tooltip.style.display = 'none';
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if (!username || !email || !comments) {
        alert('Please fill out all fields.');
        return;
    }
    const feedbackEntry = document.createElement('div');
    feedbackEntry.innerHTML =`
    <p><strong>${username}</strong> (${email})</p>
    <p>${comments}</p>
    <hr/>
    `;
    feedbackDisplay.appendChild(feedbackEntry);
    form.reset();
    charCount.textContent = 'Characters: 0';
});
document.body.addEventListener('click', (e) => {
    console.log('Background clicked!');
});
form.addEventListener('click', (e) => {
    e.stopPropagation();
});