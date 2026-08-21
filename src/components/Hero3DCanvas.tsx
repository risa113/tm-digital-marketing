import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Laptop3DModel({ isVisible }: { isVisible: boolean }) {
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
      // Draw glowing cyan-blue aura behind the TM emblem
      ctx.save();
      ctx.shadowColor = '#00A3FF';
      ctx.shadowBlur = 40;

      const drawSize = 310;
      const dx = (1024 - drawSize) / 2;
      const dy = 95;

      ctx.drawImage(img, dx, dy, drawSize, drawSize);
      ctx.restore();

      // Brand Title under illuminated logo emblem
      ctx.save();
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 36px Sora, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TM DIGITAL MARKETING', 512, dy + drawSize + 55);

      // Tagline Subtitle
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#38BDF8';
      ctx.font = '700 15px Sora, sans-serif';
      ctx.fillText('CONNECT • ENGAGE • GROW', 512, dy + drawSize + 92);
      ctx.restore();

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      setLidBackTexture(tex);
    };
  }, []);

  useFrame((state) => {
    if (!isVisible) return; // Skip frame calculation if canvas is scrolled out of viewport
    if (laptopGroup.current) {
      laptopGroup.current.rotation.y = state.clock.elapsedTime * 0.35;
      laptopGroup.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.06;
    }
  });

  // Pre-calculated particle positions for instant render
  const particles = useMemo(() => [
    { x: -2.8, y: 1.8, z: 1.2, color: '#3B82F6', speed: 1.8 },
    { x: 2.9, y: 1.5, z: -1.0, color: '#60A5FA', speed: 2.1 },
    { x: -1.8, y: -2.0, z: 0.8, color: '#38BDF8', speed: 1.6 },
    { x: 2.2, y: -1.8, z: 1.4, color: '#3B82F6', speed: 2.3 },
    { x: 0.5, y: 2.5, z: -1.5, color: '#60A5FA', speed: 1.9 },
    { x: -3.2, y: 0.2, z: -0.8, color: '#38BDF8', speed: 2.0 },
  ], []);

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
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-2.6, 2.2, 0.8]}>
          <sphereGeometry args={[0.48, 24, 24]} />
          <meshStandardMaterial color="#E1306C" roughness={0.25} metalness={0.5} />
        </mesh>
      </Float>

      {/* 2. Facebook */}
      <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.4}>
        <RoundedBox args={[0.75, 0.75, 0.75]} radius={0.12} position={[2.6, 2.0, 0.5]}>
          <meshStandardMaterial color="#1877F2" roughness={0.25} metalness={0.6} />
        </RoundedBox>
      </Float>

      {/* 3. Google Ads */}
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6}>
        <mesh position={[-2.4, -0.5, 1]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color="#F4B400" roughness={0.25} metalness={0.7} />
        </mesh>
      </Float>

      {/* 4. Analytics */}
      <Float speed={1.9} rotationIntensity={1} floatIntensity={1.5}>
        <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.1} position={[2.5, -0.6, -0.5]}>
          <meshStandardMaterial color="#F97316" roughness={0.3} metalness={0.5} />
        </RoundedBox>
      </Float>

      {/* 5. WhatsApp */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-3.0, 0.8, -1.0]}>
          <sphereGeometry args={[0.42, 24, 24]} />
          <meshStandardMaterial color="#25D366" roughness={0.25} metalness={0.5} />
        </mesh>
      </Float>

      {/* 6. SEO Node */}
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.6}>
        <mesh position={[0, 2.6, -0.5]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#3B82F6" roughness={0.15} metalness={0.7} />
        </mesh>
      </Float>

      {/* Optimized Ambient Glowing Particles */}
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed} floatIntensity={1.2}>
          <Sphere position={[p.x, p.y, p.z]} args={[0.06, 12, 12]}>
            <meshBasicMaterial color={p.color} transparent opacity={0.65} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3DCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pause 3D rendering when scrolled out of view
  useEffect(() => {
    if (!containerRef.current || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px', threshold: 0 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-[320px] sm:min-h-[420px] relative pointer-events-none md:pointer-events-auto touch-pan-y"
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        className="w-full h-full"
        frameloop={isVisible ? 'always' : 'never'}
        dpr={isMobile ? [1, 1] : [1, 1.25]}
        gl={{ 
          antialias: !isMobile, 
          alpha: true, 
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.1} color="#2563EB" />
        <Laptop3DModel isVisible={isVisible} />
        {!isMobile && isVisible && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
      </Canvas>
    </div>
  );
}
