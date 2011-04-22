(function($){
  $.fn.instagram = function(options) {
    var that = this,
        apiEndpoint = "https://api.instagram.com/v1",
        settings = {
          hash: 'hfarm',
          accessToken: 'your-access-token-here',
          maxId: null,
          minId: null
        };
        
    if (options) {
      $.extend(settings, options);
    }
    
    function createPhotoElement(photo) {
      return $('<div>')
        .addClass('instagram-placeholder')
        .append(
          $('<a>')
            .attr('target', '_blank')
            .attr('href', photo.link)
            .append(
              $('<img>')
                .addClass('instagram-image')
                .attr('src', photo.images.thumbnail.url)
          )
      );
    }
    
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: apiEndpoint + "/tags/" + settings.hash + "/media/recent/?access_token=" + settings.accessToken,
      success: function(res) {
        for (var i = 0; i < res.data.length; i++) {
          that.append(createPhotoElement(res.data[i]));
        }
      }
    });
    
    return this;
  };
})(jQuery);
