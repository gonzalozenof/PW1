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
    var previewItem = document.createElement('li');
    previewItem.textContent = cardTitle;
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

var favoritesCount = document.querySelector('.favorites-count');
favoritesCount.addEventListener('click', function() {
  var favoritesPreview = document.querySelector('.favorites-preview');
  if (favoritesPreview.style.display === 'none') {
    favoritesPreview.style.display = 'block';
  } else {
    favoritesPreview.style.display = 'none';
  }
});
