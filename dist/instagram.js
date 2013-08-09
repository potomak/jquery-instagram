/*! jQuery Instagram - v0.3.0 - 2013-08-09
* http://potomak.github.com/jquery-instagram
* Copyright (c) 2013 Giovanni Cappellotto; Licensed MIT */
(function($) {

  function composeRequest(options) {
    if (options.accessToken == null && options.clientId == null) {
      throw 'You must provide an access token or a client id';
    }

    if (options.url != null) {
      return {url: options.url, data: {}};
    }

    var url = 'https://api.instagram.com/v1';
    var data = {};

    if (options.hash != null) {
      url += '/tags/' + options.hash + '/media/recent';
    }
    else if (options.search != null) {
      url += '/media/search';
      data.lat = options.search.lat;
      data.lng = options.search.lng;

      if (options.search.maxTimestamp != null) {
        data.max_timestamp = options.search.maxTimestamp;
      }

      if (options.search.minTimestamp != null) {
        data.min_timestamp = options.search.minTimestamp;
      }

      if (options.search.distance != null) {
        data.distance = options.search.distance;
      }
    }
    else if (options.userId != null) {
      if (options.accessToken == null) {
        throw 'You must provide an access token';
      }

      url += '/users/' + options.userId + '/media/recent';
    }
    else if (options.locationId != null) {
      url += '/locations/' + options.locationId + '/media/recent';
    }
    else {
      url += '/media/popular';
    }
    
    if (options.accessToken != null) {
      data.access_token = options.accessToken;
    }
    
    if (options.clientId != null) {
      data.client_id = options.clientId;
    }
    
    if (options.minId != null) {
      data.min_id = options.minId;
    }
    
    if (options.maxId != null) {
      data.max_id = options.maxId;
    }
    
    if (options.count != null) {
      data.count = options.count;
    }
    
    return {url: url, data: data};
  }

  $.fn.instagram = function(options) {
    var that = this;
    options = $.extend({}, $.fn.instagram.defaults, options);
    var request = composeRequest(options);

    $.ajax({
      dataType: "jsonp",
      url: request.url,
      data: request.data,
      success: function(response) {
        that.trigger('didLoadInstagram', response);
      }
    });

    this.trigger('willLoadInstagram', options);
    
    return this;
  };

  $.fn.instagram.defaults = {
    accessToken: null,
    clientId: null,
    hash: null,
    userId: null,
    locationId: null,
    search: null,
    count: null,
    maxId: null,
    minId: null,
    url: null
  };

}(jQuery));
