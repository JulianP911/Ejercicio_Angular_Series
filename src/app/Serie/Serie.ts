export class Serie {
  // Atributos
  id: number;
  name: String;
  channel: String;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;
  // Metodo constructor
  constructor(
    id: number,
    name: String,
    channel: String,
    seasons: number,
    description: string,
    webpage: string,
    poster: string,)
  {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
  }
}
