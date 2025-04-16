/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const Hero = () => {
  const mountRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x4169e1, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4169e1, 1);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Add spotlights for dramatic lighting on the text
    const spotLight1 = new THREE.SpotLight(0x4169e1, 1);
    spotLight1.position.set(0, 10, 10);
    spotLight1.angle = Math.PI / 6;
    spotLight1.penumbra = 0.5;
    scene.add(spotLight1);

    const spotLight2 = new THREE.SpotLight(0x9370db, 1);
    spotLight2.position.set(10, 5, 0);
    spotLight2.angle = Math.PI / 6;
    spotLight2.penumbra = 0.5;
    scene.add(spotLight2);

    // Create temporary text mesh while font is loading
    const createTemporaryText = () => {
      const tempTextGroup = new THREE.Group();
      
      // Create placeholder text using basic geometries
      const letters = ['e', 'd', 'u', 'X', 'e', 'd'];
      const spacing = 1.2;
      
      letters.forEach((letter, index) => {
        let geometry;
        
        if (letter === 'X') {
          // Create an X using two boxes
          const box1 = new THREE.BoxGeometry(0.3, 2, 0.5);
          const box2 = new THREE.BoxGeometry(0.3, 2, 0.5);
          
          const mesh1 = new THREE.Mesh(box1, new THREE.MeshPhongMaterial({ color: 0x4169e1 }));
          mesh1.rotation.z = Math.PI / 4;
          
          const mesh2 = new THREE.Mesh(box2, new THREE.MeshPhongMaterial({ color: 0x4169e1 }));
          mesh2.rotation.z = -Math.PI / 4;
          
          const letterGroup = new THREE.Group();
          letterGroup.add(mesh1);
          letterGroup.add(mesh2);
          letterGroup.position.x = (index - 2.5) * spacing;
          
          tempTextGroup.add(letterGroup);
          return;
        }
        
        if (letter === 'e') {
          geometry = new THREE.BoxGeometry(1, 1.5, 0.5);
        } else if (letter === 'd') {
          geometry = new THREE.BoxGeometry(1, 2, 0.5);
        } else if (letter === 'u') {
          geometry = new THREE.BoxGeometry(1, 1.8, 0.5);
        }
        
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshPhongMaterial({ color: 0x4169e1 })
        );
        
        mesh.position.x = (index - 2.5) * spacing;
        tempTextGroup.add(mesh);
      });
      
      return tempTextGroup;
    };
    
    // Add a temporary text group until the font loads
    const tempText = createTemporaryText();
    scene.add(tempText);

    // Load font and create 3D text
    const loader = new FontLoader();
    
    loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
      // Remove temporary text
      scene.remove(tempText);
      
      // Create eduXed text
      const textGroup = new THREE.Group();
      
      // Parameters for text geometry
      const textParams = {
        font: font,
        size: 3,
        height: 0.7,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.1,
        bevelSegments: 5
      };
      
      // Create main text geometry
      const textGeometry = new TextGeometry('eduXed', textParams);
      textGeometry.computeBoundingBox();
      
      // Center the text
      const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
      textGeometry.translate(-textWidth / 2, 0, 0);
      
      // Create gradient material for the text
      const textMaterial = [
        new THREE.MeshPhongMaterial({ 
          color: 0x4169e1, 
          specular: 0xffffff,
          shininess: 100
        }), // front
        new THREE.MeshPhongMaterial({ 
          color: 0x5e5eff, 
          specular: 0xffffff,
          shininess: 50
        }) // side
      ];
      
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textGroup.add(textMesh);
      
      // Create a small graduation cap icon over the "X"
      const capGroup = new THREE.Group();
      
      // Base of cap (small square)
      const capBaseGeometry = new THREE.BoxGeometry(1, 0.1, 1);
      const capBaseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x4169e1,
        shininess: 100
      });
      const capBase = new THREE.Mesh(capBaseGeometry, capBaseMaterial);
      capBase.position.set(0, 0.5, 0);
      capGroup.add(capBase);
      
      // Top of cap (pyramid)
      const capTopGeometry = new THREE.ConeGeometry(0.7, 0.4, 4);
      capTopGeometry.rotateY(Math.PI / 4);
      const capTopMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x4169e1,
        shininess: 100
      });
      const capTop = new THREE.Mesh(capTopGeometry, capTopMaterial);
      capTop.position.set(0, 0.75, 0);
      capGroup.add(capTop);
      
      // Tassel
      const tasselGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8);
      const tasselMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x4169e1, 
        shininess: 100
      });
      const tassel = new THREE.Mesh(tasselGeometry, tasselMaterial);
      tassel.position.set(0.4, 0.5, 0);
      tassel.rotation.z = Math.PI / 2.5;
      capGroup.add(tassel);
      
      // Position the cap at the approximate position of the "X"
      capGroup.position.set(0.5, 2.5, 0);
      capGroup.scale.set(0.5, 0.5, 0.5);
      textGroup.add(capGroup);
      
      scene.add(textGroup);
      textRef.current = textGroup;
    },
    // Progress callback
    undefined,
    // Error callback
    function (error) {
      console.error('Font loading error:', error);
      // Keep the temporary text visible if font fails to load
      textRef.current = tempText;
    });

    // Position camera
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (textRef.current) {
        // Gentle floating animation
        textRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.2;
        textRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth / 2;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Handle initial resize
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (textRef.current) {
        scene.remove(textRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center bg-black text-white overflow-hidden">
      {/* Left side: Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30"
        >
          <span className="text-blue-300 font-medium">Revolutionary Learning Platform</span>
        </motion.div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Learn 
          <motion.span 
            className="relative inline-block mx-3"
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Beyond
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Imagination
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl mb-8 text-gray-300 max-w-lg"
        >
          Experience the future of education with our AI-driven platform that adapts to your unique learning style. Unlock your potential with interactive tools designed to maximize knowledge retention.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = "/signup"}  
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center gap-2"
          >
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Right side: 3D Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-full lg:w-1/2 h-full relative"
      >
        {/* 3D Canvas */}
        <div ref={mountRef} className="w-full h-full absolute inset-0" />
        
        {/* Light effects */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
        
        {/* Animated particles/glowing effect */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent" />
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
    </section>
  );
};

export default Hero;