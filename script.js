function toggleFavorite(button) {
  var card = button.closest('.card');
  card.classList.toggle('favorito');

  // Actualizar el contador de favoritos
  var favoritesCount = document.querySelector('.favorites-count');
  var favoriteCards = document.querySelectorAll('.card.favorito');
  favoritesCount.textContent = favoriteCards.length;

  // Actualizar la lista de previsualización de favoritos
  var favoritesPreviewList = document.querySelector('.favorites-preview-list');
  favoritesPreviewList.innerHTML = '';

  favoriteCards.forEach(function(card) {
    var cardTitle = card.querySelector('.card-title').textContent;
    var cardImage = card.querySelector('img').src; // Obtener la URL de la imagen
    var previewItem = document.createElement('li');

    var previewImage = document.createElement('img'); // Crear elemento de imagen
    previewImage.src = cardImage; // Asignar la URL de la imagen
    previewItem.appendChild(previewImage); // Agregar imagen al elemento de la lista

    var previewText = document.createElement('span'); // Crear elemento de texto
    previewText.textContent = cardTitle; // Asignar el título de la tarjeta
    previewItem.appendChild(previewText); // Agregar texto al elemento de la lista

    favoritesPreviewList.appendChild(previewItem);
  });

  // Mostrar/ocultar la previsualización de favoritos
  var favoritesPreview = document.querySelector('.favorites-preview');
  if (favoriteCards.length > 0) {
    favoritesPreview.style.display = 'block';
  } else {
    favoritesPreview.style.display = 'none';
  }
}
