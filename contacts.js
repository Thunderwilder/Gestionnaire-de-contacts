/******************************MODELE D'UN OBJET - PROTOTYPE CONTACT******************************/

var Contact = {
	init: function(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	},

	decrire: function(){
		var description = "Nom : " + this.nom + ", " + "prénom : " + this.prenom;
		return description;
	}
};


/**************************************TABLEAU DES CONTACTS**************************************/

// Liste des contacts déjà entrés dans le tableau
	var contact1 = Object.create(Contact);
	contact1.init("Lévisse", "Carole");

	var contact2 = Object.create(Contact);
	contact2.init("Nelsonne", "Mélodie");

// Tableau des contacts
	var contacts = [contact1, contact2];


/************************************GESTIONNAIRE DES CONTACTS************************************/

console.log("Bienvenue dans le gestionnaire des contacts !");

while(true){
		console.log("1 : Lister les contacts");
		console.log("2 : Ajouter un contact");
		console.log("0 : Quitter");
		var option = Number(prompt("Choisissez une option"));

		if(option === 0){	// permet de sortir de la boucle
			break;
		}

		else if(option === 1){	// permet de lister les contacts
			console.log("Voici la liste de tous vos contacts :");
			contacts.forEach(function(contact){
				console.log(contact.decrire());
			});
			console.log("\n");
		}

		else if(option === 2){	// permet d'ajouter un nouveau contact à la liste
			var nom = prompt("Entrez le nom du nouveau contact :");
			var contact = Object.create(Contact);
			var prenom = prompt("Entrez le prenom du nouveau contact :");
			var contact = Object.create(Contact);
			contact.init(nom, prenom);

			contacts.push(contact);
			console.log("Le nouveau contact a été ajouté");
			console.log("\n");
		}

		else{
			console.log("Vous n'avez pas saisi un nombre valide");
			console.log("\n");
		}
	}

