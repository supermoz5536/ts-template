import * as THREE from "three";

export class Ground {
  private mesh!: THREE.Mesh;

  constructor() {
    const templateGeometry = new THREE.PlaneGeometry(10, 10);
    const templateMaterial = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(templateGeometry, templateMaterial);
    this.mesh.rotation.set(-Math.PI / 2, 0, 0);
    this.mesh.position.set(0, -0.01, 0);
    this.mesh.receiveShadow = true;
  }

  /* ---------
      Methods
    ---------- */

  update() {}

  getMesh() {
    return this.mesh;
  }
}
