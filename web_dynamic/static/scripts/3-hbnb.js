$(document).ready(function () {
  const checkAmenity = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkAmenity[$(this).data('id')];
    } else {
      delete checkAmenity[$(this).data('id')];
    }
    const lst = Object.values(checkAmenity);
    if (lst.length > 0) {
      $('div.amenities > h4').text(Object.values(checkAmenity).join(', '));
    } else {
      $('div.amenities > h4').html('nbsp;');
    }
  });

  $.get("http://0.0.0.0:5001/api/v1/status/", function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/'
    contentType: 'application/json,,
    data: '{}',
    success: (data) => {
      $('.places').empty();
      $.each(data, (i, place) => {
        let sectionPlace = `
        <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$$(place.price_by_night}</div
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
          <div class="number_rooms">${place.number_rooms} Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms}Bathrooms</div>
        </div>
        <div class="description">
          ${place.descrition}
        </div>
        </article>
        `;
        $('.places').append(secionPlace);
      });
    } 
  });
});
