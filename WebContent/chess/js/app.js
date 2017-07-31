var app = {

  /*
   * Lettres correspondants aux colonnes
   */
  lettres: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],

  /*
   * Fonction appelée au chargement du DOM
   */
  init: function() {
    console.info('app.init');
    // Je crée 8 lignes
    for (var line = 0; line < 8; line++){
      // Je crée 8 colonnes
      for (var column = 0; column < 8; column++) {
        // Je crée une case
        var square = app.creerCases(line, column);

        // J'ajoute ma case à #plateau
        $('#plateau').append(square);
      }
    }
    // Créer pièces
    app.creerPieces();

    // Drag'n'Drop
    $('.piece').draggable({
      containment: '#plateau',
      cursor: 'move',
      snap: true
    });
  },


  /*
   * Créer les cases
   * Chaque case possède un id : A1, A2, … H7, H8
   */
  creerCases: function(line, column) {
    console.info('app.creerCases');
    // Je crée une div
    app.$square = $('<div>');

    // Je rajoute les classes
    app.getClass(line, column);

    // Je rajoute le numéro de case
    app.getSquareId(line, column);

    return app.$square;

  },

  getClass: function(line, column){
    // Je rajoute la classe "case"
    app.$square.addClass('case');

    // On donne la classe square--brown
    if (line % 2 !== column % 2) {
      app.$square.addClass('grise');
    }

    // Je retourne la ou les classes
    return app.$square;
  },

  getSquareId: function(line, column){
    // Numéro de ligne
    var numero = 8 - line;

    // Lettre de colonne
    var lettre = app.lettres[column];

    // On retourne l'id' de la case
    return app.$square.attr('id', lettre + numero);
  },

  /*
   * Créer les pièces
   */
  creerPieces: function() {
    console.info('app.creerPieces');

    /* Blanches */
    // Tours
    app.creerPiece('tour', 'blanche', 'A1');
    app.creerPiece('tour', 'blanche', 'H1');

    // Cavalier
    app.creerPiece('cavalier', 'blanche', 'B1');
    app.creerPiece('cavalier', 'blanche', 'G1');

    // Fous
    app.creerPiece('fou', 'blanche', 'C1');
    app.creerPiece('fou', 'blanche', 'F1');

    // Roi
    app.creerPiece('roi', 'blanche', 'D1');

    // Reine
    app.creerPiece('reine', 'blanche', 'E1');

    // Pions
    app.creerPiece('pion', 'blanche', 'A2');
    app.creerPiece('pion', 'blanche', 'B2');
    app.creerPiece('pion', 'blanche', 'C2');
    app.creerPiece('pion', 'blanche', 'D2');
    app.creerPiece('pion', 'blanche', 'E2');
    app.creerPiece('pion', 'blanche', 'F2');
    app.creerPiece('pion', 'blanche', 'G2');
    app.creerPiece('pion', 'blanche', 'H2');


    /* Noires */
    // Tours
    app.creerPiece('tour', 'noire', 'A8');
    app.creerPiece('tour', 'noire', 'H8');

    // Cavalier
    app.creerPiece('cavalier', 'noire', 'B8');
    app.creerPiece('cavalier', 'noire', 'G8');

    // Fous
    app.creerPiece('fou', 'noire', 'C8');
    app.creerPiece('fou', 'noire', 'F8');

    // Roi
    app.creerPiece('roi', 'noire', 'D8');

    // Reine
    app.creerPiece('reine', 'noire', 'E8');

    // Pions
    app.creerPiece('pion', 'noire', 'A7');
    app.creerPiece('pion', 'noire', 'B7');
    app.creerPiece('pion', 'noire', 'C7');
    app.creerPiece('pion', 'noire', 'D7');
    app.creerPiece('pion', 'noire', 'E7');
    app.creerPiece('pion', 'noire', 'F7');
    app.creerPiece('pion', 'noire', 'G7');
    app.creerPiece('pion', 'noire', 'H7');
  },


  /*
   * Créer une pièce
   */
  creerPiece: function(type, couleur, id) {

    app.$piece = $('<div>');
    app.$piece.addClass('piece ' + type);
    app.$piece.addClass(couleur);
    $('#'+id).append(app.$piece);

  },
};


/*
 * Chargement du DOM
 */
$(app.init);
