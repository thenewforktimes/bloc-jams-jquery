$( document ).ready(function() { //set program state to ready, prep function call.
   album.songs.forEach( (song, index) => { //foreach song and index
     song.element = $(`
       <tr>
         <td>
           <button>
             <span class="song-number">${index + 1}</span>
             <span class="ion-play"></span>
             <span class="ion-pause"></span>
           </button>
         </td>
         <td>${song.title}</td>
         <td>${song.duration}</td>
        </tr>
     `);

     song.element.click( event => {
       player.playPause(song);
     });

     $('#song-list').append(song.element);
   });
 });
