let mitzvahList = [
  "Tefillin",
  "Mezuza",
  "Pushka",
  "Menorah",
  "Moshiach",
  "Latkes",
  "Lulav",
  "Esrog",
  "Shabbos Candles",
  "Shofar",
  "Challah Cover",
  "Chanuka Gelt",
  "Siddur",
  "Chumash",
  "Chitas",
  "Matzah",
  "Maror",
  "Charoses",
  "Afikomen",
  "Humantashen",
  "Kiddush Cup",
  "Gragger",
  "Kos Shel Eliyahu",
];

function getMitzvas() {
  let finalMitzvaArray = []
  for (let i = 0; i < 3; i++) {
    finalMitzvaArray.push(mitzvahList[Math.floor(Math.random() * mitzvahList.length)])
  }
  console.log(finalMitzvaArray);
  return finalMitzvaArray
}



export { getMitzvas };
