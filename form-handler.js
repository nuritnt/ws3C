document.addEventListener('DOMContentLoaded', function() {
  var forms = document.querySelectorAll('.form');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Verstecke das gesamte Formular
      form.style.display = 'none';

      // Bestimme die ID der Bestätigungsnachricht basierend auf der ID des Formulars
      var confirmationId = form.id + 'Confirmation';

      // Zeige die Bestätigungsnachricht
      var confirmationMessage = document.getElementById(confirmationId);
      if (confirmationMessage) {
        confirmationMessage.style.display = 'block';
      }
    });
  });
});
