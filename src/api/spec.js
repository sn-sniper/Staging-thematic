export const apiSpec = {
  "accounts": {
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/account",
        "shortDescription": "Get account details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/account",
        "shortDescription": "Update account",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "profile_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "bio",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "soundcloud_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "youtube_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "facebook_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "instagram_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "twitter_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "spotify_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "website_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "tiktok_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "twitch_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "whats_new_checked",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "discord_username",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "discord_discriminator",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "profile_image_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "banner_image_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "tags_ids",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "user_type_description",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "onboarding_survey_taken",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "contact_email",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "primary_contact_info",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "city",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "state",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "country",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "birthday",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "receive_license_link_emails",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "username",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "achievements": {
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/achievements",
        "shortDescription": "Update the viewed_at attribute",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "unseen": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/achievements/unseen",
        "shortDescription": "Get the unseen achivements and mark them as seen",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "activity_points": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/activity_points",
        "shortDescription": "Get the list of activity points",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "point_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "redeem": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/activity_points/redeem",
        "shortDescription": "Redeem an activity point",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "action_name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "actionable_id",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "user_message",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "process_at",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "buy": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/activity_points/buy",
        "shortDescription": "Buy points",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "action_name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "actionable_id",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "process_at",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "activity_point_transactions": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/activity_points/activity_point_transactions",
        "shortDescription": "Get the list of activity point transactions",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "point_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "song_front_line_boost_used_days": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/activity_points/song_front_line_boost/used_days",
        "shortDescription": "Get the list of song front line boosts",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "albums": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/albums",
        "shortDescription": "Create album",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "art_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "upc",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "artist_name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "artist_legal_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "artist_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "twitch_opt_in",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "songs",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/albums/:id",
        "shortDescription": "Get album details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/albums/:id",
        "shortDescription": "Update album",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "art_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "upc",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "twitch_opt_in",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "artist_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "artist_legal_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "artist_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "songs",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/albums/:id",
        "shortDescription": "Delete album",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/albums/:id/songs",
        "shortDescription": "Get album songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "announcements": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/announcements",
        "shortDescription": "Get announcements",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "user_unreaded_announcements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/announcements/users",
        "shortDescription": "Get latest unreaded announcements by user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "latest_user_unreaded_announcement": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/announcements/users/latest",
        "shortDescription": "Get latest unreaded announcement by user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "artist_dashboard": {
    "stats": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artist_dashboard/stats",
        "shortDescription": "Get current artist dashboard",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "placements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artist_dashboard/placements",
        "shortDescription": "Get current artist placements",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "playlists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artist_dashboard/playlists",
        "shortDescription": "Get current artist playlists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "artists": {
    "real_results": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/real_results",
        "shortDescription": "Get data for real artists real results section",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists",
        "shortDescription": "Get artists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/trending",
        "shortDescription": "Get trending artists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "logged_out",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "might_like": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/might_like",
        "shortDescription": "Get artists you might like",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id",
        "shortDescription": "Get artist details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "albums": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/albums",
        "shortDescription": "Get artist albums",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/songs",
        "shortDescription": "Get artist songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "statuses",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "status",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by_column",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by_direction",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "with_pex_data",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "tracked",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "with_pending",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "skip_limit",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "with_boosters",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "latest_pickups": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/latest_pickups",
        "shortDescription": "Get artist recent pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "with_limit",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "new_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/new_songs",
        "shortDescription": "Get artist new songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "top_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/top_songs",
        "shortDescription": "Get artist top songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "top_creators": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/top_creators",
        "shortDescription": "Get artist top creators",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "playlists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/artists/:id/playlists",
        "shortDescription": "Get artist playlists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "authentication": {
    "by_access_token": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/authentication/by_access_token",
        "shortDescription": "Sign in using access token",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "access_token",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "user_type",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "invitation_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "promo_link_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "google_jwt",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "request_otp": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/authentication/request_otp",
        "shortDescription": "Request OTP for email",
        "headers": [
          {
            "name": "Language",
            "required": true
          }
        ],
        "params": [
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "invitation_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "user_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "oauth_connect": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/authentication/oauth/connect",
        "shortDescription": "Connect youtube channel",
        "headers": [],
        "params": [
          {
            "name": "code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "scope",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "no_oauth_connect": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/authentication/no_oauth/connect",
        "shortDescription": "Connect youtube channel",
        "headers": [],
        "params": [
          {
            "name": "channel_id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "youtube_channel_info": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/authentication/youtube_channel",
        "shortDescription": "get youtube channel info",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "youtube_identifier",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "banners": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/banners",
        "shortDescription": "Get list of banners",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/banners",
        "shortDescription": "Create banner",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "title",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "link",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "color",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "image",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "creative_assets": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creative_assets",
        "shortDescription": "Get list of creative_assets",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "user_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "asset_type",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "with_tags",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "purchased",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_direction",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2creative_assets/:id",
        "shortDescription": "Get creative_asset by id",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "with_tags",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "users": [
      {
        "httpMethod": "GET",
        "path": "/api/v2creative_assets/:id/users",
        "shortDescription": "Get creative_asset users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2creative_assets",
        "shortDescription": "Create creative_asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "title",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "price",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "asset_file": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2creative_assets/:id/asset_file",
        "shortDescription": "add asset file",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "asset_file_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "asset_file_url": [
      {
        "httpMethod": "GET",
        "path": "/api/v2creative_assets/:id/asset_file",
        "shortDescription": "Get creative_asset asset_file",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update_images": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2creative_assets/:id/images",
        "shortDescription": "Update creative_asset images",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "deleted_image_ids",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "new_images",
            "required": false,
            "expectedType": "array"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2creative_assets/:id",
        "shortDescription": "Delete creative_asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2creative_assets/:id",
        "shortDescription": "Update creative_asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "title",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "price",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "purchase": [
      {
        "httpMethod": "POST",
        "path": "/api/v2creative_assets/:id/purchase",
        "shortDescription": "Purchase creative_asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "receipt": [
      {
        "httpMethod": "GET",
        "path": "/api/v2creative_assets/:id/receipt",
        "shortDescription": "get receipt",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "creators": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators",
        "shortDescription": "Get current creator",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/trending",
        "shortDescription": "Get trending creators",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "might_like": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/might_like",
        "shortDescription": "Get creators you might like",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "top": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/top",
        "shortDescription": "Get top creators",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/:id",
        "shortDescription": "Get creator details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "bookmarked_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/:id/bookmarked_songs",
        "shortDescription": "Get creator bookmared songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "spins": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/creators/:id/spins",
        "shortDescription": "Get creator spins",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "data": {
    "countries": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/data/countries",
        "shortDescription": "Get list of countries",
        "headers": [],
        "params": [
          {
            "name": "only_with_songs",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "states": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/data/states",
        "shortDescription": "Get list of states",
        "headers": [],
        "params": [
          {
            "name": "country_name",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "cities": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/data/cities",
        "shortDescription": "Get list of cities",
        "headers": [],
        "params": [
          {
            "name": "country_name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "state_name",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "city_details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/data/cities/:id",
        "shortDescription": "Get city details",
        "headers": [],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "files": {
    "upload": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/files/upload",
        "shortDescription": "Upload a file",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/files/upload/:id",
        "shortDescription": "Update file",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "canceled",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "complete",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ]
  },
  "general": {
    "system_configuration": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/general/system_configuration",
        "shortDescription": "Get system configuration",
        "headers": [],
        "params": []
      }
    ]
  },
  "invitations": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/invitations",
        "shortDescription": "Create new invitation",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "code",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "invitations",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ],
    "accepted": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/invitations/:code/accepted",
        "shortDescription": "Get list of accepted invitation using the code",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "code",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "clicked": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/invitations/:code/clicked",
        "shortDescription": "Mark invitation as clicked",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "code",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "links": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/links",
        "shortDescription": "Get list of promotional links",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/links/:id",
        "shortDescription": "Get a link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "use": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/links/:id/use",
        "shortDescription": "Use a link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "ip",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "logs": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/log",
        "shortDescription": "Add a new Log",
        "headers": [],
        "params": [
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "message",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "stack_trace",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "level",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "notifications": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/notifications",
        "shortDescription": "get User Notifications",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "groups",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "only_unread",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "read": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/notifications/:id/read",
        "shortDescription": "Mark all notifications as read",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/notifications/:id",
        "shortDescription": "Delete notifications",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "groups": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/notifications/groups",
        "shortDescription": "Get Notification Groups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "toggle_group": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/notifications/groups/:group/toggle",
        "shortDescription": "Toggle Notification Group",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "group",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "perks": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/perks",
        "shortDescription": "Get the list of perks",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "company_id",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "claim": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/perks/:id/claim",
        "shortDescription": "claim a perk",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "pickups": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/pickups",
        "shortDescription": "Get list of song pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "featured",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "artist_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "recent": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/pickups/recent",
        "shortDescription": "Get list of recent pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "project_actions": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/projects/:id/action/:action_type",
        "shortDescription": "Create project action",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "action_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "project_categories": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/project_categories",
        "shortDescription": "Get all project categories with their collections",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "with_projects",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/project_categories/:id",
        "shortDescription": "Get project category details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "with_projects",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/project_categories",
        "shortDescription": "Create project category (Admin only)",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "title",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "order",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/project_categories/:id",
        "shortDescription": "Update project category (Admin only)",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "title",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "order",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/project_categories/:id",
        "shortDescription": "Delete project category (Admin only)",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "reorder": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/project_categories/reorder",
        "shortDescription": "Bulk reorder project categories (Admin only)",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "categories",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ]
  },
  "project_category_assignments": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/project_categories/:project_category_id/assignments",
        "shortDescription": "Get category assignments",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "project_category_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/project_categories/:project_category_id/assignments",
        "shortDescription": "Add project to category",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "project_category_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "project_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "order",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/project_category_assignments/:id",
        "shortDescription": "Get assignment details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/project_category_assignments/:id",
        "shortDescription": "Update assignment order",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "order",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/project_category_assignments/:id",
        "shortDescription": "Remove project from category",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "reorder": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/project_categories/:project_category_id/assignments/reorder",
        "shortDescription": "Bulk reorder assignments within category",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "project_category_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "assignments",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ]
  },
  "project_downloads": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/project_downloads",
        "shortDescription": "Get user project download",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_direction",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "project_songs": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/projects/:id/songs",
        "shortDescription": "Create project song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "song_ids",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/projects/:id/songs",
        "shortDescription": "Delete project song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "song_ids",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ]
  },
  "projects": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects",
        "shortDescription": "Get list of projects",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "songs",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "featured_only",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "mine",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "deleted",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "public_projects",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "project_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "order_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "featured_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "your_thematics": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/your_thematics",
        "shortDescription": "Get list of projects",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "featured": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/featured",
        "shortDescription": "Get list of featured projects",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "sponsored",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "project_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "for_tag_id": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/for_tag_id",
        "shortDescription": "Get collections for specific tag",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "tag_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/projects",
        "shortDescription": "Create project",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "public",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "art_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "tags_ids",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "project_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id",
        "shortDescription": "Get project details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/songs",
        "shortDescription": "Get project songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by_direction",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "download": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/download",
        "shortDescription": "Download project files",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "pickups": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/pickups",
        "shortDescription": "Get project pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/projects/:id",
        "shortDescription": "Update project details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "public",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "art_file_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_ids",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "tags_ids",
            "required": false,
            "expectedType": "array"
          }
        ]
      }
    ],
    "placements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/placements",
        "shortDescription": "get project placements",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/projects/:id",
        "shortDescription": "Delete project",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "update_song_order": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/projects/:id/songs/order",
        "shortDescription": "change_song_order",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_ids",
            "required": true,
            "expectedType": "array"
          }
        ]
      }
    ],
    "save_playlist": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/projects/:id/save",
        "shortDescription": "Save playlist for premium/pro users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "unsave_playlist": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/projects/:id/save",
        "shortDescription": "Unsave playlist for premium/pro users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "more_to_explore": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/more_to_explore",
        "shortDescription": "Get similar playlists to explore",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "you_might_also_like": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/projects/:id/you_might_also_like",
        "shortDescription": "Get song suggestions for playlist",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "recommendations": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/recommendations",
        "shortDescription": "Get recommendations",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "featured_items": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/featured_items",
        "shortDescription": "Get featured items",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "sponsored",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "item_type",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "featured_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "revenue": {
    "user_by_month": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/user/by_month",
        "shortDescription": "Get user revenues by month",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "month",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "year",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "user_all_time": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/user/all_time",
        "shortDescription": "Get user all time revenues",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "songs_all_time": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/songs/all_time",
        "shortDescription": "Get songs all time revenues",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "songs_by_month": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/songs/by_month",
        "shortDescription": "Get songs all time revenues",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "month",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "year",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "song_all_time": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/songs/:id/all_time",
        "shortDescription": "Get song revenues by month",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "song_by_month": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/revenue/songs/:id/by_month",
        "shortDescription": "Get song revenues by month",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "month",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "year",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "search": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/search",
        "shortDescription": "Get search results",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "tag_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "tag_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "tag_details",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "curated",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "history": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/search/history",
        "shortDescription": "Get search history",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "only_with_tags",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "search_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "partial": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/search/ai/partial",
        "shortDescription": "Get search history",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "keyword",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "see_more_result",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "gpt": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/search/ai/gpt",
        "shortDescription": "Get search GPT",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "keyword",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/search/history",
        "shortDescription": "Delete history",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/search/history",
        "shortDescription": "Create search history",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "keyword",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "class_name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "id",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "destroy_by_id": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/search/history/:id",
        "shortDescription": "Delete history by id",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/search/trending",
        "shortDescription": "Get trending search",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "song_discovery_tools": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/discovery_tools",
        "shortDescription": "Get song that have discovery tools for user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "statuses",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/discovery_tools",
        "shortDescription": "Create song discovery tool",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "tool_type",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "stripe_success_url",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "stripe_cancel_url",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/songs/discovery_tools/:id",
        "shortDescription": "delete song discovery tool",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "song_discovery_reports": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/discovery_tools/:id/song_discovery_reports",
        "shortDescription": "Get song discovery tool report",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "report_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "song_discovery_report": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/song_discovery_reports/:id",
        "shortDescription": "Get song discovery tool report",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "tracked_song_count": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/songs_discovery_tools/artists/:id/tracked",
        "shortDescription": "Get artist songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "statuses",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "tool_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "song_downloads": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/downloads",
        "shortDescription": "Get downloaded songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "expired",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "song_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_direction",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "songs": {
    "search": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/search",
        "shortDescription": "Search songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "terms",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "tags_ids",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "new_only",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "allow_explicit",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "allow_graduated",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "instrumental_only",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "featured_only",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "sort_by_column",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by_direction",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "duration_more_than_seconds",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "duration_less_than_seconds",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "bpm_more_than_value",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "bpm_less_than_value",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "artist_country",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "include_premium_sfx",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "include_song_played",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "elastic_search",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "min_popularity",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "max_popularity",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "uniq_id",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "include_free",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "include_premium",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "include_early_access",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "include_instrumental",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "include_with_lyrics",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "artist_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "save_filters",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "cyanite_search": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/cyanite_search",
        "shortDescription": "Search songs by url",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "query",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "staff_pick": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/staff_picks",
        "shortDescription": "Staff picked songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "featured": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/featured",
        "shortDescription": "Featured songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "featured_in",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "with_tags",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "recently_added": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/recently_added",
        "shortDescription": "Recently added songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "placements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/placements",
        "shortDescription": "Get placements for song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "project_placements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/project_placements",
        "shortDescription": "Get related songs for song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "featured_projects": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/featured/projects",
        "shortDescription": "Get featured projects for song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "featured_videos": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/featured/videos",
        "shortDescription": "Get featured videos for song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "sponsored",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "recently_added_by_followings": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/recently_added_by_followings",
        "shortDescription": "Recently added songs of artists you follow",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "popular": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/popular",
        "shortDescription": "Get popular songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "featured_in",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "with_creators",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "community_review": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/community_review",
        "shortDescription": "Get community review songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/trending",
        "shortDescription": "Get trending songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "weekly_matches": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/weekly_matches",
        "shortDescription": "Get weekly matched songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "for_tag_id": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/for_tag_id",
        "shortDescription": "Get songs for specific tag",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "tag_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "found_by_followed_users": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/found_by_followed_users",
        "shortDescription": "Get songs found by followed users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "upvoted": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/upvoted",
        "shortDescription": "Get upvoted songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id",
        "shortDescription": "Get song details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "with_tags",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "with_trending_in",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/songs/:id",
        "shortDescription": "Update song",
        "headers": [],
        "params": [
          {
            "name": "promo_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "youtube_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "spotify_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "itunes_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "soundcloud_url",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "custom_promo_link",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/songs/:id",
        "shortDescription": "Delete song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "promo": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/promo",
        "shortDescription": "Get song promo",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "download": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/download",
        "shortDescription": "Get song download link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "file_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "download_album_artwork": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/download/album_artwork",
        "shortDescription": "Get song download link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "stream": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/stream",
        "shortDescription": "Get song stream link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "stream_anonymous": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/stream_anonymous/:mode",
        "shortDescription": "Get song anonymous stream link",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "mode",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "pickups": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/pickups",
        "shortDescription": "Get song pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "bookmark_new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/:id/bookmark",
        "shortDescription": "Bookmark song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "vote": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/:id/vote",
        "shortDescription": "Vote for a song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "vote",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "add_to_presaved",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "skip": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/:id/skip",
        "shortDescription": "Skip a song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "bookmark_delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/songs/:id/bookmark",
        "shortDescription": "Unbookmark song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "lift": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/songs/:id/lift",
        "shortDescription": "Lift song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "similar_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/similar_songs",
        "shortDescription": "Get similar songs of a song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_by_direction",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "recommended_playlists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/songs/:id/recommended_playlists",
        "shortDescription": "Get playlists containing this song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "stats": {
    "creators_song_stats": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stats/creators/song/:id",
        "shortDescription": "Get song stats",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "only_followings",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "song_usages": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stats/song_usages",
        "shortDescription": "Get song stats",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "artist_download": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stats/artist_download/:id",
        "shortDescription": "Get artist downloads",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "tag_types": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tag_types",
        "shortDescription": "Get list of tag types",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "system_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/tag_types",
        "shortDescription": "Create tag type",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "system_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tag_types/:id",
        "shortDescription": "Get tag type details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "tags": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tag_types/:id/tags",
        "shortDescription": "Get tag type details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "only_in_use",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/tag_types/:id",
        "shortDescription": "Update tag type details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/tag_types/:id",
        "shortDescription": "Delete tag type",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "tags": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tags",
        "shortDescription": "Get list of tag types",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "only_in_use",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "types",
            "required": false,
            "expectedType": "array"
          },
          {
            "name": "only_for_onboarding",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "featured",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/tags",
        "shortDescription": "Create tag",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "tag_type_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "name",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "common": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tags/common",
        "shortDescription": "Get Common tags for sfx and songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tags/:id",
        "shortDescription": "Get tag details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/tags/:id",
        "shortDescription": "Update tag details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "tag_type_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "description",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "delete": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/tags/:id",
        "shortDescription": "Delete tag",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "children": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tags/:id/children",
        "shortDescription": "Get tag details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "teams": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/teams",
        "shortDescription": "Get user teams",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/teams/:id",
        "shortDescription": "Update team",
        "headers": [],
        "params": [
          {
            "name": "name",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "art_file_id",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "users_index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/teams/:id/users",
        "shortDescription": "Get teams account users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "add_user": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/teams/:id/users",
        "shortDescription": "add user into team",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "remove_user": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/teams/:id/users",
        "shortDescription": "remove user from team",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "testimonials": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/testimonials",
        "shortDescription": "Get list of testimonials",
        "headers": [],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "user_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "tipalti": {
    "dashboard": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tipalti/dashboard",
        "shortDescription": "Get tipalti dashboard",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "validate_payable": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/tipalti/validate_payable",
        "shortDescription": "Validate payable status in Tipalti",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "withdraw": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/tipalti/withdraw",
        "shortDescription": "Withdraw all pending user revenues",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "payments": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tipalti/payments",
        "shortDescription": "Get tipalti payments",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "invoices": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/tipalti/invoices",
        "shortDescription": "Get tipalti invoices",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "user_actions": {
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/actions",
        "shortDescription": "Create a user action",
        "headers": [
          {
            "name": "Language",
            "required": true
          }
        ],
        "params": [
          {
            "name": "model_name",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "model_id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "action_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "user_allowed_channels": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/user_allowed_channels",
        "shortDescription": "Get list of user_allowed_channels",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/user_allowed_channels",
        "shortDescription": "Create user_allowed_channels",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "youtube_channel_id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/user_allowed_channels/:id",
        "shortDescription": "Delete user_allowed_channels",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "user_assets": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/user_assets",
        "shortDescription": "Get list of user_assets",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_direction",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "download": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/user_assets/:id/download",
        "shortDescription": "Download user asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "user_devices": {
    "add_update_user_device": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/devices",
        "shortDescription": "Add or Update a user device",
        "headers": [],
        "params": [
          {
            "name": "device_token",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "update_user_device_notifications": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/devices/notifications",
        "shortDescription": "Update a user device notifications",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "enable_notifications",
            "required": true,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "delete_user_device": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/users/devices",
        "shortDescription": "Delete a user device",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "imei",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "user_favorites": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/user_favorites",
        "shortDescription": "get all user favorites item",
        "headers": [],
        "params": []
      }
    ],
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/user_favorites",
        "shortDescription": "create user favorite item",
        "headers": [],
        "params": [
          {
            "name": "favoritable_type",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "favoritable_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/user_favorites",
        "shortDescription": "delete user favorite item",
        "headers": [],
        "params": [
          {
            "name": "favoritable_type",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "favoritable_id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "user_otps": {
    "validate": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/otps/:guid/validate",
        "shortDescription": "Validate an otp",
        "headers": [
          {
            "name": "Language",
            "required": true
          }
        ],
        "params": [
          {
            "name": "guid",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "user_relationships": {
    "follow": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/:id/follow",
        "shortDescription": "Follow a user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "unfollow": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/:id/unfollow",
        "shortDescription": "Unfollow a user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "users": {
    "create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users",
        "shortDescription": "Sign up by email",
        "headers": [],
        "params": [
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "invitation_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "user_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/users",
        "shortDescription": "Delete current user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "details": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id",
        "shortDescription": "Get user details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "apply_coupon": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/apply_coupon",
        "shortDescription": "Apply coupon to user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "coupon_code",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "user_unreaded_perks": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/perks/unseen",
        "shortDescription": "Get latest unreaded perks by user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "mark_perks_as_seen": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/perks/mark_as_seen",
        "shortDescription": "Update user last_perk_checked_at",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "change_user_type": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/change_user_type",
        "shortDescription": "Switch user type",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "user_type",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "user_count": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/count",
        "shortDescription": "Get users count",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "user_type",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "with_testimonials",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "update_youtube_channel": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/youtube_channel",
        "shortDescription": "Update user youtube channel image",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "search_suggestions": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/search_suggestions",
        "shortDescription": "Get user search history",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "request_clear_cache": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/users/request_clear_cache",
        "shortDescription": "Update user request_clear_cache",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "user_song_licenses": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/licenses",
        "shortDescription": "Get user songs licenses",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "expired",
            "required": false,
            "expectedType": "boolean"
          },
          {
            "name": "keyword",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "song_id",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "sort_by",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "sort_direction",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "song_type",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "top_genres_and_keywords": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/top_genres_and_keywords",
        "shortDescription": "Get user top genre keywords",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "check_announcements": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/announcements/check",
        "shortDescription": "check reading of announcements",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "early_access_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/early_access_songs",
        "shortDescription": "early_access song",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "see_early_access_songs": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/users/early_access_songs/see",
        "shortDescription": "check that user see this early access songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "connected_users": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/connected_users",
        "shortDescription": "Get user connected users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "by_username": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/by_username/:username",
        "shortDescription": "Get user details by username",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "username",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "achievements": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/achievements",
        "shortDescription": "Get user top artists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "top_songs": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/top_songs",
        "shortDescription": "Get user top songs",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "top_artists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/top_artists",
        "shortDescription": "Get user top artists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "playlists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/playlists",
        "shortDescription": "Get user playlists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "similar_users": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/similar_users",
        "shortDescription": "Get user similar users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "youtube_accounts": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/youtube_accounts",
        "shortDescription": "Get user youtube accounts",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "latest_pickups": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/:id/latest_pickups",
        "shortDescription": "Get user latest pickups",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "numeric"
          },
          {
            "name": "video_id",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "with_songs",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ],
    "toggle_private_mode": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2users/toggle_private_mode",
        "shortDescription": "Toggle user private mode on/off",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "you_might_like": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/you_might_like",
        "shortDescription": "Get song recommendations based on user downloads",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "weekly_top_earners": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/weekly_top_earners",
        "shortDescription": "Gets top users earning points per week",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "recent_activity": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/recent_activity",
        "shortDescription": "Get user recent actions",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "inspired_videos": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/inspired_videos",
        "shortDescription": "Get user inspired videos from creators they follow",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "saved_playlists": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/users/saved_playlists",
        "shortDescription": "Get user saved playlists",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "youtube_accounts": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/youtube_accounts",
        "shortDescription": "Get youtube account details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/youtube_accounts/:id",
        "shortDescription": "Get youtube account details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/youtube_accounts/:id",
        "shortDescription": "Detach youtube account",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "users_index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/youtube_accounts/:id/users",
        "shortDescription": "Get youtube account users",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "users_create": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/youtube_accounts/:id/users",
        "shortDescription": "Add a user to the youtube account",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "users_destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/youtube_accounts/:id/users",
        "shortDescription": "Remove a user to the youtube account",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "email",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "youtube_videos": {
    "youtube_account": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/v2/youtube_videos/:id/youtube_account",
        "shortDescription": "Get youtube videos youtube channel id  by video id",
        "headers": [],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/v2/youtube_videos/:id",
        "shortDescription": "Get youtube video by id",
        "headers": [],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "shutterstock_images": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/images",
        "shortDescription": "List shutterstock images",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "per_page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "query",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/images/trending",
        "shortDescription": "Get shutterstock trending images",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/images/:id",
        "shortDescription": "Get shutterstock images details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "purchase": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/shutterstock/images/:id/purchase",
        "shortDescription": "Purchase shutterstock images details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "stripe_card_id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "size",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "similar": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/images/:id/similar",
        "shortDescription": "Get shutterstock similar images of asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "per_page",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "creators": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/images/:id/creators",
        "shortDescription": "Get shutterstock creators who downloaded this asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "shutterstock_videos": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/videos",
        "shortDescription": "List shutterstock videos",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "per_page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "query",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "trending": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/videos/trending",
        "shortDescription": "Get shutterstock trending videos",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/videos/:id",
        "shortDescription": "Get shutterstock videos details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "purchase": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/shutterstock/videos/:id/purchase",
        "shortDescription": "Purchase shutterstock videos details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "stripe_card_id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "size",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "similar": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/videos/:id/similar",
        "shortDescription": "Get shutterstock similar videos of asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "page",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "per_page",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ],
    "creators": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/shutterstock/videos/:id/creators",
        "shortDescription": "Get shutterstock creators who downloaded this asset",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "limit",
            "required": false,
            "expectedType": "numeric"
          },
          {
            "name": "offset",
            "required": false,
            "expectedType": "numeric"
          }
        ]
      }
    ]
  },
  "stripe_cards": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/cards",
        "shortDescription": "List stripe cards",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "starting_after",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/stripe/cards/:id",
        "shortDescription": "Attach stripe card to user",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "setup_intent": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/stripe/cards/setup_intent",
        "shortDescription": "Create a setup intent for adding a new card",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ],
    "update": [
      {
        "httpMethod": "PUT",
        "path": "/api/v2/stripe/cards/:id",
        "shortDescription": "Mark the card as default payment method",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ],
    "detach": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/stripe/cards/:id",
        "shortDescription": "Detach stripe cards",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "stripe_customers": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/customers",
        "shortDescription": "Get my stripe details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": []
      }
    ]
  },
  "stripe_invoices": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/invoices",
        "shortDescription": "List stripe invoices",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "starting_after",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "status",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "show": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/invoices/:id",
        "shortDescription": "Get stripe invoice details",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  },
  "stripe_portal": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/portal",
        "shortDescription": "Get stripe portal session url",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "return_url",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "full_customer_portal",
            "required": false,
            "expectedType": "boolean"
          }
        ]
      }
    ]
  },
  "stripe_subscriptions": {
    "index": [
      {
        "httpMethod": "GET",
        "path": "/api/v2/stripe/subscriptions",
        "shortDescription": "List stripe subscriptions",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "starting_after",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "status",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "new": [
      {
        "httpMethod": "POST",
        "path": "/api/v2/stripe/subscriptions",
        "shortDescription": "Create stripe subscriptions session",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "price_id",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "success_url",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "cancel_url",
            "required": true,
            "expectedType": "string"
          },
          {
            "name": "client_reference_id",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "coupon_code",
            "required": false,
            "expectedType": "string"
          },
          {
            "name": "replace_subscription",
            "required": false,
            "expectedType": "string"
          }
        ]
      }
    ],
    "destroy": [
      {
        "httpMethod": "DELETE",
        "path": "/api/v2/stripe/subscriptions",
        "shortDescription": "delete subscription",
        "headers": [
          {
            "name": "Authorization",
            "required": true
          },
          {
            "name": "YoutubeChannelId",
            "required": false
          },
          {
            "name": "TeamId",
            "required": false
          }
        ],
        "params": [
          {
            "name": "subscription_id",
            "required": true,
            "expectedType": "string"
          }
        ]
      }
    ]
  }
};
