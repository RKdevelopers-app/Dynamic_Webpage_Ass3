function changeText() {
    const header = document.getElementById('header');
    header.innerHTML = 'The Text Has Been Changed!';
    
    const description = document.getElementsByClassName('description')[0];
    description.innerHTML = 'This is a <strong>new paragraph</strong> with updated content!';
    
    const spans = document.getElementsByTagName('span');
    if (spans.length > 0) {
        spans[0].innerHTML = 'new highlighted text';
    }
}

function changeImage() {
    const image = document.getElementById('dynamicImage');
    image.src = 'image2.jpeg';
}

function addText() {
    const textContainer = document.getElementById('textContainer');
    const newText = document.createTextNode('This is some new text added dynamically.');
    textContainer.appendChild(newText);
}

function deleteNode() {
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer) {
        imageContainer.parentNode.removeChild(imageContainer);
    } else {
        console.error('Element with id "imageContainer" not found.');
    }
}

document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('changeImageButton').addEventListener('click', changeImage);
document.getElementById('addTextButton').addEventListener('click', addText);
document.getElementById('deleteNodeButton').addEventListener('click', deleteNode);
