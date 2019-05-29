let geheelContact = document.querySelector(".alleContact");
let titelContact = document.getElementById('contact');

function contactOmhoog() {
  geheelContact.classList.add("omhoog");
  menuknop.classList.add("omhoog");
}

geheelContact.addEventListener("click", contactOmhoog);

//contact
let menuknop = document.querySelector(".menuknop");

function contactOmlaag() {
  geheelContact.classList.remove("omhoog");
  menuknop.classList.remove("omhoog");
}

menuknop.addEventListener("click", contactOmlaag);

let mailIcoon = document.getElementById('mailen');

mailIcoon.addEventListener("click", function(){
    window.location.href = "mailto:flore.vanmierlo@hotmail.com?subject=Subject&body=message%20goes%20here";
  }
);


let allebody = document.querySelector("body");
if (allebody.classList.contains("aboutPagina")) {
  //cv
  let bodyAbout = document.querySelector(".about");
  let knopCV = document.querySelector(".linkCV");
  let imgCV = document.querySelector(".cv");
  let downloadCV = document.querySelector(".downloadCV");
  let sluitCV = document.querySelector(".sluitknop");

    function cvZichtbaar() {
      imgCV.classList.add("brengbinnen");
      downloadCV.classList.add("brengbinnen");
      sluitCV.classList.add("sluitknopp2");
    }

    knopCV.addEventListener("click", cvZichtbaar);

    function cvOnzichtbaar() {
      imgCV.classList.remove("brengbinnen");
      downloadCV.classList.remove("brengbinnen");
      sluitCV.classList.remove("sluitknopp2");
    }

    sluitCV.addEventListener("click", cvOnzichtbaar);
}
else if (allebody.classList.contains("portfolioPagina"))
{
  let pijl1 = document.querySelector(".pijl1");
  let pijl2 = document.querySelector(".pijl2");
  let divPortfolio = document.querySelector(".portfolio");
  let arrayPortfolio = [];
  arrayPortfolio[0] = "Portfolio_Flore_Pagina_01.png";
  arrayPortfolio[1] = "Portfolio_Flore_Pagina_02.png";
  arrayPortfolio[2] = "Portfolio_Flore_Pagina_03.png";
  arrayPortfolio[3] = "Portfolio_Flore_Pagina_04.png";
  arrayPortfolio[4] = "Portfolio_Flore_Pagina_05.png";
  arrayPortfolio[5] = "Portfolio_Flore_Pagina_06.png";
  arrayPortfolio[6] = "Portfolio_Flore_Pagina_07.png";
  arrayPortfolio[7] = "Portfolio_Flore_Pagina_08.png";
  arrayPortfolio[8] = "Portfolio_Flore_Pagina_09.png";
  arrayPortfolio[9] = "Portfolio_Flore_Pagina_10.png";
  arrayPortfolio[10] = "Portfolio_Flore_Pagina_11_vervaagd.png";
  arrayPortfolio[11] = "Portfolio_Flore_Pagina_12.png";

  let huidigeachtergrond;

  huidigeachtergrond=0;

  pijl1.addEventListener("click", function(){
      volgende();
    }
  );

  pijl2.addEventListener("click",function(){
      vorige();
    }
  );

  function volgende(){
    huidigeachtergrond +=1;
    toonachtergrond();
  }

  function vorige(){
  	huidigeachtergrond -=1;
    toonachtergrond();
  }

  function vorigeknopzichtbaar() {
    pijl2.style.visibility = "hidden";
  }

  function volgendeknopzichtbaar() {
    pijl1.style.visibility = "hidden";
  }

  pijl2.style.visibility = "hidden";

  function toonachtergrond(){
  	if (huidigeachtergrond===0){
      pijl2.style.visibility = "hidden";
      pijl2.style.transition = "0s";
  	}
    else{
      pijl2.style.visibility = "visible";
  	}
  	if (huidigeachtergrond===arrayPortfolio.length-1){
      pijl1.style.visibility = "hidden";
      pijl1.style.transition = "0s";
  	} else{
      pijl1.style.visibility = "visible";
    }
  	divPortfolio.style.backgroundImage = "url(" +  arrayPortfolio[huidigeachtergrond] + ")";
  }

}
else if (allebody.classList.contains("projectPagina"))
{
  let divOpsomming = document.querySelector(".projectOpsomming");
  let synthworldDiv = document.querySelector(".synthworld");
  let robuustDiv = document.querySelector(".robuust");
  let thrillerDiv = document.querySelector(".thriller");
  let videoDiv = document.querySelector(".video");
  let eigenDiv = document.querySelector(".eigen");
  let poDiv = document.querySelector(".po");

  let projectSynthworld = document.querySelector(".projectSynthworld");
  let projectRubuust = document.querySelector(".projectRubuust");
  let projectThriller = document.querySelector(".projectThriller");
  let projectVideo = document.querySelector(".projectVideo");
  let projectEigen = document.querySelector(".projectEigen");
  let projectPo = document.querySelector(".projectPo");

  let innerSynth = document.querySelector(".innerSynth");
  let innerRobuust = document.querySelector(".innerRobuust");
  let innerThriller = document.querySelector(".innerThriller");
  let innerVideo = document.querySelector(".innerVideo");
  let innerEigen = document.querySelector(".innerEigen");
  let innerPo = document.querySelector(".innerPo");

  let knopDieSluit1 = document.querySelector(".dicht1");
  let knopDieSluit2 = document.querySelector(".dicht2");
  let knopDieSluit3 = document.querySelector(".dicht3");
  let knopDieSluit4 = document.querySelector(".dicht4");
  let knopDieSluit5 = document.querySelector(".dicht5");
  let knopDieSluit6 = document.querySelector(".dicht6");


  synthworldDiv.addEventListener("click", function(){
    projectSynthworld.style.height = "inherit";
    projectSynthworld.style.marginBottom = "5rem";
    innerSynth.style.top = "0";
  });

  robuustDiv.addEventListener("click", function(){
    projectRubuust.style.height = "inherit";
    projectRubuust.style.marginBottom = "5rem";
    innerRobuust.style.top = "0";
  });

  thrillerDiv.addEventListener("click", function(){
    projectThriller.style.height = "inherit";
    projectThriller.style.marginBottom = "5rem";
    innerThriller.style.top = "0";
  });

  videoDiv.addEventListener("click", function(){
    projectVideo.style.height = "inherit";
    projectVideo.style.marginBottom = "5rem";
    innerVideo.style.top = "0";
  });

  eigenDiv.addEventListener("click", function(){
    projectEigen.style.height = "inherit";
    projectEigen.style.marginBottom = "5rem";
    innerEigen.style.top = "0";
  });

  poDiv.addEventListener("click", function(){
    projectPo.style.height = "inherit";
    projectPo.style.marginBottom = "5rem";
    innerPo.style.top = "0";
  });


  knopDieSluit1.addEventListener("click", function(){
      projectSynthworld.style.height = "0";
      projectSynthworld.style.marginBottom = "0";
      innerSynth.style.top = "76rem";
  });

  knopDieSluit2.addEventListener("click", function(){
      projectRubuust.style.height = "0";
      projectRubuust.style.marginBottom = "0";
      innerRobuust.style.top = "76rem";
  });

  knopDieSluit3.addEventListener("click", function(){
      projectThriller.style.height = "0";
      projectThriller.style.marginBottom = "0";
      innerThriller.style.top = "76rem";
  });

  knopDieSluit4.addEventListener("click", function(){
      projectVideo.style.height = "0";
      projectVideo.style.marginBottom = "0";
      innerVideo.style.top = "76rem";
  });

  knopDieSluit5.addEventListener("click", function(){
      projectEigen.style.height = "0";
      projectEigen.style.marginBottom = "0";
      innerEigen.style.top = "76rem";
  });

  knopDieSluit6.addEventListener("click", function(){
      projectPo.style.height = "0";
      projectPo.style.marginBottom = "0";
      innerPo.style.top = "76rem";
  });
}
