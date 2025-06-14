import * as THREE from "three";

export class Cube {
  private mesh!: THREE.Mesh;

  constructor() {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: "#ffffff",
    });

    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial);
    this.mesh.position.y = 2;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  /* ---------
      Methods
    ---------- */

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }

  getMesh() {
    return this.mesh;
  }
}
