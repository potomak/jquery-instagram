# Instagram jQuery plugin

A simple jQuery plugin to show a list of Instagram photos.

## Usage

Import the script

```html
<script src="jquery.instagram.js"></script>
```

Insert an empty `div` in the code

```html
<div class="instagram"></div>
```

Run the plugin

```javascript
$(function() {
  $(".instagram").instagram({
      hash: 'love'
    , clientId: 'YOUR-CLIENT-ID-HERE'
  });
});
```

### Alternative method.

This expects a div with class `instagram` and a `button` element.
When clicked, the button paginates through the search, allowing you to show more than the API limit of 20 photos.

```html
<div class="instagram"></div>
<button>More</button>
```

```javascript
$(function(){
  var
    insta_container = $(".instagram")
  , insta_next_url

  insta_container.instagram({
      hash: 'hipster'
    , clientId : 'YOUR-CLIENT-ID-HERE'
    , show : 18
    , onComplete : function (photos, data) {
      insta_next_url = data.pagination.next_url
    }
  })

  $('button').on('click', function(){
    var 
      button = $(this)
    , text = button.text()

    if (button.text() != 'Loading…'){
      button.text('Loading…')
      insta_container.instagram({
          next_url : insta_next_url
        , show : 18
        , onComplete : function(photos, data) {
          insta_next_url = data.pagination.next_url
          button.text(text)
        }
      })
    }		
  }) 
});
```

### Note about pagination

Pagination doesn't work for requests to `/media/search`, see https://github.com/potomak/jquery-instagram/issues/35.

## Authentication

You can obtain a client id registering a new Instagram API client app at http://instagram.com/developer/clients/register/

## Options

### hash

Search recent photos tagged with `hash`.
See also http://instagram.com/developer/endpoints/tags/#get_tags_media_recent

Authentication: `clientId` required

Type: `String`

Default: `null`

### userId

Search recent by user `userId`.
See also http://instagram.com/developer/endpoints/users/#get_users_media_recent

Authentication: `accessToken` required.

Type: `String`

Default: `null`

### locationId

Search recent from location `locationId`.
See also http://instagram.com/developer/endpoints/locations/#get_locations_media_recent

Authentication: `clientId` required.

Type: `String`

Default: `null`

### search

Search for media in a given area.
See also http://instagram.com/developer/endpoints/media/#get_media_search

Authentication: `clientId` required.

Type: `Object`

Default: `null`

### accessToken

OAuth 2 access token.
See also http://instagram.com/developer/auth/

Type: `String`

Default: `null`

### clientId

OAuth 2 client application id.
See also http://instagram.com/developer/auth/

Type: `String`

Default: `null`

### show

Number of photos to show.

Type: `Number`

Default: `null`

**Note:** Instagram is filtering out private users' photos at read-time, so you won't always get the full number of photos in the count, see also https://github.com/potomak/jquery-instagram/issues/14 and https://groups.google.com/d/msg/instagram-api-developers/nKik4i8OYhw/ENu79JbcBAEJ

### next_url

You can populate this with the next URL object (`pagination.next_url`) returned by the Instagram API.

Type: `URL`

Default: `null`

### image_size

Image size to display.
Choose one between `'low_resolution'`, `'thumbnail'` or `'standard_resolution'`.

Type: `String`

Default: `'thumbnail'`

### onLoad

Called just before making the request to instagram API.

Type: `Function`

Default: `null`

### onComplete

Called after the response from instagram API.

Type: `Function`

Default: `null`
