export class RouteLink {
  private _name: string;
  private _url: string;
  private _icon: string;

  constructor(
    newName: string,
    newUrl: string,
    newIcon: string
  ) {
    this._name = newName;
    this._url = newUrl;
    this._icon = newIcon;
  }

  public get name() {
    return this._name;
  }

  public get url() {
    return this._url;
  }
  
  public get icon() {
    return this._icon;
  }  
}