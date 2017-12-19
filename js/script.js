/*jshint devel:true */
var stateEngine;
var map;
var directions;
var changeRoute;

var music = {
  "href" : "https://api.spotify.com/v1/users/129214464/playlists/0pQT0soJfvonq2D9yGM73V/tracks?offset=0&limit=100",
  "items" : [ {
    "added_at" : "2017-08-14T16:19:29Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0YvYmLBFFwYxgI4U9KKgUm"
        },
        "href" : "https://api.spotify.com/v1/albums/0YvYmLBFFwYxgI4U9KKgUm",
        "id" : "0YvYmLBFFwYxgI4U9KKgUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6c6086f6922b9a44920310b34ef98161bd7adf78",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/637636f3aea50c47868dc0f57f24b76837e84840",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4cd595fee4b26a6dc8aac6ea99c2ade9fa1faf72",
          "width" : 64
        } ],
        "name" : "Gorillaz",
        "type" : "album",
        "uri" : "spotify:album:0YvYmLBFFwYxgI4U9KKgUm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 241533,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0001458"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2qToAcex0ruZfbEbAy9OhW"
      },
      "href" : "https://api.spotify.com/v1/tracks/2qToAcex0ruZfbEbAy9OhW",
      "id" : "2qToAcex0ruZfbEbAy9OhW",
      "name" : "M1 A1",
      "popularity" : 41,
      "preview_url" : "https://p.scdn.co/mp3-preview/7e42f156dc87cdf06716b40ca88b663bd2c5407c?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 15,
      "type" : "track",
      "uri" : "spotify:track:2qToAcex0ruZfbEbAy9OhW"
    }
  }, {
    "added_at" : "2017-08-14T16:20:04Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 195400,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0500169"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7JzmCjvB6bk48JghLyrg8N"
      },
      "href" : "https://api.spotify.com/v1/tracks/7JzmCjvB6bk48JghLyrg8N",
      "id" : "7JzmCjvB6bk48JghLyrg8N",
      "name" : "Last Living Souls",
      "popularity" : 56,
      "preview_url" : "https://p.scdn.co/mp3-preview/f465e73153bb8f7956a497b398c1ebc94e489717?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:7JzmCjvB6bk48JghLyrg8N"
    }
  }, {
    "added_at" : "2017-08-14T16:20:15Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/62DmErcU7dqZbJaDqwsqzR"
        },
        "href" : "https://api.spotify.com/v1/artists/62DmErcU7dqZbJaDqwsqzR",
        "id" : "62DmErcU7dqZbJaDqwsqzR",
        "name" : "Popcaan",
        "type" : "artist",
        "uri" : "spotify:artist:62DmErcU7dqZbJaDqwsqzR"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 181906,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700163"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7l9CE3wmEGOUYw1j4ETjnL"
      },
      "href" : "https://api.spotify.com/v1/tracks/7l9CE3wmEGOUYw1j4ETjnL",
      "id" : "7l9CE3wmEGOUYw1j4ETjnL",
      "name" : "Saturnz Barz (feat. Popcaan)",
      "popularity" : 70,
      "preview_url" : "https://p.scdn.co/mp3-preview/458af51828c1550e4928d6bce492e35079e50fd8?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:7l9CE3wmEGOUYw1j4ETjnL"
    }
  }, {
    "added_at" : "2017-08-14T16:20:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0YvYmLBFFwYxgI4U9KKgUm"
        },
        "href" : "https://api.spotify.com/v1/albums/0YvYmLBFFwYxgI4U9KKgUm",
        "id" : "0YvYmLBFFwYxgI4U9KKgUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6c6086f6922b9a44920310b34ef98161bd7adf78",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/637636f3aea50c47868dc0f57f24b76837e84840",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4cd595fee4b26a6dc8aac6ea99c2ade9fa1faf72",
          "width" : 64
        } ],
        "name" : "Gorillaz",
        "type" : "album",
        "uri" : "spotify:album:0YvYmLBFFwYxgI4U9KKgUm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 193600,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0000724"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3qdDjz9kOvquEFbvXBYOMQ"
      },
      "href" : "https://api.spotify.com/v1/tracks/3qdDjz9kOvquEFbvXBYOMQ",
      "id" : "3qdDjz9kOvquEFbvXBYOMQ",
      "name" : "Tomorrow Comes Today",
      "popularity" : 52,
      "preview_url" : "https://p.scdn.co/mp3-preview/d5953c143aea3471f1805598f19ccf5cdc0b787b?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:3qdDjz9kOvquEFbvXBYOMQ"
    }
  }, {
    "added_at" : "2017-08-14T16:20:38Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8"
        },
        "href" : "https://api.spotify.com/v1/albums/2dIGnmEIy1WZIcZCFSj6i8",
        "id" : "2dIGnmEIy1WZIcZCFSj6i8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/94c124dd9812e03e8d21de9a05bbee08ad60ed91",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3d11b22022312540d8f220996d8a565251c9672a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70e4398607be7672358e3b6277b622853e8a079e",
          "width" : 64
        } ],
        "name" : "Plastic Beach",
        "type" : "album",
        "uri" : "spotify:album:2dIGnmEIy1WZIcZCFSj6i8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 200173,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1000017"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1foMv2HQwfQ2vntFf9HFeG"
      },
      "href" : "https://api.spotify.com/v1/tracks/1foMv2HQwfQ2vntFf9HFeG",
      "id" : "1foMv2HQwfQ2vntFf9HFeG",
      "name" : "Rhinestone Eyes",
      "popularity" : 62,
      "preview_url" : "https://p.scdn.co/mp3-preview/97f0159d4e305004bef7c52bb3192dc7ebba9c4c?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:1foMv2HQwfQ2vntFf9HFeG"
    }
  }, {
    "added_at" : "2017-08-14T16:20:45Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM"
        },
        "href" : "https://api.spotify.com/v1/artists/1U1el3k54VvEUzo3ybLPlM",
        "id" : "1U1el3k54VvEUzo3ybLPlM",
        "name" : "Kali Uchis",
        "type" : "artist",
        "uri" : "spotify:artist:1U1el3k54VvEUzo3ybLPlM"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 209560,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700176"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3lIxtCaROdRDuTnNBDm3n2"
      },
      "href" : "https://api.spotify.com/v1/tracks/3lIxtCaROdRDuTnNBDm3n2",
      "id" : "3lIxtCaROdRDuTnNBDm3n2",
      "name" : "She's My Collar (feat. Kali Uchis)",
      "popularity" : 61,
      "preview_url" : "https://p.scdn.co/mp3-preview/e6dd2c5e8e99a2b4c6089895c5320ecaab74146e?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 17,
      "type" : "track",
      "uri" : "spotify:track:3lIxtCaROdRDuTnNBDm3n2"
    }
  }, {
    "added_at" : "2017-08-14T16:21:00Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cTSCsVx04SSht9V6cpKN0"
        },
        "href" : "https://api.spotify.com/v1/artists/0cTSCsVx04SSht9V6cpKN0",
        "id" : "0cTSCsVx04SSht9V6cpKN0",
        "name" : "Mavis Staples",
        "type" : "artist",
        "uri" : "spotify:artist:0cTSCsVx04SSht9V6cpKN0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0ONHkAv9pCAFxb0zJwDNTy"
        },
        "href" : "https://api.spotify.com/v1/artists/0ONHkAv9pCAFxb0zJwDNTy",
        "id" : "0ONHkAv9pCAFxb0zJwDNTy",
        "name" : "Pusha T",
        "type" : "artist",
        "uri" : "spotify:artist:0ONHkAv9pCAFxb0zJwDNTy"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 175813,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700173"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/44PelqgstAM0lb8rHPKfHq"
      },
      "href" : "https://api.spotify.com/v1/tracks/44PelqgstAM0lb8rHPKfHq",
      "id" : "44PelqgstAM0lb8rHPKfHq",
      "name" : "Let Me Out (feat. Mavis Staples & Pusha T)",
      "popularity" : 62,
      "preview_url" : "https://p.scdn.co/mp3-preview/95f18b3f29b5af4130b395cb8b6ecd51d0cda6df?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 14,
      "type" : "track",
      "uri" : "spotify:track:44PelqgstAM0lb8rHPKfHq"
    }
  }, {
    "added_at" : "2017-08-14T16:21:07Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Z8ODXyhEBi3WynYw0Rya6"
        },
        "href" : "https://api.spotify.com/v1/artists/1Z8ODXyhEBi3WynYw0Rya6",
        "id" : "1Z8ODXyhEBi3WynYw0Rya6",
        "name" : "De La Soul",
        "type" : "artist",
        "uri" : "spotify:artist:1Z8ODXyhEBi3WynYw0Rya6"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 196906,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "GBAYE1700164"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2RCp9QBnFSxdKe8RD4xF8s"
      },
      "href" : "https://api.spotify.com/v1/tracks/2RCp9QBnFSxdKe8RD4xF8s",
      "id" : "2RCp9QBnFSxdKe8RD4xF8s",
      "name" : "Momentz (feat. De La Soul)",
      "popularity" : 63,
      "preview_url" : "https://p.scdn.co/mp3-preview/201b20a1823d604c5ed7940c5c07bf9783cba58b?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:2RCp9QBnFSxdKe8RD4xF8s"
    }
  }, {
    "added_at" : "2017-08-14T16:21:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5D31GSU5erwgjB6uvLzlcu"
        },
        "href" : "https://api.spotify.com/v1/albums/5D31GSU5erwgjB6uvLzlcu",
        "id" : "5D31GSU5erwgjB6uvLzlcu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/84d23d4c4321c8811958198f19bf7ef4a291821c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/d2ae6c0a3506be3509926b61e26e277a225e5f94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/3a6edcc9f6f9387fd8d1bd3d7ea728cbd1f1a0f0",
          "width" : 64
        } ],
        "name" : "Sleeping Powder",
        "type" : "album",
        "uri" : "spotify:album:5D31GSU5erwgjB6uvLzlcu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 166481,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1702673"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5pE9vMyvVNOpZFutt6lyy4"
      },
      "href" : "https://api.spotify.com/v1/tracks/5pE9vMyvVNOpZFutt6lyy4",
      "id" : "5pE9vMyvVNOpZFutt6lyy4",
      "name" : "Sleeping Powder",
      "popularity" : 62,
      "preview_url" : "https://p.scdn.co/mp3-preview/6e50d2db084cf47d8283820dfcfafc903675b472?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5pE9vMyvVNOpZFutt6lyy4"
    }
  }, {
    "added_at" : "2017-08-14T16:21:20Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0YvYmLBFFwYxgI4U9KKgUm"
        },
        "href" : "https://api.spotify.com/v1/albums/0YvYmLBFFwYxgI4U9KKgUm",
        "id" : "0YvYmLBFFwYxgI4U9KKgUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6c6086f6922b9a44920310b34ef98161bd7adf78",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/637636f3aea50c47868dc0f57f24b76837e84840",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4cd595fee4b26a6dc8aac6ea99c2ade9fa1faf72",
          "width" : 64
        } ],
        "name" : "Gorillaz",
        "type" : "album",
        "uri" : "spotify:album:0YvYmLBFFwYxgI4U9KKgUm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 210880,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0001456"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1kSWrMDt439cT64WpjJigW"
      },
      "href" : "https://api.spotify.com/v1/tracks/1kSWrMDt439cT64WpjJigW",
      "id" : "1kSWrMDt439cT64WpjJigW",
      "name" : "19-2000",
      "popularity" : 54,
      "preview_url" : "https://p.scdn.co/mp3-preview/7cabceed47ab219fcb82ae558535e5d9825072f3?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:1kSWrMDt439cT64WpjJigW"
    }
  }, {
    "added_at" : "2017-08-14T16:21:30Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8"
        },
        "href" : "https://api.spotify.com/v1/albums/2dIGnmEIy1WZIcZCFSj6i8",
        "id" : "2dIGnmEIy1WZIcZCFSj6i8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/94c124dd9812e03e8d21de9a05bbee08ad60ed91",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3d11b22022312540d8f220996d8a565251c9672a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70e4398607be7672358e3b6277b622853e8a079e",
          "width" : 64
        } ],
        "name" : "Plastic Beach",
        "type" : "album",
        "uri" : "spotify:album:2dIGnmEIy1WZIcZCFSj6i8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 233866,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1000010"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0q6LuUqGLUiCPP1cbdwFs3"
      },
      "href" : "https://api.spotify.com/v1/tracks/0q6LuUqGLUiCPP1cbdwFs3",
      "id" : "0q6LuUqGLUiCPP1cbdwFs3",
      "name" : "On Melancholy Hill",
      "popularity" : 73,
      "preview_url" : "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:0q6LuUqGLUiCPP1cbdwFs3"
    }
  }, {
    "added_at" : "2017-08-14T16:21:36Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8"
        },
        "href" : "https://api.spotify.com/v1/albums/2dIGnmEIy1WZIcZCFSj6i8",
        "id" : "2dIGnmEIy1WZIcZCFSj6i8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/94c124dd9812e03e8d21de9a05bbee08ad60ed91",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3d11b22022312540d8f220996d8a565251c9672a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70e4398607be7672358e3b6277b622853e8a079e",
          "width" : 64
        } ],
        "name" : "Plastic Beach",
        "type" : "album",
        "uri" : "spotify:album:2dIGnmEIy1WZIcZCFSj6i8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6Tyzp9KzpiZ04DABQoedps"
        },
        "href" : "https://api.spotify.com/v1/artists/6Tyzp9KzpiZ04DABQoedps",
        "id" : "6Tyzp9KzpiZ04DABQoedps",
        "name" : "Little Dragon",
        "type" : "artist",
        "uri" : "spotify:artist:6Tyzp9KzpiZ04DABQoedps"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 283573,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1000007"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3a6PN6BRB8PP3ms48s7kU1"
      },
      "href" : "https://api.spotify.com/v1/tracks/3a6PN6BRB8PP3ms48s7kU1",
      "id" : "3a6PN6BRB8PP3ms48s7kU1",
      "name" : "Empire Ants (feat. Little Dragon)",
      "popularity" : 62,
      "preview_url" : "https://p.scdn.co/mp3-preview/529f9e8fd8568d04adfcf7d1ff0b4fb322963caa?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:3a6PN6BRB8PP3ms48s7kU1"
    }
  }, {
    "added_at" : "2017-08-14T16:21:49Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 277053,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700170"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/04zxGiXcmNQ0m9oDXtwo18"
      },
      "href" : "https://api.spotify.com/v1/tracks/04zxGiXcmNQ0m9oDXtwo18",
      "id" : "04zxGiXcmNQ0m9oDXtwo18",
      "name" : "Busted and Blue",
      "popularity" : 61,
      "preview_url" : "https://p.scdn.co/mp3-preview/bc7967c07cdeb380ee9761510051be49ed0e7268?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:04zxGiXcmNQ0m9oDXtwo18"
    }
  }, {
    "added_at" : "2017-08-14T16:21:53Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 235360,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0500173"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0dcMqjeDpwqB2xhzMsld0p"
      },
      "href" : "https://api.spotify.com/v1/tracks/0dcMqjeDpwqB2xhzMsld0p",
      "id" : "0dcMqjeDpwqB2xhzMsld0p",
      "name" : "El Manana",
      "popularity" : 63,
      "preview_url" : "https://p.scdn.co/mp3-preview/f38100e36c41cc6c933c7452da5d06ade5b1aaa4?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:0dcMqjeDpwqB2xhzMsld0p"
    }
  }, {
    "added_at" : "2017-08-14T16:22:02Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DzRMyWgjuMbYvt5BLbpCo"
        },
        "href" : "https://api.spotify.com/v1/artists/2DzRMyWgjuMbYvt5BLbpCo",
        "id" : "2DzRMyWgjuMbYvt5BLbpCo",
        "name" : "Anthony Hamilton",
        "type" : "artist",
        "uri" : "spotify:artist:2DzRMyWgjuMbYvt5BLbpCo"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 135946,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700172"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5KurnDXzOeIYOMQceYidu7"
      },
      "href" : "https://api.spotify.com/v1/tracks/5KurnDXzOeIYOMQceYidu7",
      "id" : "5KurnDXzOeIYOMQceYidu7",
      "name" : "Carnival (feat. Anthony Hamilton)",
      "popularity" : 57,
      "preview_url" : "https://p.scdn.co/mp3-preview/801af8bc1bcaaa8aedb5acc46bbccad511df7cba?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 13,
      "type" : "track",
      "uri" : "spotify:track:5KurnDXzOeIYOMQceYidu7"
    }
  }, {
    "added_at" : "2017-08-14T16:22:12Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 230426,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0402431"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2bfGNzdiRa1jXZRdfssSzR"
      },
      "href" : "https://api.spotify.com/v1/tracks/2bfGNzdiRa1jXZRdfssSzR",
      "id" : "2bfGNzdiRa1jXZRdfssSzR",
      "name" : "Dirty Harry",
      "popularity" : 65,
      "preview_url" : "https://p.scdn.co/mp3-preview/7409d884124b837930e01f79fbeaaf7838640e8d?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:2bfGNzdiRa1jXZRdfssSzR"
    }
  }, {
    "added_at" : "2017-08-14T16:22:19Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0v2oB2xMS64U3lcU5DFuCY"
        },
        "href" : "https://api.spotify.com/v1/artists/0v2oB2xMS64U3lcU5DFuCY",
        "id" : "0v2oB2xMS64U3lcU5DFuCY",
        "name" : "Peven Everett",
        "type" : "artist",
        "uri" : "spotify:artist:0v2oB2xMS64U3lcU5DFuCY"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 272666,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700162"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6XGddj522FQRHXEhBtjiJu"
      },
      "href" : "https://api.spotify.com/v1/tracks/6XGddj522FQRHXEhBtjiJu",
      "id" : "6XGddj522FQRHXEhBtjiJu",
      "name" : "Strobelite (feat. Peven Everett)",
      "popularity" : 65,
      "preview_url" : "https://p.scdn.co/mp3-preview/bb0a718645cb80a5601ee779caf533d06158fba4?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:6XGddj522FQRHXEhBtjiJu"
    }
  }, {
    "added_at" : "2017-08-14T16:22:29Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5M0lbkGluOPXLeFjApw8r8"
        },
        "href" : "https://api.spotify.com/v1/artists/5M0lbkGluOPXLeFjApw8r8",
        "id" : "5M0lbkGluOPXLeFjApw8r8",
        "name" : "DRAM",
        "type" : "artist",
        "uri" : "spotify:artist:5M0lbkGluOPXLeFjApw8r8"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 197546,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700169"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2C0KFbb4v9CNWR5c9jWcKC"
      },
      "href" : "https://api.spotify.com/v1/tracks/2C0KFbb4v9CNWR5c9jWcKC",
      "id" : "2C0KFbb4v9CNWR5c9jWcKC",
      "name" : "Andromeda (feat. DRAM)",
      "popularity" : 68,
      "preview_url" : "https://p.scdn.co/mp3-preview/eac086bb9991b317f8adfefbde1967dcd6c33154?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:2C0KFbb4v9CNWR5c9jWcKC"
    }
  }, {
    "added_at" : "2017-08-14T16:22:34Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5obQFNrkFoWB51hm1JTHMw"
        },
        "href" : "https://api.spotify.com/v1/artists/5obQFNrkFoWB51hm1JTHMw",
        "id" : "5obQFNrkFoWB51hm1JTHMw",
        "name" : "Jamie Principle",
        "type" : "artist",
        "uri" : "spotify:artist:5obQFNrkFoWB51hm1JTHMw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5Tz4zMiRWqiQVAymWZz99a"
        },
        "href" : "https://api.spotify.com/v1/artists/5Tz4zMiRWqiQVAymWZz99a",
        "id" : "5Tz4zMiRWqiQVAymWZz99a",
        "name" : "Zebra Katz",
        "type" : "artist",
        "uri" : "spotify:artist:5Tz4zMiRWqiQVAymWZz99a"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 259253,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "GBAYE1700175"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0rOP1naZV8zL7ahMNTDXhL"
      },
      "href" : "https://api.spotify.com/v1/tracks/0rOP1naZV8zL7ahMNTDXhL",
      "id" : "0rOP1naZV8zL7ahMNTDXhL",
      "name" : "Sex Murder Party (feat. Jamie Principle & Zebra Katz)",
      "popularity" : 56,
      "preview_url" : "https://p.scdn.co/mp3-preview/693e6f2d92b1694ead257d07136082a625c9d2bd?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 16,
      "type" : "track",
      "uri" : "spotify:track:0rOP1naZV8zL7ahMNTDXhL"
    }
  }, {
    "added_at" : "2017-08-14T16:23:08Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
        },
        "href" : "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
        "id" : "0NvirtaDCaZU5PAW1O5FDE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2429251fd900113089d9cd318e8e4faf8ed1eaa3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bf3947a34b09a554c6c6d166b0d30060f22b3489",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/40f9cc3dbf65589f800dc60d9cf4797fc68a05f6",
          "width" : 64
        } ],
        "name" : "Humanz (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2WOMBqEsllg2ICn7D2L8ta"
        },
        "href" : "https://api.spotify.com/v1/artists/2WOMBqEsllg2ICn7D2L8ta",
        "id" : "2WOMBqEsllg2ICn7D2L8ta",
        "name" : "Jehnny Beth",
        "type" : "artist",
        "uri" : "spotify:artist:2WOMBqEsllg2ICn7D2L8ta"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 139560,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE1700179"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7hQ0ojbeqicGhw0wdUVeaN"
      },
      "href" : "https://api.spotify.com/v1/tracks/7hQ0ojbeqicGhw0wdUVeaN",
      "id" : "7hQ0ojbeqicGhw0wdUVeaN",
      "name" : "We Got The Power (feat. Jehnny Beth)",
      "popularity" : 59,
      "preview_url" : "https://p.scdn.co/mp3-preview/b5d294d901836c859ed669de9249d20990115637?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 20,
      "type" : "track",
      "uri" : "spotify:track:7hQ0ojbeqicGhw0wdUVeaN"
    }
  }, {
    "added_at" : "2017-08-14T16:23:23Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8"
        },
        "href" : "https://api.spotify.com/v1/albums/2dIGnmEIy1WZIcZCFSj6i8",
        "id" : "2dIGnmEIy1WZIcZCFSj6i8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/94c124dd9812e03e8d21de9a05bbee08ad60ed91",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3d11b22022312540d8f220996d8a565251c9672a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70e4398607be7672358e3b6277b622853e8a079e",
          "width" : 64
        } ],
        "name" : "Plastic Beach",
        "type" : "album",
        "uri" : "spotify:album:2dIGnmEIy1WZIcZCFSj6i8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0vqkz1b2qBkoYrGMj2CUWq"
        },
        "href" : "https://api.spotify.com/v1/artists/0vqkz1b2qBkoYrGMj2CUWq",
        "id" : "0vqkz1b2qBkoYrGMj2CUWq",
        "name" : "Bobby Womack",
        "type" : "artist",
        "uri" : "spotify:artist:0vqkz1b2qBkoYrGMj2CUWq"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0Mz5XE0kb1GBnbLQm2VbcO"
        },
        "href" : "https://api.spotify.com/v1/artists/0Mz5XE0kb1GBnbLQm2VbcO",
        "id" : "0Mz5XE0kb1GBnbLQm2VbcO",
        "name" : "Mos Def",
        "type" : "artist",
        "uri" : "spotify:artist:0Mz5XE0kb1GBnbLQm2VbcO"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 270520,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0903021"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6LUfuyLgvgqrykiTE6sJHY"
      },
      "href" : "https://api.spotify.com/v1/tracks/6LUfuyLgvgqrykiTE6sJHY",
      "id" : "6LUfuyLgvgqrykiTE6sJHY",
      "name" : "Stylo (feat. Mos Def and Bobby Womack)",
      "popularity" : 63,
      "preview_url" : "https://p.scdn.co/mp3-preview/6c0cf3aa824e17b9f0a4b17c1553c8097786cc73?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:6LUfuyLgvgqrykiTE6sJHY"
    }
  }, {
    "added_at" : "2017-08-14T16:23:40Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 222640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0500172"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0d28khcov6AiegSCpG5TuT"
      },
      "href" : "https://api.spotify.com/v1/tracks/0d28khcov6AiegSCpG5TuT",
      "id" : "0d28khcov6AiegSCpG5TuT",
      "name" : "Feel Good Inc",
      "popularity" : 80,
      "preview_url" : "https://p.scdn.co/mp3-preview/7388c425022ced92b1caa7f73bcf0cb3080aee47?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:0d28khcov6AiegSCpG5TuT"
    }
  }, {
    "added_at" : "2017-08-14T16:23:46Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0YvYmLBFFwYxgI4U9KKgUm"
        },
        "href" : "https://api.spotify.com/v1/albums/0YvYmLBFFwYxgI4U9KKgUm",
        "id" : "0YvYmLBFFwYxgI4U9KKgUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6c6086f6922b9a44920310b34ef98161bd7adf78",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/637636f3aea50c47868dc0f57f24b76837e84840",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4cd595fee4b26a6dc8aac6ea99c2ade9fa1faf72",
          "width" : 64
        } ],
        "name" : "Gorillaz",
        "type" : "album",
        "uri" : "spotify:album:0YvYmLBFFwYxgI4U9KKgUm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6UySi1d9U1T3j4E7sdli9s"
        },
        "href" : "https://api.spotify.com/v1/artists/6UySi1d9U1T3j4E7sdli9s",
        "id" : "6UySi1d9U1T3j4E7sdli9s",
        "name" : "Ed Case",
        "type" : "artist",
        "uri" : "spotify:artist:6UySi1d9U1T3j4E7sdli9s"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 269866,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0001419"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4YGOaSgYTpAkXT6NGQWGoN"
      },
      "href" : "https://api.spotify.com/v1/tracks/4YGOaSgYTpAkXT6NGQWGoN",
      "id" : "4YGOaSgYTpAkXT6NGQWGoN",
      "name" : "Clint Eastwood",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/66a7df44e0ad7e9d0c3905f830ba57f57543639c?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 18,
      "type" : "track",
      "uri" : "spotify:track:4YGOaSgYTpAkXT6NGQWGoN"
    }
  }, {
    "added_at" : "2017-08-14T16:24:03Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 131866,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0500180"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4hjGZN8poACfjWCK3Og6vY"
      },
      "href" : "https://api.spotify.com/v1/tracks/4hjGZN8poACfjWCK3Og6vY",
      "id" : "4hjGZN8poACfjWCK3Og6vY",
      "name" : "Don't Get Lost In Heaven",
      "popularity" : 53,
      "preview_url" : "https://p.scdn.co/mp3-preview/c54f48b9a33a1138f671eb7330ccd59ecd0dc9ee?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 14,
      "type" : "track",
      "uri" : "spotify:track:4hjGZN8poACfjWCK3Og6vY"
    }
  }, {
    "added_at" : "2017-08-14T16:24:06Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/129214464"
      },
      "href" : "https://api.spotify.com/v1/users/129214464",
      "id" : "129214464",
      "type" : "user",
      "uri" : "spotify:user:129214464"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
          },
          "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
          "id" : "3AA28KZvwAUcZuOKwyblJQ",
          "name" : "Gorillaz",
          "type" : "artist",
          "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
        },
        "href" : "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
        "id" : "0bUTHlWbkSQysoM3VsWldT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32ebfcab8563707ea09f0b2e02bb47c79c4ee4eb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27d2b6eea020400782cf56615dadfd36448f40d8",
          "width" : 64
        } ],
        "name" : "Demon Days",
        "type" : "album",
        "uri" : "spotify:album:0bUTHlWbkSQysoM3VsWldT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "href" : "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id" : "3AA28KZvwAUcZuOKwyblJQ",
        "name" : "Gorillaz",
        "type" : "artist",
        "uri" : "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 268400,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0500181"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2k6hpKTyubRVOmQR11ViY3"
      },
      "href" : "https://api.spotify.com/v1/tracks/2k6hpKTyubRVOmQR11ViY3",
      "id" : "2k6hpKTyubRVOmQR11ViY3",
      "name" : "Demon Days",
      "popularity" : 54,
      "preview_url" : "https://p.scdn.co/mp3-preview/d6be255de46546831f9f3f71f68f35da25298642?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 15,
      "type" : "track",
      "uri" : "spotify:track:2k6hpKTyubRVOmQR11ViY3"
    }
  } ],
  "limit" : 100,
  "next" : null,
  "offset" : 0,
  "previous" : null,
  "total" : 25};

