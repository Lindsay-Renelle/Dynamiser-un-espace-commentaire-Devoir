//// Récupération du document HTML
const form = document.querySelector("form");

// Ajout d'un écouteur d'événement pour le formulaire
form.addEventListener("submit", function(event) {
    // Empêche le rechargement de la page
    event.preventDefault(); 

    // Récupération de la valeur des champs (ID)
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let commentText = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Vérification des champs de formulaires
    if (firstName === "" || lastName === "" || commentText === "") {
        // Si l'un des champs est vide alors afficher le message d'erreur
        errorMessage.style.display = "block";
    } else {
        // Si tous les champs sont remplis, dissimuler le message d'erreur
        errorMessage.style.display = "none";

        // Récupération de la liste des commentaires
        let commentList = document.getElementById("comment-list");

        // Ajout d'un nouveau commentaire dans la liste déjà existante
        let newComment = document.createElement("div");
        newComment.classList.add("comment");

        // Récupération du contenu du formulaire
        newComment.innerHTML = `<strong>${firstName} ${lastName}</strong><p>${commentText}</p>`;

        // Ajout du nouveau commentaire à la liste des commentaires existants
        commentList.appendChild(newComment);

        // Réinitialisation des champs de formulaires
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("message").value = "";
    }
});