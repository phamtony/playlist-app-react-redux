const songsReducer = () => {
  return [
      {
          title: 'Perfect',
          duration: '4:05'
      },
      {
          title: 'No Scrubs',
          duration: '3:25'
      },
      {
          title: 'I want it that way',
          duration: '2:15'
      },
      {
          title: 'the way i am',
          duration: '4:03'
      }
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};