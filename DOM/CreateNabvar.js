function Header() {
     var main_contener = document.getElementById("main-contener");
     var header = document.createElement("header");
     // window.alert(main_contener);
     header.setAttribute("style", "height: 10vh; width:100vw;");
     header.setAttribute("class", "d-flex align-items-center  justify-content-between bg-info");

     var logoDiv = document.createElement("div");
     logoDiv.setAttribute("style", "height: 98%; width:15%;");
     var logoImg = document.createElement("img");
     logoImg.setAttribute("src", "assets/Images/logo.jpeg");
     logoImg.setAttribute("style", "height: 100%");
     logoImg.setAttribute("class", "img-fluid");

     var menuDiv = document.createElement("div");
     menuDiv.setAttribute("style", "height:95%; width: 40%; ")
     menuDiv.setAttribute("class", "d-flex align-items-center")

     var ul = document.createElement("ul");

     ul.setAttribute("style", "margin:0px; padding:0px;  height: 90%; width:100%");
     ul.setAttribute("class", "d-flex list-inline justify-content-around align-items-center ")
     var li1 = document.createElement("li");
     var li1a = document.createElement("a");
     li1a.setAttribute("href", "#");
     li1a.innerHTML = "HOME"
     li1a.setAttribute("style", "text-decoration: none; color: white");


     var li2 = document.createElement("li");
     var li2a = document.createElement("a");
     li2a.setAttribute("href", "#");
     li2a.innerHTML = "ABOUT"
     li2a.setAttribute("style", "text-decoration: none; color: white");


     var li3 = document.createElement("li");
     var li3a = document.createElement("a");
     li3a.setAttribute("href", "#");
     li3a.innerHTML = "ABOUT"
     li3a.setAttribute("style", "text-decoration: none; color: white");

     var li4 = document.createElement("li");
     var li4a = document.createElement("a");
     li4a.setAttribute("href", "#");
     li4a.innerHTML = "CONTACT"
     li4a.setAttribute("style", "text-decoration: none; color: white");



     var buttenDiv = document.createElement("div");
     buttenDiv.setAttribute("style", "height:95%; width: 20%; ");

     buttenDiv.setAttribute("class", "d-flex justify-content-around align-items-center");

     var signUp = document.createElement("div");
     var signUpa = document.createElement("a");
     signUpa.innerHTML = "SignUp";
     signUp.setAttribute("class", "btn btn-warning");


     var signin = document.createElement("div");
     var signina = document.createElement("a");
     signina.innerHTML = "Signin";
     signin.setAttribute("class", "btn btn-warning");



     main_contener.appendChild(header);
     header.appendChild(logoDiv);
     logoDiv.appendChild(logoImg);
     header.appendChild(menuDiv)
     menuDiv.appendChild(ul);
     ul.appendChild(li1);
     li1.appendChild(li1a);
     ul.appendChild(li2);
     li2.appendChild(li2a);
     ul.appendChild(li3);
     li3.appendChild(li3a);
     ul.appendChild(li4);
     li4.appendChild(li4a);
     header.appendChild(buttenDiv)
     buttenDiv.appendChild(signUp);
     signUp.appendChild(signUpa);
     buttenDiv.appendChild(signin);
     signin.appendChild(signina);
}