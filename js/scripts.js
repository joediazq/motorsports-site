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

headEl= document.querySelector('h1')

headEl.addEventListener('click', refresh)

function refresh() {
    location.reload()
};