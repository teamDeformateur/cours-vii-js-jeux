var formTest = document.getElementById('test');

function resultats() {
	var resultats = document.getElementById("resultats");
	resultats.className = "visible";
	// si plus de A
	if (nbA > nbB && nbA > nbC) {
		document.getElementById("A").className = "visible";
	} else if (nbB > nbA && nbB > nbC) {
		document.getElementById("B").className = "visible";
	} else {
		document.getElementById("C").className = "visible";
	}
}
// Sur l'évènement onsubmit du formulaire (soumission), on lance les
// vérifications sur la saisie de l'utilisateur
if (formTest) {
	formTest.onsubmit = function(event) {
		// on empêche le rafraîchissement de la page
		event.preventDefault();

		q1Answered = true;
		q2Answered = true;
		q3Answered = true;

		nbA = 0;
		nbB = 0;
		nbC = 0;
		// je récupère la liste des boutons radios q1
		var radioList = formTest.elements.namedItem("q1");
		// si le premier élément est coché
		if (radioList[0].checked) {
			nbA++;
		} else if (radioList[1].checked) {
			nbB++;
		} else if (radioList[2].checked) {
			nbC++;
		} else {
			q1Answered = false;
			// changer le style
			document.getElementById("question1").className = "fondRouge";
		}
		if (q1Answered) {
			document.getElementById("question1").className = "fondBlanc";
		}

		// les cases à cocher de la question 2
		var checkboxA = formTest.elements.namedItem("q2_a");
		var checkboxB = formTest.elements.namedItem("q2_b");
		var checkboxC = formTest.elements.namedItem("q2_c");

		if (checkboxA.checked) {
			nbA++;
		}
		if (checkboxB.checked) {
			nbB++;
		}
		if (checkboxC.checked) {
			nbC++;
		}
		// si aucune case n'est cochée
		if (!checkboxA.checked && !checkboxB.checked && !checkboxC.checked) {
			q2Answered = false;
			document.getElementById("question2").className = "fondRouge";
		} else {
			document.getElementById("question2").className = "fondBlanc";
		}

		var selectedOptions = formTest.elements.namedItem("q3").selectedOptions;
		// si pas d'éléments dans le tableau => pas d'options sélectionnées
		if (selectedOptions.length == 0) {
			q3Answered = false;
			document.getElementById("question3").className = "fondRouge";
		} else {
			document.getElementById("question3").className = "fondBlanc";
			// je parcours les réponses
			for (i = 0; i < selectedOptions.length; i++) {
				switch (selectedOptions[i].value) {
				case "a":
					nbA++;
					break;
				case "b":
					nbB++;
					break;
				case "c":
					nbC++;
					break;
				}
			}
		}

		// je retourne vrai ssi toutes les questions ont des réponses
		if (q1Answered && q2Answered && q3Answered) {
			resultats();
			return true;
		} else {
			return false;
		}

	};
}