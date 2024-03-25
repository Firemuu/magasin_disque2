nombrealbumchoisi=0;

function deplacer(elementImg){
        panier=document.getElementById("panier");
        vitrine=document.getElementById("vitrine");
            var fatherLI=elementImg.parentElement;

        if(elementImg.closest("#vitrine")){
            panier.appendChild(fatherLI);
            var varspan = document.createElement('span')
            var text = document.createTextNode("Album" +elementImg.alt + " ");
            varspan.appendChild(text);
            fatherLI.insertBefore(varspan, elementImg);
            nombrealbumchoisi++;
        }
    else{ fatherLI.removeChild(elementImg.previousSibling);
        vitrine.appendChild(fatherLI);
        nombrealbumchoisi--;
    }
document.getElementById('prix').innerHTML=nombrealbumchoisi*7.5 ;
}


// Attachez l'événement à votre bouton dès que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.bouton').addEventListener('click', function() {
        afficherFormulaire();
    });
});

function afficherFormulaire() {
    // Créez ici votre formulaire ou faites apparaître un formulaire existant
    // Par exemple :
    var formulaireHTML = '<form id="monFormulaire">';
    formulaireHTML += '<label for="nom">Nom :</label>';
    formulaireHTML += '<input type="text" id="nom" name="nom"><br>';

    formulaireHTML += '<label for="tel">Numéro de téléphone :</label>';
    formulaireHTML += '<input type="text" id="tel" name="tel"><br>';

    formulaireHTML += '<label for="prenom">Prénom :</label>';
    formulaireHTML += '<input type="text" id="prenom" name="prenom"><br>';

    formulaireHTML += '<label for="email">Email :</label>';
    formulaireHTML += '<input type="email" id="email" name="email"><br>';

    formulaireHTML += '<label for="carte">Numero de carte bancaire :</label>';
    formulaireHTML += '<input type="text" id="carte" name="carte"><br>';

    formulaireHTML += '<label for="groupe">Groupe préféré :</label>';
    formulaireHTML += '<input type="text" id="groupe" name="groupe"><br>';

    formulaireHTML += '<label for="couleur">Couleur préférée :</label>';
    formulaireHTML += '<input type="text" id="couleur" name="couleur"><br>';

    formulaireHTML += '<input type="submit" value="Envoyer">';
    formulaireHTML += '</form>';

    // Remplacez le contenu de la div avec l'ID "valider" par le formulaire
    document.getElementById('valider').innerHTML = formulaireHTML;
}