// on ready
document.addEventListener("DOMContentLoaded", function(event) { 
	var getMusic = function() {
	// 	var url = 'https://api.spotify.com/v1/users/129214464/playlists/0pQT0soJfvonq2D9yGM73V';
	// 	var tokenFriend = 'BQAzJmSxRAILwk2l6a1CasHwB7Ntgqaj8uWgjlOhQPzkqqwPHQrc6RSg_7Eipj1RevzEKyN10TayqoJisH2tupm-hf101D-2cG5QKJ_TJsBkB-0a0sLNjtcENmwv4f14jQMYaQKdYJsRHQthQ2xlZjJdi5HyWMVwmzqS';

	// 	$.getJSON(url, function(result, textStatus, xhr) {
	//     	if (xhr && xhr.status) {
	// 				console.log(result)
	//     	} else {
	//     
	//     	}
	// 	});
	//console.log(music);
	var paste = $('#asd');
	var a = music.items;
	for (var i = 0; i < a.length; i++) {
		var item = a[i];
		var track = item.track
		
		var dateAdded = item.added_at;
		var songName = track.name;
		var artwork = track.album.images[0].url
		var artist = track.artists;
		var previewURL = track.preview_url
		// console.log(previewURL)
		//console.log(artist.length);
		if(artist.length > 1){
			var artistsArray = [];
			for (var j = 0; j < artist.length; j++) {
			 	var thisArtist = artist[j].name;
			 	artistsArray.push(thisArtist)
			 	//console.log(thisArtist);
			 } 

			 artist = artistsArray.join(', ')
			 //console.log(artist)
		} else {
			artist = artist[0].name
		}

		console.log(track);
		paste.append("<article class='track'><img src='"+artwork+"'><p>"+songName+", <strong>" +artist + "</strong></p><audio src='"+previewURL+"'></audio></article>");


	}

	}

	getMusic();

});









