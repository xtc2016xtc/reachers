import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelViews from "./ModelViews"
import { useRef, useState } from "react"
import { yellowImg } from "../../utils"
import * as THREE from "three"
import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { models, sizes } from "../../constants"
const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: '产品外观展示',
    color: ['#8F8A81', '#D8D3D1', '#F4F2F0'],
    img: yellowImg
  });
  // const [model, setModel] = useState(null);

  const cammerControlSmall = useRef();
  const cammerControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 })
  }, [])

  return (
    <section className="common-padding">
      <div className="scrim-max-width">
        <h1 id="heading" className="section-heading">
          产品详情.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelViews
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cammerControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelViews
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cammerControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position:'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item,i)=>(
                  <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0] }}
                    onClick={() => {
                      setModel(item);
                    }}
                  >

                  </li>
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({label,value})=>(
                  <span key={label} className="size-btn"
                    style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}}
                    onClick={() => {
                      setSize(value);
                    }}
                    // onClick=
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
