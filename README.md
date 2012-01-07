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
      hash: 'hfarm'
    , clientId: 'your-client-id-here'
  });
});
```

An alternative method. This expects a div with class `instagram` and a `button`. When clicked, the button paginates through the search, allowing you to show more than the API limit of 20 photos.

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
    , clientId : 'xxxxxxx'
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

## Options

### hash

Search recent photos tagged with `hash`.

Type: `String`

Default: `null`

### accessToken

OAuth 2 access token (see: [http://instagram.com/developer/auth/](http://instagram.com/developer/auth/)).

Type: `String`

Default: `null`

### clientId

OAuth 2 client application id.

Type: `String`

Default: `null`

### show

Number of photos to show.

Type: `Number`

Default: `null`

### next_url
You can populate this with the next URL object (`pagination.next_url`) returned by the Instagram API.

Type: `URL`

Default: `null`

### onLoad

Called just before making the request to instagram API.

Type: `Function`

Default: `null`

### onComplete

Called after the response from instagram API.

Type: `Function`

Default: `null`
