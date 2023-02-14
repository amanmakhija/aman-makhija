//Main
var navbar = document.getElementsByTagName('nav')[0];
var about = document.getElementById('about');
var sticky = about.offsetTop;

window.addEventListener("scroll", function () {
    if (window.scrollY >= sticky - 1 && this.window.innerWidth > 920) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        navbar.style.backdropFilter = "blur(7px)";
    } else if (window.scrollY < sticky && this.window.innerWidth > 920) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "blur(0px)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        navbar.style.backdropFilter = "blur(7px)";
    }
});

//Navbar
var burger = document.getElementById('burger');
var links = document.getElementById('links');
var navbar = document.getElementsByTagName('nav')[0];
var heading = document.getElementById('heading');

burger.addEventListener('click', function () {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        navbar.classList.remove('opened');
    } else {
        burger.classList.add('open');
        navbar.classList.add('opened');
    }
});

links.addEventListener('click', function () {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        navbar.classList.remove('opened');
    }
});

heading.addEventListener('click', function () {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        navbar.classList.remove('opened');
    }
});


//Home Page
var el = document.querySelector("#home");

var head = document.querySelector("#heading");

el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
});

head.addEventListener("click", () => {
    window.location.replace("#home");
});

//About Page
if ($(".text-slider").length == 1) {

    var typed_strings =
        ["Developer", "Designer", "Freelancer", "Coffeeholic", "Problem Solver"];

    var typed = new Typed(".text-slider", {
        strings: typed_strings,
        typeSpeed: 100,
        loop: true,
        backDelay: 1000,
        backSpeed: 90
    });
}

//Skills Page
var urls = [
    {
        "name": "HTML",
        "url": "https://world-it.ro/images/logo_html.png"
    },
    {
        "name": "CSS",
        "url": "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
    },
    {
        "name": "JavaScript",
        "url": "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
    },
    {
        "name": "ReactJS",
        "url": "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
    },
    {
        "name": "NodeJS",
        "url": "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
    },
    {
        "name": "MongoDB",
        "url": "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
    },
    {
        "name": "ExpressJS",
        "url": "https://hackersandslackers-cdn.storage.googleapis.com/2020/05/express.png"
    },
    {
        "name": "Bootstrap",
        "url": "https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png"
    },
    {
        "name": "Git",
        "url": "https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png"
    },
    {
        "name": "GitHub",
        "url": "https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"
    },
    {
        "name": "C",
        "url": "https://cdn.iconscout.com/icon/free/png-256/visual-studio-code-569564.png"
    },
    {
        "name": "C++",
        "url": "https://i.pinimg.com/originals/f0/50/18/f0501813ea932b1676c7e604e47a9de3.png"
    },
    {
        "name": "Python",
        "url": "https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png"
    },
    {
        "name": "VS Code",
        "url": "https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png"
    }
];
var skillset = document.getElementById('skillset');

urls.map((u) => {
    skillset.innerHTML += `<div class="skillset-item"><img src="${u.url}" alt=""><p>${u.name}</p></div>`
});

//Projects Page
var projects = [];
var projectContainer = document.getElementById('project-container');
var projectHeading = document.getElementById('project-heading');

projects.length > 0 ? projects.map((p) => {
    projectContainer.innerHTML += `<div class="project-item"><img src="${u.url}" alt=""><p>${u.name}</p></div>`
}) : projectContainer.innerHTML = `<p>No Projects Yet</p>`, projectHeading.style.display = "none";

//Footer
var ft = document.getElementsByTagName('footer')[0];

ft.addEventListener("mousemove", (e) => {
    ft.style.backgroundPositionX = -e.offsetX + "px";
    ft.style.backgroundPositionY = -e.offsetY + "px";
});