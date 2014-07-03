# jQuery Instagram

Select and show a list of Instagram photos.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/potomak/jquery-instagram/master/dist/instagram.min.js
[max]: https://raw.github.com/potomak/jquery-instagram/master/dist/instagram.js

In your web page:

```html
<div class="instagram"></div>

<script src="jquery.js"></script>
<script src="dist/instagram.min.js"></script>
<script>
jQuery(function($) {
  $('.instagram').on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $('.instagram').on('didLoadInstagram', function(event, response) {
    console.log(response);
  });
  $('.instagram').instagram({
    hash: 'love',
    clientId: 'YOUR-CLIENT-ID-HERE'
  });
});
</script>
```

### CDN

Production version: [//cdnjs.cloudflare.com/ajax/libs/jquery-instagram/0.3.1/instagram.min.js](//cdnjs.cloudflare.com/ajax/libs/jquery-instagram/0.3.1/instagram.min.js)

Development version: [//cdnjs.cloudflare.com/ajax/libs/jquery-instagram/0.3.1/instagram.js](//cdnjs.cloudflare.com/ajax/libs/jquery-instagram/0.3.1/instagram.js)

Note: please don't use RawGit as a CDN, see [The naughtiness score](https://medium.com/@yaypie/the-naughtiness-score-9a61872c61cd) for more info about this issue.

### For Rails developers

You can use "instagramjs-rails" gem by bodrovis (https://github.com/bodrovis/instagramjs-rails)
to easily add Instagram.js to your projects.

Add this line to your application's Gemfile:

    gem 'instagramjs-rails'

And then execute:

    $ bundle

In your `application.js` you will need to add this line:

    //= require jquery.instagram

## Documentation

### Authentication

You can obtain a client id registering a new Instagram API client app at http://instagram.com/developer/clients/register/

### Options

#### hash

Get a list of recently tagged media.

See http://instagram.com/developer/endpoints/tags/#get_tags_media_recent

Authentication: `clientId` required

Type: `String`

Default: `null`

#### userId

Get the most recent media published by a user.

See http://instagram.com/developer/endpoints/users/#get_users_media_recent

Authentication: `accessToken` required.

Type: `Number`

Default: `null`

#### location

Get a list of recent media objects from a given location.

See http://instagram.com/developer/endpoints/locations/#get_locations_media_recent

Authentication: `clientId` required.

Type: `Object`

Default: `null`

Parameters:

* `id` Location id (required).
* `min_timestamp` Return media after this UNIX timestamp.
* `max_timestamp` Return media before this UNIX timestamp.
* `min_id` Return media before this `min_id`.
* `max_id` Return media after this `max_id`.

#### search

Search for media in a given area.

See http://instagram.com/developer/endpoints/media/#get_media_search

Authentication: `clientId` required.

Type: `Object`

Default: `null`

Parameters:

* `lat` Latitude of the center search coordinate. If used, `lng` is required.
* `lng` Longitude of the center search coordinate. If used, `lat` is required.
* `min_timestamp` A unix timestamp. All media returned will be taken later than this timestamp.
* `max_timestamp` A unix timestamp. All media returned will be taken earlier than this timestamp.
* `distance` Default is 1km (`distance` = 1000), max distance is 5km.

#### accessToken

OAuth 2 access token.

See http://instagram.com/developer/auth/

Type: `String`

Default: `null`

#### clientId

OAuth 2 client application id.

See http://instagram.com/developer/auth/

Type: `String`

Default: `null`

#### count

Number of photos.

See http://instagram.com/developer/endpoints/#pagination

Type: `Number`

Default: `null`

**Note:** Instagram is filtering out private users' photos at read-time, so you won't always get the full number of photos in the count, see also https://github.com/potomak/jquery-instagram/issues/14 and https://groups.google.com/d/msg/instagram-api-developers/nKik4i8OYhw/ENu79JbcBAEJ

**Note:** pagination doesn't work for requests to `/media/search`, see https://github.com/potomak/jquery-instagram/issues/35.

#### url

You can populate this with the next URL object (`pagination.next_url`) returned by the Instagram API.

Type: `String`

Default: `null`

### Events

#### willLoadInstagram

Triggered just before making the request to instagram API.

Params:

* `event`
* `options`

#### didLoadInstagram

Called after the response from instagram API.

Params:

* `event`
* `response`

## Examples

### Get a list of what media is most popular at the moment

See http://instagram.com/developer/endpoints/media/#get_media_popular

```javascript
$('.instagram').instagram({
  clientId: 'YOUR-CLIENT-ID-HERE'
});
```

### Get a list of recently tagged media

See http://instagram.com/developer/endpoints/tags/#get_tags_media_recent

```javascript
$('.instagram').instagram({
  hash: 'love',
  clientId: 'YOUR-CLIENT-ID-HERE'
});
```

### Get the most recent media published by a user

See http://instagram.com/developer/endpoints/users/#get_users_media_recent

```javascript
$('.instagram').instagram({
  userId: 1574083,
  accessToken: 'YOUR-ACCESS-TOKEN-HERE'
});
```

**Note:** this API endpoint needs access token authentication.

### Get a list of recent media objects from a given location

See http://instagram.com/developer/endpoints/locations/#get_locations_media_recent

```javascript
$('.instagram').instagram({
  location: {
    id: 514276
  },
  clientId: 'YOUR-CLIENT-ID-HERE'
});
```

### Search for media in a given area

See http://instagram.com/developer/endpoints/media/#get_media_search

```javascript
$('.instagram').instagram({
  search: {
    lat: 48.858844,
    lng: 2.294351,
    distance: 2000
  },
  clientId: 'YOUR-CLIENT-ID-HERE'
});
```

## Release History

### 0.3.1

Add options default values, see [#52](https://github.com/potomak/jquery-instagram/pull/52).

### 0.3.0

Plugin redesing.