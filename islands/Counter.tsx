/** @jsx h */
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { tw } from "@twind";
import * as babylonjs from "babylonjs";

export default function Counter() {
  // const reactCanvas = useRef(null);
  useEffect(() => {
    try{console.log(babylonjs)}catch(e){console.log("something is wrong i can feel it")}

  })
  // useEffect(() => {
  //   const { current: canvas } = reactCanvas;
  //   if (!canvas) return
  //   function createScene(canvas: HTMLElement | null, engine: BABYLON.default.Engine) {
  //     const scene = new BABYLON.default.Scene(engine)
  //     BABYLON.default.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon")
  //     const camera = new BABYLON.default.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.default.Vector3(0, 0, 0))
  //     camera.attachControl(canvas, true)
  //     const light = new BABYLON.default.HemisphericLight("light", new BABYLON.default.Vector3(1, 1, 0))
  //     return scene
  //   }

  //   const engine = new BABYLON.default.Engine(canvas, true)
  //   const scene = createScene(canvas, engine)
  //   engine.runRenderLoop(() => {
  //     scene.render()
  //   })

  // })
  return (
    <div>
      <canvas></canvas>
    </div>
  );
}
