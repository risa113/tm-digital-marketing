import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Laptop3DModel() {
  const laptopGroup = useRef<THREE.Group>(null);
  const [lidBackTexture, setLidBackTexture] = useState<THREE.CanvasTexture | null>(null);

  // Generate a high-resolution CanvasTexture displaying "TM DIGITAL MARKETING" on Front Screen
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // 1. Deep Midnight Blue Gradient Background
      const grad = ctx.createLinearGradient(0, 0, 1024, 640);
      grad.addColorStop(0, '#090D16');
      grad.addColorStop(0.4, '#0F172A');
      grad.addColorStop(0.8, '#1E3A8A');
      grad.addColorStop(1, '#0284C7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 640);

      // 2. Subtle Tech Grid Lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < 1024; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 640);
        ctx.stroke();
      }
      for (let y = 0; y < 640; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }

      // 3. Top Header Bar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, 0, 1024, 90);
      
      // Header Brand Logo Text
      ctx.fillStyle = '#2563EB';
      ctx.font = '900 44px Sora, sans-serif';
      ctx.fillText('TM', 40, 60);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 38px Sora, sans-serif';
      ctx.fillText(' DIGITAL MARKETING', 115, 60);

      // 4. GIANT CENTERED TITLE: TM DIGITAL MARKETING
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 68px Sora, sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#2563EB';
      ctx.shadowBlur = 25;
      ctx.fillText('TM DIGITAL MARKETING', 512, 230);
      ctx.shadowBlur = 0; // reset shadow

      // Subtitle: CONNECT • ENGAGE • GROW
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 30px Sora, sans-serif';
      ctx.fillText('CONNECT  •  ENGAGE  •  GROW', 512, 290);

      // 5. Live Growth Bar Chart
      const barData = [150, 220, 300, 380, 460, 540];
      barData.forEach((val, i) => {
        const bx = 160 + i * 125;
        const by = 560 - val * 0.5;
        const bh = val * 0.5;

        const barGrad = ctx.createLinearGradient(0, by, 0, 560);
        barGrad.addColorStop(0, '#38BDF8');
        barGrad.addColorStop(1, '#1D4ED8');
        ctx.fillStyle = barGrad;
        ctx.fillRect(bx, by, 65, bh);
      });

      // 6. Trend Line Graph
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(192, 485);
      ctx.lineTo(317, 450);
      ctx.lineTo(442, 410);
      ctx.lineTo(567, 370);
      ctx.lineTo(692, 330);
      ctx.lineTo(817, 290);
      ctx.stroke();

      // 7. Stat Badge Overlay
      ctx.fillStyle = 'rgba(37, 99, 235, 0.95)';
      ctx.beginPath();
      ctx.roundRect(690, 105, 290, 100, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 36px Sora, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('100% ROI', 835, 166);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Process and load the EXACT uploaded logo image onto the laptop lid backside
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 680;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Sleek Dark Metallic Background for Laptop Lid
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 680);
    bgGrad.addColorStop(0, '#090D16');
    bgGrad.addColorStop(0.5, '#0F172A');
    bgGrad.addColorStop(1, '#1E293B');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 680);

    // Subtle metallic frame border
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 6;
    ctx.strokeRect(12, 12, 1000, 656);

    const logoUrl = (import.meta.env.BASE_URL + 'logo.png').replace(/\/+/g, '/');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = logoUrl;
    img.onload = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = img.width;
      tempCanvas.height = img.height;
      const tempCtx = tempCanvas.getContext('2d');

      if (tempCtx) {
        tempCtx.drawImage(img, 0, 0);
        const imgData = tempCtx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        // Remove white background so exact TM logo blends seamlessly onto laptop lid
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          if (r > 225 && g > 225 && b > 225) {
            data[i + 3] = 0; // Set Alpha to transparent
          }
        }
        tempCtx.putImageData(imgData, 0, 0);

        // Draw glowing cyan-blue aura behind the exact TM logo
        ctx.shadowColor = '#00A3FF';
        ctx.shadowBlur = 50;

        const drawWidth = 540;
        const drawHeight = (img.height / img.width) * drawWidth;
        const dx = (1024 - drawWidth) / 2;
        const dy = (680 - drawHeight) / 2 - 20;

        ctx.drawImage(tempCanvas, dx, dy, drawWidth, drawHeight);

        // Brand Subtitle under exact logo image on laptop lid
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 25;
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 38px Sora, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('TM DIGITAL MARKETING', 512, dy + drawHeight + 52);

        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        setLidBackTexture(tex);
      }
    };
  }, []);

  useFrame((state) => {
    if (laptopGroup.current) {
      // Smooth 360-degree rotation animation to show off both front screen and back lid TM logo
      laptopGroup.current.rotation.y = state.clock.elapsedTime * 0.4;
      laptopGroup.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={laptopGroup} position={[0, -0.5, 0]}>
      {/* Laptop Base Keyboard */}
      <RoundedBox args={[3.6, 0.15, 2.4]} radius={0.06} position={[0, 0, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Trackpad */}
      <mesh position={[0, 0.08, 0.7]}>
        <planeGeometry args={[1, 0.6]} />
        <meshStandardMaterial color="#475569" roughness={0.4} />
      </mesh>

      {/* Laptop Screen Lid */}
      <group position={[0, 0.08, -1.1]} rotation={[0.25, 0, 0]}>
        {/* Screen Bevel Frame */}
        <RoundedBox args={[3.5, 2.3, 0.08]} radius={0.04} position={[0, 1.15, 0]}>
          <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} />
        </RoundedBox>

        {/* Display Screen Rendering TM DIGITAL MARKETING Title (Front) */}
        <mesh position={[0, 1.15, 0.05]}>
          <planeGeometry args={[3.2, 2.0]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>

        {/* Illuminated Exact TM Logo Image on Laptop Lid (Backside) */}
        {lidBackTexture && (
          <mesh position={[0, 1.15, -0.042]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[3.4, 2.2]} />
            <meshBasicMaterial map={lidBackTexture} />
          </mesh>
        )}
      </group>

      {/* Floating 3D Marketing Badges around Laptop */}
      {/* 1. Instagram */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[-2.6, 2.2, 0.8]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#E1306C" roughness={0.2} metalness={0.6} />
        </mesh>
      </Float>

      {/* 2. Facebook */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.15} position={[2.6, 2.0, 0.5]}>
          <meshStandardMaterial color="#1877F2" roughness={0.2} metalness={0.7} />
        </RoundedBox>
      </Float>

      {/* 3. Google Ads */}
      <Float speed={3} rotationIntensity={1.4} floatIntensity={2}>
        <mesh position={[-2.4, -0.5, 1]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#F4B400" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      {/* 4. Analytics */}
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6}>
        <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.1} position={[2.5, -0.6, -0.5]}>
          <meshStandardMaterial color="#F97316" roughness={0.3} metalness={0.5} />
        </RoundedBox>
      </Float>

      {/* 5. WhatsApp */}
      <Float speed={2.4} rotationIntensity={1.3} floatIntensity={1.7}>
        <mesh position={[-3.0, 0.8, -1.0]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color="#25D366" roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>

      {/* 6. SEO Node */}
      <Float speed={2.8} rotationIntensity={1.3} floatIntensity={1.9}>
        <mesh position={[0, 2.6, -0.5]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color="#3B82F6" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      {/* Ambient Glowing Particles */}
      {Array.from({ length: 16 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 6;
        return (
          <Float key={i} speed={1.5 + Math.random()} floatIntensity={1 + Math.random()}>
            <Sphere position={[x, y, z]} args={[0.07, 16, 16]}>
              <meshBasicMaterial color={i % 2 === 0 ? '#3B82F6' : '#60A5FA'} transparent opacity={0.7} />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[420px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#2563EB" />
        <Laptop3DModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
