


var section=document.getElementById("one");

var container=document.createElement("div");
container.classList.add("container");

container.style.width="70%"
container.style.margin="auto";
container.style.border="1px solid blue";
container.style.padding="10px";
container.style.backgroundColor="aqua";

section.appendChild(container);

var content=document.createElement("div");
content.classList.add("content");

content.style.display="flex";
content.style.justifyContent="space-between";

container.appendChild(content);



var head=document.createElement("h1");
head.classList.add("head");
head.innerHTML="Non consectetur a erat nam at lectus urna duis?";
head.style.color="blue";

content.appendChild(head);

var icon_div=document.createElement("div");
icon_div.classList.add("icon_div");


content.appendChild(icon_div);
icon_div.addEventListener("click",function change(){
    para.style.display="none";
    icon.style.transform="rotate(180deg)";
})

var icon=document.createElement("i");
icon.classList.add("fa");
icon.classList.add("fa-chevron-circle-down");
icon.style.fontSize="20px";
icon.style.color="blue";

icon_div.appendChild(icon);
//<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>

var para=document.createElement("p");
para.classList.add("para");
para.innerHTML="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.";

container.appendChild(para);

