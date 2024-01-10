// document.addEventListener('DOMContentLoaded', function() {
//   var forms = document.querySelectorAll('.form');

//   forms.forEach(function(form) {
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();

//       // Sammle die Formulardaten
//       var formData = new FormData(form);

//       // Senden der Formulardaten mit fetch
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString(),
//       })
//       .then(() => {
//         // Verstecke das gesamte Formular
//         form.style.display = 'none';

//         // Zeige die Bestätigungsnachricht
//         var confirmationId = form.id + 'Confirmation';
//         var confirmationMessage = document.getElementById(confirmationId);
//         if (confirmationMessage) {
//           confirmationMessage.style.display = 'block';
//         }
//       })
//       .catch((error) => alert(error));
//     });
//   });
// });
