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
        authToken: 'your-access-token-here'
      });
    });

## Acknowledgements

Thanks to [@dpvitt](http://twitter.com/dpvitt) for the initial implementation.