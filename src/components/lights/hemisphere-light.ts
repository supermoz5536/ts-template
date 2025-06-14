import * as THREE from "three";

export class HemisphereLight {
  private light!: THREE.HemisphereLight;

  constructor() {
    this.light = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1.5);
    this.light.position.set(-3, 3, 3);
  }

  public getLight() {
    return this.light;
  }
}
