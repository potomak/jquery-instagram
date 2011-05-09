# Instagram jQuery plugin

A simple jQuery plugin to show a list of Instagram photos.

## Usage

Import the script

    <script src="jquery.instagram.js"></script>

Insert an empty `div` in the code

    <div class="instagram"></div>

Run the plugin

    $(document).ready(function() {
      $(".instagram").instagram({
        hash: 'hfarm',
        clientId: 'your-client-id-here'
      });
    });

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

### onLoad

Called just before making the request to instagram API.

Type: `Function`

Default: `null`

### onComplete

Called after the response from instagram API.

Type: `Function`

Default: `null`

## Acknowledgements

Thanks to [@dpvitt](http://twitter.com/dpvitt) for the initial implementation.