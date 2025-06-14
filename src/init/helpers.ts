// you cam use　helpers you want by uncomment the
// collectHelpers method's elements.

import { AxesHelper } from "../components/helpers/axes-helper";
import { CameraHelper } from "../components/helpers/camera-helper";
import { GridHelper } from "../components/helpers/grid-helper";
import { GlobalManager } from "../managers/global-manager";
import { DirectionalLightHelper } from "../components/helpers/directional-light-helper";
import { HemisphereLightHelper } from "../components/helpers/hemisphere-light-helper";
import { PointLightHelper } from "../components/helpers/point-light-helper";
import { SpotLightHelper } from "../components/helpers/spot-light-helper";

export class InitHelpers {
  constructor(globalManager: GlobalManager, lights: any) {
    const { directionalLight, hemisphereLight, pointLight, spotLight } = lights;

    const axesHelper = new AxesHelper();
    const gridHelper = new GridHelper();

    const directionalLightCameraHelper = directionalLight
      ? new CameraHelper(directionalLight.getLight().shadow.camera)
      : null;

    const directionalLightHelper = directionalLight
      ? new DirectionalLightHelper(directionalLight.getLight())
      : null;

    const hemisphereLightHelper = hemisphereLight
      ? new HemisphereLightHelper(hemisphereLight.getLight())
      : null;

    const pointLightHelper = pointLight //
      ? new PointLightHelper(pointLight.getLight())
      : null;

    const spotLightHelper = spotLight //
      ? new SpotLightHelper(spotLight.getLight())
      : null;

    // Here, use the helpers below by uncomment.
    globalManager.collectHelpers([
      // axesHelper,
      // gridHelper,
      // directionalLightCameraHelper,
      // directionalLightHelper,
      // hemisphereLightHelper,
      // pointLightHelper,
      // spotLightHelper,
    ]);

    globalManager.setHelpers();
  }
}
