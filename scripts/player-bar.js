$( document ).ready(function() { //set ready state
    $('button#play-pause').click( function() { //event handling, attributing play state to the button
      player.playPause(); //setting the resting state? what is a good term for this portion of the function?
    $(this).attr('playState', player.playState); //this method call determines our playState and passes our object
  });

    $('button#next').click( function() { //button, class = next, handler function
      if (player.playState !== 'playing') { return; } //logical check of player.playState
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;

      if (nextSongIndex >= album.songs.length) { return; }
        const nextSong = album.songs[nextSongIndex];
        player.playPause(nextSong);
    });

    $('button#previous').click( function() { //button, class = previous, handler function
      if (player.playState !== 'playing') { return; } //logical check of player.playState
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying); //construct the current song index
        const previousSongIndex = currentSongIndex - 1;

      if (previousSongIndex == album.songs.indexOf(0) || previousSongIndex > album.songs.length) { return; }
        const previousSong = album.songs[previousSongIndex];
        player.playPause(previousSong);
    });
    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
    });
    $('#volume-control input').on('input', function(event){
        player.setVolume(event.target.value);
    });

    setInterval( () => {
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;

        $('#time-control .total-time').text(duration);
        $('#time-control .current-time').text( prettyTime(currentTime) );
        $('#time-control input').val(percent);
   }, 1000);
});
