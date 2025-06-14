import Stats from "stats.js";

export class AnimationManager {
  private objects: any[] = [];
  private stats: Stats;

  constructor() {
    /*
     * Initialize Stats.js
     */

    this.stats = new Stats();
    this.stats.showPanel(0); // Mode: 0(fps), 1(ms), 2(MB)
    this.stats.dom.style.transformOrigin = "top left";
    this.stats.dom.style.transform = "scale(1.5)";
    // this.stats.dom.style.display = "none"; // Hide monitor pannel

    document.body.appendChild(this.stats.dom);

    /*
     * Trigger Animation Loop
     */

    this.Loop();
  }

  /* ---------
      Meshs
    ---------- */

  private Loop = () => {
    this.stats.begin();

    for (const object of this.objects) {
      if (typeof object.update === "function") object.update();
    }

    this.stats.end();

    requestAnimationFrame(this.Loop);
  };

  public registerUpdate(object: any) {
    if (Array.isArray(object)) this.objects.push(...object);
    if (!Array.isArray(object)) this.objects.push(object);
  }
}
