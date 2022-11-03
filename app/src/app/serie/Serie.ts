export class Serie {
  id: number;
  name: string;
  channel: string;
  link: string;
  seasons: number;

  public constructor(id: number, link: string, name: string, channel: string, seasons: number) {
    this.id = id;
    this.link = link;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
  }
}
