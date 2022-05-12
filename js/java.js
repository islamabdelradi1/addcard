var btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {
    var title=document.getElementById("inpname").value;
    var inpParagraph=document.getElementById("inpParagraph").value;
    var inpTime=document.getElementById("inpTime").value;
    var inpimg=document.getElementById("inpimg").value;

    var row=document.getElementById("rows");

    var dev=document.createElement("div");
    dev.classList.add("col-4");

    row.append(dev);

    var card=document.createElement("div");
    card.classList.add("card");
    card.classList.add("h-100");
    dev.append(card);


    var img=document.createElement("img");
    img.src=inpimg;
    img.classList.add("card-img-top");
    img.alt="Skyscrapers";



    var i=document.createElement("i");
    var a=document.createElement("a");
    a.append(i);
    i.classList.add("fa-solid");
    i.classList.add("fa-square-xmark");

    a.addEventListener("click",(eo) => {
        dev.remove();
    })


    var dev2=document.createElement("div");
    dev2.classList.add("card-body");

    card.append(a,img,dev2);


    var hh=document.createElement("h5");
    hh.classList.add("card-title");
    hh.innerHTML=title;
    var pp=document.createElement("p");
    pp.classList.add("card-text");
    pp.innerHTML=inpParagraph;

    dev2.append(hh,pp);

    var dev3=document.createElement("div");
    dev3.classList.add("card-footer");

    card.append(dev3);

    var small=document.createElement("small");
    small.classList.add("text-muted");
    small.innerHTML=inpTime;

    dev3.append(small);

    eo.preventDefault()
    

})
























