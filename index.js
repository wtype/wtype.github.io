async function captureEmail() {
  try {
    await navigator.clipboard.writeText(`${location.href}meow.txt`);
  } catch (error) {
    console.log('Unable to capture email: ', error);
  }
}

document.querySelector('button').addEventListener('click', e => {
  e.preventDefault();
  captureEmail().then(() => {
    e.target.innerText = 'Copied!';
    setTimeout(() => {
      e.target.innerText = 'Contact';
    }, 1200);
  });
});
