const title = document.getElementById("blogTitle");
const blogArea = document.getElementById("blog-area");
const previewArea = document.getElementById("preview-area");
const previewButton = document.getElementById("btnPreview");
const date = document.getElementById("date");
const author = document.getElementById("author")

// var tag = document.createElement("p");


previewButton.addEventListener('click', function()
{
    previewArea.innerText = title.value + "\n" + date.value + "\n" + "Posted by: " + author.value + "\n\n" + blogArea.value;
    //previewArea.value = title.value + "\n" + date.value + "\n" + "Posted by: " + author.value + "\n\n" + blogArea.value;

})
