"Virtual Jukebox"
=================


Host functionality:
===================
  + Host opens up a queue for requests of songs.
  + Sign in with spotify functionality
    - Has a fallback queue if nothing is requested.
    - Genre restriction, explicit song restriction.
    - a whitelist or public queue
      - Some way to have the option to restrict to only paying customers
    - can skip songs or blacklist songs (cooldown period)
    - Some restriction on song repeats or aggregation of redundant requests
    - Host can see the entire queue. Remove things from the queue.
  + Analytics on recent plays/most played
  + Some type of "sister shop" sharing
    - hosts can opt into making their playlists public
  + Save a queue as a playlist - perhaps for the default queue

Client functionality:
===================
  + Connect to a host's queue (over intranet)
  + Sign in with spotify functionality
  + See the top N songs that are "on deck" in the queue
  + Search for songs
  + See their personal spotify playlists and other stuff they have in spotify
  + See what's currently playing and recently played songs (maybe a way to add to their own playlists)
  + Analytics on recent plays/most played
  + Recommendations based on host spotify's recommended playlist(s)
