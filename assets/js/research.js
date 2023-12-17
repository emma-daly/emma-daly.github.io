/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Results of the Forward-looking Community-wide Consultation",
    authors:
      "Emma Daly, Jane Dunne, Federico Gaspari, Teresa Lynn, Natalia Resende, Andy Way, Maria Giagkou, Stelios Piperidis, Tereza Vojtěchová, Jan Hajič, Annika Grützner-Zahn, Stefanie Hegele, Katrin Marheinecke & Georg Rehm",
    conferences:
      "European Language Equality.",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/cover.webp",
    citation: {
      vancouver:
        "Daly, E. et al. (2023). Results of the Forward-looking Community-wide Consultation. In: Rehm, G., Way, A. (eds) European Language Equality. Cognitive Technologies. Springer, Cham.",
    },
    abstract:
      "Within the ELE project three complementary online surveys were designed and implemented to consult the Language Technology (LT) community with regard to the current state of play and the future situation in about 2030 in terms of Digital Language Equality (DLE). While Chapters 4 and 38 provide a general overview of the community consultation methodology and the results with regard to the current situation as of 2022, this chapter summarises the results concerning the future situation in 2030. All of these results have been taken into account for the specification of the project’s Strategic Research, Innovation and Implementation Agenda (SRIA) and Roadmap for Achieving Full DLE in Europe by 2030.",
    absbox: "absPopup1",
  },

  {
  title: "Footwork and Fellowship: An Exploration of Community Dynamics in Adult Irish Dance",
    authors:
      "Emma Daly",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/ul.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This study attempts to analyze the sense of community in these settings and provide a detailed examination of observed adult dance classes. By examining structures, interactions, and social dynamics, the paper provides an understanding of the nature of community in adult Irish dance.",
    absbox: "absPopup1",
  },
  {
  title: "Correction to Choreography: An Ethnographic Study on the Impact of Feedback on Adult Irish Dancers’ Movements",
    authors:
      "Emma Daly",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/ul.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This ethnographic project aims to unravel the dynamics of adult Irish dancers’ movements before and after receiving feedback. Specifically, the study focuses on how positive and negative feedback influences the kinetic responses of dancers using Laban Movement Analysis.",
    absbox: "absPopup1",
  },


];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
