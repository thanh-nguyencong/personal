/** @jsx h */
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { tw } from "@twind";
import * as BABYLON from "../babylon.js";

export default function Counter() {
  const renderCanvas = useRef(null);
  useEffect(() => {
    const { current: canvas } = renderCanvas;
    if (!canvas) return
    function createScene(canvas: HTMLElement | null, engine: BABYLON.Engine) {
      const scene = new BABYLON.Scene(engine)
      BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon")
      const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0))
      camera.attachControl(canvas, true)
      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0))
      return scene
    }

    const engine = new BABYLON.Engine(canvas, true)
    const scene = createScene(canvas, engine)
    engine.runRenderLoop(() => {
      scene.render()
    })

  })
  return (
    <div>
      <canvas ref={renderCanvas}></canvas>
    </div>
  );
}
