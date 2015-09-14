var w = $(window).width();
 
function load_home(){
    $("#main").load("home.html");
    $("#home").replaceWith('<li id="home" class="active"><a href="#home" onclick="load_home()">Home</a></li>');
    $("#about").replaceWith('<li id="about"><a href="#about" onclick="load_about()">About Me</a></li>');
    $("#projects").replaceWith('<li id="projects"><a href="#projects" onclick="load_projects()">Projects</a></li>');
    $("#contact").replaceWith('<li id="contact"><a href="#contact" onclick="load_contact()">Contact</a></li>');
}

function load_about(){
    $("#main").load("aboutme.html");
    $("#home").replaceWith('<li id="home"><a href="#home" onclick="load_home()">Home</a></li>');
    $("#about").replaceWith('<li id="about" class="active"><a href="#about" onclick="load_about()">About Me</a></li>');
    $("#projects").replaceWith('<li id="projects"><a href="#projects" onclick="load_projects()">Projects</a></li>');
    $("#contact").replaceWith('<li id="contact"><a href="#contact" onclick="load_contact()">Contact</a></li>');
}

function load_projects(){
    $("#main").load("projects.html");
    $("#home").replaceWith('<li id="home"><a href="#home" onclick="load_home()">Home</a></li>');
    $("#about").replaceWith('<li id="about"><a href="#about" onclick="load_about()">About Me</a></li>');
    $("#projects").replaceWith('<li id="projects" class="active"><a href="#projects" onclick="load_projects()">Projects</a></li>');
    $("#contact").replaceWith('<li id="contact"><a href="#contact" onclick="load_contact()">Contact</a></li>');
}

function load_contact(){
    $("#main").load("contact.html");
    $("#home").replaceWith('<li id="home"><a href="#home" onclick="load_home()">Home</a></li>');
    $("#about").replaceWith('<li id="about"><a href="#about" onclick="load_about()">About Me</a></li>');
    $("#projects").replaceWith('<li id="projects"><a href="#projects" onclick="load_projects()">Projects</a></li>');
    $("#contact").replaceWith('<li id="contact" class="active"><a href="#contact" onclick="load_contact()">Contact</a></li>');
}