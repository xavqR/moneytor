
class SubMenuOption {
  public Id: number
  public Title: string
  public Path: string

  constructor(id: number, title: string, path: string) {
    this.Id = id;
    this.Title = title;
    this.Path = path;
  }
}

export default SubMenuOption