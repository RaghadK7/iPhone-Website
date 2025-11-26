import { PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense, useEffect } from "react";
import IPhone from "./IPhone";
import { gsap } from "gsap";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item
}) => {
  
  useEffect(() => {
    if (!groupRef.current) return;

    // حركة الموديل حسب index
    let targetX = 0;
    if (index === 2) targetX = -2; // مثال: تحريك الموديل الثاني
    else if (index === 1) targetX = 1; // مثال للموديل الأول

    gsap.to(groupRef.current.position, {
      x: targetX,
      duration: 1.2,
      ease: "power2.out"
    });

    // مثال لتدوير الموديل حسب size
    if (size && setRotationSize) {
      gsap.to(groupRef.current.rotation, {
        y: size * 0.1,
        duration: 1
      });
    }

  }, [index, size, groupRef, setRotationSize]);

  return (
    <group
      ref={groupRef}
      name={gsapType}
      // استخدم userData لتخزين معلومات إضافية بدل className
      userData={{ item }}
    >
      {/* الضوء */}
      <ambientLight intensity={0.3} />

      {/* الكاميرا */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* أضواء إضافية */}
      <Lights />

      {/* الموديل */}
      <Suspense fallback={null}>
        <IPhone />
      </Suspense>
    </group>
  );
};

export default ModelView;
