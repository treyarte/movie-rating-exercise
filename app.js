$('form').on('submit', function(e) {
  e.preventDefault();
  const $title = $('#movie-title');
  const $rating = $('#rating');
  if ($title.val().length < 2) {
    return alert('Title must be at least two characters');
  }
  if ($rating.val() < 0 || $rating.val() > 10) {
    return alert('rating must be between 0 and 10');
  } else {
    deleteBtn =
      '<div id="delete-btn" class="btn-floating btn-large waves-effect waves-light red"> <span class="material-icons">x</span></div>';

    $('#movie-table').append(
      `<tr><td>${$title.val()}</td><td>${$rating.val()}</td><td>${deleteBtn}</td></tr>`
    );
  }
});

$('#movie-table').on('click', '#delete-btn', function() {
  $(this)
    .parent()
    .parent()
    .remove();
});
