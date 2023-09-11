interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mes",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const { song:anotherSong, songDuration:duration, details:{ author, year } } = audioPlayer;

console.log(`Song: ${anotherSong} \nDuration: ${duration}\nAuthor: ${author}\nAnio: ${year}`)

/* DESTRUCTURACION DE ARREGLOS */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];



export {};