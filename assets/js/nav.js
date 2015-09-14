var w = $(window).width();
 
function load_home(){
    document.getElementById("main").innerHTML='<object type="text/html" data="home.html" ></object>';
}

function load_about(){
    $("#main").load("aboutme.html");
}

function load_projects(){
    document.getElementById("main").innerHTML='<object type="text/html" data="projects.html" ></object>';
}

function load_contact(){
    document.getElementById("main").innerHTML='<object type="text/html" data="contact.html" width=w></object>';
}