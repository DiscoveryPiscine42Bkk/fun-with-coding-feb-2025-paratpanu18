const handleButtonClick = () => {
    const body = document.querySelector('body');
    const newColorHex = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = `#${newColorHex}`;
}