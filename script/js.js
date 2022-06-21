const blogArea = document.getElementById("blog-area");
const date = document.getElementByType("date");
const title = document.getElementByName("blogTitle");
const previewArea = document.getElementById("preview-area");
const previewButton = document.getElementById("preview-button");
var tag = document.createElement("p");

previewButton.addEventListener('click', function()
{
    previewArea.innerText = blogArea.Value
    // var text = document.createTextNode("Tutorix is the best e-learning platform");

    // tag.appendChild(text);
    
    // var element = document.getElementById("new");
    
    // element.appendChild(tag);
})
