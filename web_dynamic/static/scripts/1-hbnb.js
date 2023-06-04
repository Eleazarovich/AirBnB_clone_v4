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
});
