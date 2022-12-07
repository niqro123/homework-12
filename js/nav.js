let navelements=['home', "about", "gallery", "contact", "courses"];

let navpages=['index.html', "about.html", "gallery.html", "contact.html", "courses.html"];

let navtext = "<ul>";
console.log(navtext);
for(i=0; i<navelements.length; i++){
    


    navtext += '<li><a href="' +  navpages[i]  +    '">' + navelements[i] + "</a></li>";
    console.log(navtext);

}
navtext += "</ul>";
console.log(navtext);

document.getElementById("nav").innerHTML = navtext;