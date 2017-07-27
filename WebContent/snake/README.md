# snake

Ce dossier contient deux jeux snake. Le premier est un snake solo classique et le second est une version pour 2 joueurs.

## Indications
* la grille sur laquelle évolue le serpent peut être un tableau `<table>` construit dynamiquement
* le serpent se déplace d'un case vers l'avant toutes les 250ms (utilisation d'un intervalle)
* les pommes apparaissent aléatoirement (Math.random)
* les styles CSS peuvent être utilisés pour change le style des cases en fonction de leur état :
  * vide
  * pomme
  * serpent


## Commandes
Snake noir
- flèche droite : tourner à droite
- flèche gauche : tourner à gauche
- flèche haut : monter
- flèche bas : descendre
    
Snake rouge
- "d" : tourner à droite
- "q" : tourner à gauche
- "z" : monter
- "s": descendre
    
Relancer une partie
- F5


## Règles du jeu
### Un joueur
- Le snake mange des pommes pour grandir
- A chaque fois qu'il mange une pomme, le score augmente de 10 points, et la vitesse augmente légèrement jusqu'à une vitesse maximum
- Si le snake se mord la queue, il meurt et la partie s'arrête
- Pour relancer une partie, appuyez sur F5
- Lorsque le snake arrive sur un bord du terrain de jeu, il se téléporte au niveau du bord opposé.
    
### Deux joueurs
- Les snakes mangent des pommes pour grandir
- Lorsqu'un snake arrive sur un bord du terrain de jeu, il se téléporte au niveau du bord opposé.
- A chaque fois qu'il mange une pomme, le score du snake qui l'a mangée augmente de 10 points, et la vitesse augmente légèrement jusqu'à une vitesse maximum
- Si un snake se mord la queue, il meurt et disparait. Si les deux snakes sont morts, la partie s'arrête
- Pour relancer une partie, appuyez sur F5
- Les snakes se traversent
- Le snake noir est prioritaire lorsqu'il s'agit de manger une pomme