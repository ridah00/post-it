let n=0;
function creer_une_postit() {
  let titre_note = document.querySelector("#note_title").value;
  let texte_note = document.querySelector("#note_text").value;
  if (titre_note != "" && texte_note != "") {
    
    document.querySelector(".posti_section").innerHTML += `<div id="note${n}" class="card text-center " >
                <div class="card-body">
                    <button type="button"  onclick="supprimer_note(${n})" class="btn-close position-absolute top-0 end-0 p-2" aria-label="Close"></button>
                    <h2 class="card-title">${titre_note}</h2>
                    <p class="card-text">${texte_note}</p>
                </div>
            </div>`;
            n+=1;
            // document.querySelector("#note_title").value="";
            // document.querySelector("#note_text").value="";
  } else {
    alert("Ya pas de texte");
  }
}
function effacer_tout() {
  document.querySelector(".posti_section").innerHTML = "";
}


document.querySelector("#submit").addEventListener("click", function () {
  creer_une_postit();
});

document.querySelector("#effacer").addEventListener("click", function (){ 
  document.querySelector("#note_title").value="";
            document.querySelector("#note_text").value="";
}
)

  function supprimer_note(i){
    let child = document.querySelector(`#note${i}`);
    document.querySelector(".posti_section").removeChild(child);
}