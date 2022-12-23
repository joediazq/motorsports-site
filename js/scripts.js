$(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});

$(function(){
    $("#cancelBtn").click(function(){
        $("#loginModal").modal("hide");
    });
});


const headEl= document.querySelector('h1');
const readMore= document.getElementById('readMore');

headEl.addEventListener('click', refresh);
readMore.addEventListener('click', goToPage);

function refresh() {
    location.reload();
};

function goToPage() {
    location.href = "../site-in-development.html"
}
