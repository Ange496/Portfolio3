$(document).ready(function () {
    $('.operator').on('click', function () {
        let num1 = parseFloat($('#number1').val());
        let num2 = parseFloat($('#number2').val());
        let operation = $(this).data('operation');
        let result;

        // Validation des entrées
        if (isNaN(num1) || isNaN(num2)) {
            $('#result').text('Veuillez entrer deux nombres valides.');
            return;
        }

        // Calcul selon l'opération
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Erreur : Division par zéro';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Opération non valide.';
        }

        // Afficher le résultat
        $('#result').text(result);
    });
});
