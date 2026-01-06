/**
 * Placeholder renderer functions for cosmic objects
 * These will be implemented in subsequent tasks
 */

import { RenderContext } from '../types';

export function renderEarthMoon(context: RenderContext): void {
  const { ctx, width, height, progress, time, quality } = context;
  
  ctx.save();
  
  // Center position
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Earth parameters
  const earthRadius = 80;
  
  // Moon parameters
  const moonRadius = 20;
  const moonOrbitRadius = 150;
  
  // Calculate Moon orbital position using time for smooth animation
  // Complete orbit every 8 seconds
  const orbitAngle = (time / 8000) * Math.PI * 2;
  const moonX = centerX + Math.cos(orbitAngle) * moonOrbitRadius;
  const moonY = centerY + Math.sin(orbitAngle) * moonOrbitRadius;
  
  // Draw Moon first if it's behind Earth
  const moonBehindEarth = Math.cos(orbitAngle) < 0;
  
  if (moonBehindEarth) {
    drawMoon(ctx, moonX, moonY, moonRadius);
  }
  
  // Draw Earth with atmospheric glow (simplified on lower quality)
  drawEarth(ctx, centerX, centerY, earthRadius, quality);
  
  // Draw Moon if it's in front of Earth
  if (!moonBehindEarth) {
    drawMoon(ctx, moonX, moonY, moonRadius);
  }
  
  ctx.restore();
}

/**
 * Draw Earth with blue oceans, green land patches, and atmospheric glow
 */
function drawEarth(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  quality: 'high' | 'medium' | 'low'
): void {
  ctx.save();
  
  // Atmospheric glow (outermost layer) - skip on low quality
  if (quality !== 'low') {
    const atmosphereGradient = ctx.createRadialGradient(x, y, radius * 0.9, x, y, radius * 1.4);
    atmosphereGradient.addColorStop(0, 'rgba(135, 206, 250, 0.3)');
    atmosphereGradient.addColorStop(0.5, 'rgba(135, 206, 250, 0.15)');
    atmosphereGradient.addColorStop(1, 'rgba(135, 206, 250, 0)');
    ctx.fillStyle = atmosphereGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Earth base - ocean blue
  const oceanGradient = ctx.createRadialGradient(
    x - radius * 0.3,
    y - radius * 0.3,
    radius * 0.1,
    x,
    y,
    radius
  );
  oceanGradient.addColorStop(0, 'rgba(100, 180, 255, 1)');
  oceanGradient.addColorStop(0.5, 'rgba(30, 144, 255, 1)');
  oceanGradient.addColorStop(1, 'rgba(10, 80, 180, 1)');
  ctx.fillStyle = oceanGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Add green land patches
  ctx.fillStyle = 'rgba(34, 139, 34, 0.8)';
  
  // Land patch 1 (upper left)
  ctx.beginPath();
  ctx.arc(x - radius * 0.4, y - radius * 0.3, radius * 0.35, 0, Math.PI * 2);
  ctx.fill();
  
  // Land patch 2 (right side)
  ctx.beginPath();
  ctx.arc(x + radius * 0.3, y + radius * 0.1, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();
  
  // Land patch 3 (lower left) - skip on low quality
  if (quality !== 'low') {
    ctx.beginPath();
    ctx.arc(x - radius * 0.2, y + radius * 0.5, radius * 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Add some darker green for variation
    ctx.fillStyle = 'rgba(20, 100, 20, 0.6)';
    ctx.beginPath();
    ctx.arc(x - radius * 0.35, y - radius * 0.25, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // White clouds/ice caps
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  
  // North pole
  ctx.beginPath();
  ctx.arc(x, y - radius * 0.8, radius * 0.25, 0, Math.PI * 2);
  ctx.fill();
  
  // Cloud patches - reduced on low quality
  if (quality !== 'low') {
    ctx.beginPath();
    ctx.arc(x + radius * 0.5, y - radius * 0.2, radius * 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x - radius * 0.6, y + radius * 0.3, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Inner atmospheric glow for depth
  const innerGlow = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius);
  innerGlow.addColorStop(0, 'rgba(255, 255, 255, 0)');
  innerGlow.addColorStop(1, 'rgba(135, 206, 250, 0.2)');
  ctx.fillStyle = innerGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

/**
 * Draw Moon with grey surface and crater details
 */
function drawMoon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
): void {
  ctx.save();
  
  // Moon base - grey with gradient for sphere effect
  const moonGradient = ctx.createRadialGradient(
    x - radius * 0.3,
    y - radius * 0.3,
    radius * 0.1,
    x,
    y,
    radius
  );
  moonGradient.addColorStop(0, 'rgba(220, 220, 220, 1)');
  moonGradient.addColorStop(0.5, 'rgba(169, 169, 169, 1)');
  moonGradient.addColorStop(1, 'rgba(100, 100, 100, 1)');
  ctx.fillStyle = moonGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Add craters (darker grey circles)
  ctx.fillStyle = 'rgba(105, 105, 105, 0.8)';
  
  // Large crater
  ctx.beginPath();
  ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.3, 0, Math.PI * 2);
  ctx.fill();
  
  // Medium crater
  ctx.beginPath();
  ctx.arc(x - radius * 0.4, y + radius * 0.3, radius * 0.25, 0, Math.PI * 2);
  ctx.fill();
  
  // Small craters
  ctx.beginPath();
  ctx.arc(x - radius * 0.2, y - radius * 0.4, radius * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(x + radius * 0.5, y + radius * 0.4, radius * 0.12, 0, Math.PI * 2);
  ctx.fill();
  
  // Very dark crater centers for depth
  ctx.fillStyle = 'rgba(60, 60, 60, 0.9)';
  ctx.beginPath();
  ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.12, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(x - radius * 0.4, y + radius * 0.3, radius * 0.1, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

export function renderSun(context: RenderContext): void {
  const { ctx, width, height, time, quality } = context;
  
  ctx.save();
  
  // Center position
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Sun parameters
  const baseRadius = 150;
  
  // Pulsation effect using sine wave (period: 4 seconds, ±8% size variation)
  const pulsation = 1 + Math.sin(time / 4000 * Math.PI * 2) * 0.08;
  const sunRadius = baseRadius * pulsation;
  
  // Brightness pulsation (slightly out of phase with size)
  const brightnessPulse = 0.85 + Math.sin(time / 3500 * Math.PI * 2) * 0.15;
  
  // Draw multiple corona layers for halo effect (outermost to innermost)
  drawCorona(ctx, centerX, centerY, sunRadius, brightnessPulse);
  
  // Draw Sun core with radial gradient
  drawSunCore(ctx, centerX, centerY, sunRadius, brightnessPulse);
  
  // Draw animated solar flares (reduced on lower quality)
  drawSolarFlares(ctx, centerX, centerY, sunRadius, time, brightnessPulse, quality);
  
  ctx.restore();
}

/**
 * Draw multiple layered corona gradients for halo effect
 */
function drawCorona(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  brightness: number
): void {
  // Outer corona layer (largest, most transparent)
  const outerCorona = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius * 2.5);
  outerCorona.addColorStop(0, `rgba(255, 200, 50, ${0.15 * brightness})`);
  outerCorona.addColorStop(0.4, `rgba(255, 180, 30, ${0.08 * brightness})`);
  outerCorona.addColorStop(1, 'rgba(255, 150, 0, 0)');
  ctx.fillStyle = outerCorona;
  ctx.beginPath();
  ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
  ctx.fill();
  
  // Middle corona layer
  const middleCorona = ctx.createRadialGradient(x, y, radius * 0.7, x, y, radius * 1.8);
  middleCorona.addColorStop(0, `rgba(255, 220, 80, ${0.25 * brightness})`);
  middleCorona.addColorStop(0.5, `rgba(255, 200, 50, ${0.15 * brightness})`);
  middleCorona.addColorStop(1, 'rgba(255, 180, 30, 0)');
  ctx.fillStyle = middleCorona;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.8, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner corona layer (brightest)
  const innerCorona = ctx.createRadialGradient(x, y, radius * 0.6, x, y, radius * 1.3);
  innerCorona.addColorStop(0, `rgba(255, 255, 150, ${0.4 * brightness})`);
  innerCorona.addColorStop(0.5, `rgba(255, 230, 100, ${0.3 * brightness})`);
  innerCorona.addColorStop(1, 'rgba(255, 200, 50, 0)');
  ctx.fillStyle = innerCorona;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.3, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw Sun core with radial gradient (yellow to orange to transparent)
 */
function drawSunCore(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  brightness: number
): void {
  // Main Sun gradient
  const sunGradient = ctx.createRadialGradient(
    x - radius * 0.2,
    y - radius * 0.2,
    radius * 0.1,
    x,
    y,
    radius
  );
  sunGradient.addColorStop(0, `rgba(255, 255, 220, ${brightness})`);
  sunGradient.addColorStop(0.3, `rgba(255, 255, 100, ${brightness})`);
  sunGradient.addColorStop(0.6, `rgba(255, 200, 50, ${brightness * 0.95})`);
  sunGradient.addColorStop(0.85, `rgba(255, 150, 30, ${brightness * 0.9})`);
  sunGradient.addColorStop(1, `rgba(255, 120, 0, ${brightness * 0.7})`);
  
  ctx.fillStyle = sunGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw animated solar flares with rotation
 */
function drawSolarFlares(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  time: number,
  brightness: number,
  quality: 'high' | 'medium' | 'low'
): void {
  // Rotation angle for flares (complete rotation every 20 seconds)
  const rotationAngle = (time / 20000) * Math.PI * 2;
  
  // Generate solar flares at different positions (reduced for mobile)
  const flareCount = quality === 'high' ? 8 : quality === 'medium' ? 6 : 4;
  
  for (let i = 0; i < flareCount; i++) {
    // Base angle for this flare
    const baseAngle = (i / flareCount) * Math.PI * 2 + rotationAngle;
    
    // Vary flare properties based on index for visual variety
    const flareLength = radius * (0.3 + (i % 3) * 0.15);
    const flareWidth = radius * (0.08 + (i % 2) * 0.04);
    
    // Animate individual flare opacity with different phases
    const flarePhase = (time / 2000 + i * 0.5) * Math.PI * 2;
    const flareOpacity = (0.4 + Math.sin(flarePhase) * 0.3) * brightness;
    
    // Calculate flare arc positions
    const startRadius = radius * 0.95;
    const endRadius = radius + flareLength;
    
    // Draw flare as a curved arc
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(baseAngle);
    
    // Create gradient for flare
    const flareGradient = ctx.createRadialGradient(0, 0, startRadius, 0, 0, endRadius);
    flareGradient.addColorStop(0, `rgba(255, 255, 150, ${flareOpacity})`);
    flareGradient.addColorStop(0.3, `rgba(255, 200, 80, ${flareOpacity * 0.8})`);
    flareGradient.addColorStop(0.7, `rgba(255, 150, 50, ${flareOpacity * 0.5})`);
    flareGradient.addColorStop(1, 'rgba(255, 100, 0, 0)');
    
    ctx.fillStyle = flareGradient;
    ctx.beginPath();
    ctx.arc(0, 0, endRadius, -flareWidth / endRadius, flareWidth / endRadius);
    ctx.arc(0, 0, startRadius, flareWidth / startRadius, -flareWidth / startRadius, true);
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
  }
}

export function renderBetelgeuse(context: RenderContext): void {
  const { ctx, width, height, time, quality } = context;
  
  ctx.save();
  
  // Center position
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Betelgeuse parameters - red supergiant (1.67x larger than Sun)
  const baseRadius = 250;
  
  // Pulsation effect using sine wave (period: 3 seconds, ±15% size variation)
  const pulsation = 1 + Math.sin(time / 3000 * Math.PI * 2) * 0.15;
  const starRadius = baseRadius * pulsation;
  
  // Brightness pulsation (slightly out of phase with size for more dynamic effect)
  const brightnessPulse = 0.85 + Math.sin(time / 2700 * Math.PI * 2) * 0.15;
  
  // Draw outer glow layers for red supergiant effect
  drawBetelgeuseGlow(ctx, centerX, centerY, starRadius, brightnessPulse);
  
  // Draw main star body with red-orange gradient
  drawBetelgeuseCore(ctx, centerX, centerY, starRadius, brightnessPulse);
  
  // Draw surface star spots (dark regions, reduced on lower quality)
  drawStarSpots(ctx, centerX, centerY, starRadius, time, quality);
  
  ctx.restore();
}

/**
 * Draw multiple layered glow for red supergiant effect
 */
function drawBetelgeuseGlow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  brightness: number
): void {
  // Outer glow layer (largest, most transparent)
  const outerGlow = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius * 2.2);
  outerGlow.addColorStop(0, `rgba(200, 50, 30, ${0.12 * brightness})`);
  outerGlow.addColorStop(0.4, `rgba(180, 40, 20, ${0.06 * brightness})`);
  outerGlow.addColorStop(1, 'rgba(150, 30, 10, 0)');
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2);
  ctx.fill();
  
  // Middle glow layer
  const middleGlow = ctx.createRadialGradient(x, y, radius * 0.7, x, y, radius * 1.6);
  middleGlow.addColorStop(0, `rgba(220, 70, 40, ${0.2 * brightness})`);
  middleGlow.addColorStop(0.5, `rgba(200, 50, 30, ${0.12 * brightness})`);
  middleGlow.addColorStop(1, 'rgba(180, 40, 20, 0)');
  ctx.fillStyle = middleGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.6, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner glow layer (brightest)
  const innerGlow = ctx.createRadialGradient(x, y, radius * 0.6, x, y, radius * 1.2);
  innerGlow.addColorStop(0, `rgba(255, 120, 70, ${0.35 * brightness})`);
  innerGlow.addColorStop(0.5, `rgba(240, 90, 50, ${0.25 * brightness})`);
  innerGlow.addColorStop(1, 'rgba(220, 70, 40, 0)');
  ctx.fillStyle = innerGlow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.2, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw Betelgeuse core with red-orange radial gradient
 */
function drawBetelgeuseCore(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  brightness: number
): void {
  // Main star gradient - red-orange supergiant
  const starGradient = ctx.createRadialGradient(
    x - radius * 0.2,
    y - radius * 0.2,
    radius * 0.1,
    x,
    y,
    radius
  );
  starGradient.addColorStop(0, `rgba(255, 140, 80, ${brightness})`);
  starGradient.addColorStop(0.2, `rgba(255, 100, 50, ${brightness})`);
  starGradient.addColorStop(0.5, `rgba(240, 80, 40, ${brightness * 0.95})`);
  starGradient.addColorStop(0.75, `rgba(220, 60, 35, ${brightness * 0.9})`);
  starGradient.addColorStop(1, `rgba(200, 50, 30, ${brightness * 0.8})`);
  
  ctx.fillStyle = starGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw random dark circles for surface star spots
 * Uses seeded randomness based on time for consistent but animated spots
 */
function drawStarSpots(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  time: number,
  quality: 'high' | 'medium' | 'low'
): void {
  // Use time to slowly rotate/evolve star spots
  const spotEvolution = time / 10000; // Very slow evolution
  
  // Generate consistent star spots with pseudo-random positions (reduced for mobile)
  const spotCount = quality === 'high' ? 12 : quality === 'medium' ? 8 : 5;
  
  for (let i = 0; i < spotCount; i++) {
    // Pseudo-random values based on index (consistent across frames)
    const seed = i * 137.508; // Golden angle for good distribution
    const angle = (seed + spotEvolution * 0.3) % (Math.PI * 2);
    const distance = (0.3 + (i % 5) * 0.12) * radius;
    const spotSize = (0.08 + (i % 3) * 0.04) * radius;
    
    // Calculate spot position
    const spotX = x + Math.cos(angle) * distance;
    const spotY = y + Math.sin(angle) * distance;
    
    // Animate spot opacity with different phases
    const spotPhase = (time / 5000 + i * 0.3) * Math.PI * 2;
    const spotOpacity = 0.3 + Math.sin(spotPhase) * 0.15;
    
    // Draw dark spot
    ctx.fillStyle = `rgba(120, 30, 20, ${spotOpacity})`;
    ctx.beginPath();
    ctx.arc(spotX, spotY, spotSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Add darker center for depth
    ctx.fillStyle = `rgba(80, 20, 10, ${spotOpacity * 0.8})`;
    ctx.beginPath();
    ctx.arc(spotX, spotY, spotSize * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function renderNebula(context: RenderContext): void {
  const { ctx, width, height, progress, quality } = context;
  
  ctx.save();
  
  // Use lighter composite mode for nebula gas blending
  ctx.globalCompositeOperation = 'lighter';
  
  // Nebula color palette
  const nebulaColors = [
    { r: 100, g: 150, b: 255 }, // Blue
    { r: 150, g: 100, b: 255 }, // Purple
    { r: 255, g: 100, b: 150 }, // Pink
    { r: 255, g: 150, b: 100 }, // Orange
  ];
  
  // Adjust layer count based on quality (reduced for mobile)
  const layerCount = quality === 'high' ? 5 : quality === 'medium' ? 3 : 2;
  
  // Center position
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Draw multiple cloud layers with parallax effect
  for (let layer = 0; layer < layerCount; layer++) {
    // Parallax speeds: 0.5x, 1x, 1.5x based on layer
    const parallaxSpeed = 0.5 + (layer / (layerCount - 1)) * 1.0;
    
    // Calculate parallax offset based on progress
    // Layers move at different speeds to create depth
    const parallaxOffset = (progress - 0.5) * 200 * (parallaxSpeed - 1);
    
    // Layer opacity (0.1 to 0.3)
    const layerOpacity = 0.1 + (layer / layerCount) * 0.2;
    
    // Generate 3-5 cloud circles per layer (reduced for mobile)
    const cloudCount = quality === 'high' ? 5 : quality === 'medium' ? 3 : 2;
    
    for (let cloud = 0; cloud < cloudCount; cloud++) {
      // Pseudo-random but consistent positioning based on layer and cloud index
      const seed = layer * 100 + cloud * 37.5;
      const angle = (seed * 0.1) % (Math.PI * 2);
      const distance = 100 + (seed % 200);
      
      // Cloud position with parallax
      const cloudX = centerX + Math.cos(angle) * distance + parallaxOffset * Math.cos(angle);
      const cloudY = centerY + Math.sin(angle) * distance + parallaxOffset * Math.sin(angle);
      
      // Cloud size (100-300px radius)
      const cloudSize = 100 + ((seed * 7) % 200);
      
      // Select color from palette
      const color = nebulaColors[cloud % nebulaColors.length];
      
      // Draw cloud with radial gradient
      const cloudGradient = ctx.createRadialGradient(
        cloudX,
        cloudY,
        cloudSize * 0.1,
        cloudX,
        cloudY,
        cloudSize
      );
      cloudGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity})`);
      cloudGradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity * 0.6})`);
      cloudGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      
      ctx.fillStyle = cloudGradient;
      ctx.beginPath();
      ctx.arc(cloudX, cloudY, cloudSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Reset composite operation for proto-stars
  ctx.globalCompositeOperation = 'source-over';
  
  // Draw bright proto-star spots (reduced count for mobile)
  const protoStarCount = quality === 'high' ? 10 : quality === 'medium' ? 5 : 3;
  
  for (let i = 0; i < protoStarCount; i++) {
    // Pseudo-random but consistent positioning
    const seed = i * 73.2;
    const angle = (seed * 0.15) % (Math.PI * 2);
    const distance = 50 + (seed % 250);
    
    const starX = centerX + Math.cos(angle) * distance;
    const starY = centerY + Math.sin(angle) * distance;
    
    // Proto-star size (5-10px)
    const starSize = 5 + (i % 6);
    
    // Draw bright white proto-star with glow
    const starGlow = ctx.createRadialGradient(starX, starY, 0, starX, starY, starSize * 3);
    starGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
    starGlow.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    starGlow.addColorStop(0.5, 'rgba(255, 255, 220, 0.4)');
    starGlow.addColorStop(1, 'rgba(255, 255, 200, 0)');
    
    ctx.fillStyle = starGlow;
    ctx.beginPath();
    ctx.arc(starX, starY, starSize * 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Bright core
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.beginPath();
    ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.restore();
}

export function renderBlackHole(context: RenderContext): void {
  const { ctx, width, height, time, quality } = context;
  
  ctx.save();
  
  // Center position
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Black hole parameters
  const eventHorizonRadius = 60;
  const diskInnerRadius = 70;
  const diskOuterRadius = 180;
  
  // Rotation animation (complete rotation every 15 seconds)
  const rotationAngle = (time / 15000) * Math.PI * 2;
  
  // Brightness pulsation for intensity effect
  const brightnessPulse = 0.85 + Math.sin(time / 3000 * Math.PI * 2) * 0.15;
  
  // Generate background stars for gravitational lensing effect
  const backgroundStars = generateBackgroundStars(centerX, centerY, quality);
  
  // Draw gravitationally lensed background stars
  drawLensedStars(ctx, centerX, centerY, eventHorizonRadius, backgroundStars);
  
  // Draw intense glow layers (outermost first)
  drawBlackHoleGlow(ctx, centerX, centerY, diskOuterRadius, brightnessPulse);
  
  // Draw accretion disk with rotation and turbulence
  drawAccretionDisk(
    ctx,
    centerX,
    centerY,
    diskInnerRadius,
    diskOuterRadius,
    rotationAngle,
    time,
    brightnessPulse
  );
  
  // Draw event horizon (pure black circle)
  drawEventHorizon(ctx, centerX, centerY, eventHorizonRadius);
  
  ctx.restore();
}

/**
 * Generate background stars for gravitational lensing
 */
function generateBackgroundStars(
  centerX: number,
  centerY: number,
  quality: 'high' | 'medium' | 'low'
): Array<{ x: number; y: number; size: number; brightness: number }> {
  // Significantly reduced star count for mobile devices
  const starCount = quality === 'high' ? 80 : quality === 'medium' ? 40 : 20;
  const stars: Array<{ x: number; y: number; size: number; brightness: number }> = [];
  
  for (let i = 0; i < starCount; i++) {
    // Pseudo-random but consistent positioning
    const seed = i * 47.3;
    const angle = (seed * 0.2) % (Math.PI * 2);
    const distance = 150 + (seed % 400);
    
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
    const size = 1 + (i % 3);
    const brightness = 0.5 + (i % 5) * 0.1;
    
    stars.push({ x, y, size, brightness });
  }
  
  return stars;
}

/**
 * Draw background stars with gravitational lensing effect
 */
function drawLensedStars(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  eventHorizonRadius: number,
  stars: Array<{ x: number; y: number; size: number; brightness: number }>
): void {
  stars.forEach(star => {
    // Calculate distance from black hole center
    const dx = star.x - centerX;
    const dy = star.y - centerY;
    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
    
    // Apply gravitational lensing effect
    // Stars closer to the event horizon are bent more strongly
    const lensingStrength = eventHorizonRadius * 2.5;
    const lensEffect = lensingStrength / (distanceFromCenter + lensingStrength * 0.5);
    
    // Calculate bent position (stars bend around the black hole)
    const bentX = star.x + dx * lensEffect * 0.4;
    const bentY = star.y + dy * lensEffect * 0.4;
    
    // Stars very close to event horizon are stretched and dimmed
    const dimming = Math.min(1, distanceFromCenter / (eventHorizonRadius * 1.5));
    const finalBrightness = star.brightness * dimming;
    
    // Skip stars that are too close to event horizon (would be invisible)
    if (distanceFromCenter < eventHorizonRadius * 1.2) {
      return;
    }
    
    // Draw lensed star
    ctx.fillStyle = `rgba(255, 255, 255, ${finalBrightness})`;
    ctx.beginPath();
    ctx.arc(bentX, bentY, star.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add slight glow for brighter stars
    if (star.brightness > 0.7) {
      const glowGradient = ctx.createRadialGradient(
        bentX,
        bentY,
        0,
        bentX,
        bentY,
        star.size * 3
      );
      glowGradient.addColorStop(0, `rgba(255, 255, 255, ${finalBrightness * 0.3})`);
      glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(bentX, bentY, star.size * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

/**
 * Draw multiple layered radial gradients for intense glow
 */
function drawBlackHoleGlow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  maxRadius: number,
  brightness: number
): void {
  // Outermost glow layer (largest, most transparent)
  const outerGlow = ctx.createRadialGradient(x, y, maxRadius * 0.8, x, y, maxRadius * 2.0);
  outerGlow.addColorStop(0, `rgba(255, 150, 50, ${0.15 * brightness})`);
  outerGlow.addColorStop(0.4, `rgba(255, 120, 30, ${0.08 * brightness})`);
  outerGlow.addColorStop(1, 'rgba(255, 100, 0, 0)');
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(x, y, maxRadius * 2.0, 0, Math.PI * 2);
  ctx.fill();
  
  // Middle glow layer
  const middleGlow = ctx.createRadialGradient(x, y, maxRadius * 0.6, x, y, maxRadius * 1.4);
  middleGlow.addColorStop(0, `rgba(255, 180, 80, ${0.25 * brightness})`);
  middleGlow.addColorStop(0.5, `rgba(255, 150, 50, ${0.15 * brightness})`);
  middleGlow.addColorStop(1, 'rgba(255, 120, 30, 0)');
  ctx.fillStyle = middleGlow;
  ctx.beginPath();
  ctx.arc(x, y, maxRadius * 1.4, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner glow layer (brightest, most intense)
  const innerGlow = ctx.createRadialGradient(x, y, maxRadius * 0.4, x, y, maxRadius * 1.0);
  innerGlow.addColorStop(0, `rgba(255, 255, 150, ${0.4 * brightness})`);
  innerGlow.addColorStop(0.5, `rgba(255, 200, 100, ${0.3 * brightness})`);
  innerGlow.addColorStop(1, 'rgba(255, 150, 50, 0)');
  ctx.fillStyle = innerGlow;
  ctx.beginPath();
  ctx.arc(x, y, maxRadius * 1.0, 0, Math.PI * 2);
  ctx.fill();
  
  // Very intense core glow
  const coreGlow = ctx.createRadialGradient(x, y, maxRadius * 0.2, x, y, maxRadius * 0.6);
  coreGlow.addColorStop(0, `rgba(255, 255, 200, ${0.6 * brightness})`);
  coreGlow.addColorStop(0.5, `rgba(255, 220, 120, ${0.45 * brightness})`);
  coreGlow.addColorStop(1, 'rgba(255, 180, 80, 0)');
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(x, y, maxRadius * 0.6, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw accretion disk with rotation, turbulence, and gradient
 */
function drawAccretionDisk(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  innerRadius: number,
  outerRadius: number,
  rotationAngle: number,
  time: number,
  brightness: number
): void {
  ctx.save();
  ctx.translate(x, y);
  
  // Draw disk in segments to create rotation and turbulence effect
  const segmentCount = 60;
  const angleStep = (Math.PI * 2) / segmentCount;
  
  for (let i = 0; i < segmentCount; i++) {
    const angle = i * angleStep + rotationAngle;
    
    // Add turbulence using sine waves with different frequencies
    const turbulence1 = Math.sin(angle * 3 + time / 1000) * 8;
    const turbulence2 = Math.sin(angle * 5 - time / 1500) * 5;
    const turbulence3 = Math.sin(angle * 7 + time / 2000) * 3;
    const totalTurbulence = turbulence1 + turbulence2 + turbulence3;
    
    // Vary disk thickness with turbulence
    const segmentInnerRadius = innerRadius + totalTurbulence * 0.3;
    const segmentOuterRadius = outerRadius + totalTurbulence;
    
    // Calculate color based on distance from center (inner = brighter/yellower)
    const radiusRatio = (i % 10) / 10; // Vary within segment
    const r = 255;
    const g = Math.floor(200 - radiusRatio * 100);
    const b = Math.floor(100 - radiusRatio * 80);
    
    // Vary opacity with rotation for dynamic effect
    const opacityVariation = 0.7 + Math.sin(angle * 2 + time / 1000) * 0.3;
    const alpha = opacityVariation * brightness;
    
    // Draw disk segment
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(0, 0, segmentOuterRadius, angle, angle + angleStep * 1.1);
    ctx.arc(0, 0, segmentInnerRadius, angle + angleStep * 1.1, angle, true);
    ctx.closePath();
    ctx.fill();
  }
  
  // Add bright inner edge of accretion disk
  const innerEdgeGradient = ctx.createRadialGradient(0, 0, innerRadius * 0.9, 0, 0, innerRadius * 1.2);
  innerEdgeGradient.addColorStop(0, `rgba(255, 255, 200, ${0.8 * brightness})`);
  innerEdgeGradient.addColorStop(0.5, `rgba(255, 255, 150, ${0.5 * brightness})`);
  innerEdgeGradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
  ctx.fillStyle = innerEdgeGradient;
  ctx.beginPath();
  ctx.arc(0, 0, innerRadius * 1.2, 0, Math.PI * 2);
  ctx.fill();
  
  // Add perspective effect - make disk appear elliptical (viewed at angle)
  // Draw additional layer with vertical compression for 3D effect
  ctx.save();
  ctx.scale(1, 0.3); // Compress vertically for perspective
  
  // Draw top/bottom disk layers for 3D appearance
  const perspectiveGradient = ctx.createRadialGradient(0, 0, innerRadius, 0, 0, outerRadius);
  perspectiveGradient.addColorStop(0, `rgba(255, 200, 100, ${0.3 * brightness})`);
  perspectiveGradient.addColorStop(0.5, `rgba(255, 150, 50, ${0.2 * brightness})`);
  perspectiveGradient.addColorStop(1, 'rgba(255, 100, 20, 0)');
  ctx.fillStyle = perspectiveGradient;
  ctx.beginPath();
  ctx.arc(0, 0, outerRadius, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
  ctx.restore();
}

/**
 * Draw event horizon as pure black circle
 */
function drawEventHorizon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
): void {
  // Pure black event horizon
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Add subtle dark gradient at edge for depth
  const edgeGradient = ctx.createRadialGradient(x, y, radius * 0.95, x, y, radius * 1.05);
  edgeGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  edgeGradient.addColorStop(1, 'rgba(20, 10, 0, 0.8)');
  ctx.fillStyle = edgeGradient;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.05, 0, Math.PI * 2);
  ctx.fill();
}

export function renderGalaxies(context: RenderContext): void {
  const { ctx, width, height, time, quality } = context;
  
  ctx.save();
  
  // Define 3-5 galaxies at different positions and sizes (reduced for mobile)
  const galaxyCount = quality === 'high' ? 5 : quality === 'medium' ? 3 : 2;
  
  const galaxies = [
    { x: width * 0.25, y: height * 0.3, size: 180, rotation: 0.3, opacity: 0.9 },
    { x: width * 0.7, y: height * 0.45, size: 250, rotation: 1.2, opacity: 1.0 },
    { x: width * 0.5, y: height * 0.7, size: 150, rotation: 2.5, opacity: 0.85 },
    { x: width * 0.8, y: height * 0.25, size: 120, rotation: 4.0, opacity: 0.7 },
    { x: width * 0.35, y: height * 0.75, size: 200, rotation: 5.5, opacity: 0.8 },
  ];
  
  // Render each galaxy
  for (let i = 0; i < galaxyCount; i++) {
    const galaxy = galaxies[i];
    
    // Calculate slow rotation animation (0.0001 rad/frame = ~60 frames per radian)
    // At 60fps, this is about 1 radian per second
    const animationRotation = (time / 1000) * 0.0001;
    const totalRotation = galaxy.rotation + animationRotation;
    
    drawGalaxy(
      ctx,
      galaxy.x,
      galaxy.y,
      galaxy.size,
      totalRotation,
      galaxy.opacity,
      quality
    );
  }
  
  ctx.restore();
}

/**
 * Draw a single spiral galaxy with logarithmic spiral arms
 */
function drawGalaxy(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  opacity: number,
  quality: 'high' | 'medium' | 'low'
): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  
  // Draw bright galactic core first
  drawGalacticCore(ctx, size, opacity);
  
  // Draw spiral arms using logarithmic spiral formula
  drawSpiralArms(ctx, size, opacity, quality);
  
  ctx.restore();
}

/**
 * Draw bright galactic core with radial gradient (white to yellow)
 */
function drawGalacticCore(
  ctx: CanvasRenderingContext2D,
  size: number,
  opacity: number
): void {
  const coreRadius = size * 0.15;
  
  // Bright white-yellow core
  const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, coreRadius);
  coreGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
  coreGradient.addColorStop(0.3, `rgba(255, 255, 220, ${opacity * 0.95})`);
  coreGradient.addColorStop(0.6, `rgba(255, 255, 200, ${opacity * 0.85})`);
  coreGradient.addColorStop(1, `rgba(255, 240, 180, ${opacity * 0.5})`);
  
  ctx.fillStyle = coreGradient;
  ctx.beginPath();
  ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
  ctx.fill();
  
  // Add extra bright center point
  const centerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, coreRadius * 0.5);
  centerGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
  centerGlow.addColorStop(0.5, `rgba(255, 255, 240, ${opacity * 0.8})`);
  centerGlow.addColorStop(1, `rgba(255, 255, 220, ${opacity * 0.3})`);
  
  ctx.fillStyle = centerGlow;
  ctx.beginPath();
  ctx.arc(0, 0, coreRadius * 0.5, 0, Math.PI * 2);
  ctx.fill();
  
  // Outer core glow
  const outerGlow = ctx.createRadialGradient(0, 0, coreRadius, 0, 0, coreRadius * 2);
  outerGlow.addColorStop(0, `rgba(255, 240, 180, ${opacity * 0.4})`);
  outerGlow.addColorStop(0.5, `rgba(255, 230, 160, ${opacity * 0.2})`);
  outerGlow.addColorStop(1, `rgba(255, 220, 140, 0)`);
  
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(0, 0, coreRadius * 2, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draw spiral arms using logarithmic spiral formula: r = a * e^(b*θ)
 */
function drawSpiralArms(
  ctx: CanvasRenderingContext2D,
  size: number,
  opacity: number,
  quality: 'high' | 'medium' | 'low'
): void {
  // Logarithmic spiral parameters
  const a = size * 0.08; // Initial radius scaling
  const b = 0.3; // Spiral tightness (higher = tighter spiral)
  const numArms = 2; // Two-armed spiral galaxy
  
  // Adjust star density based on quality (larger steps = fewer stars for mobile)
  const thetaStep = quality === 'high' ? 0.08 : quality === 'medium' ? 0.15 : 0.25;
  
  // Draw each spiral arm
  for (let arm = 0; arm < numArms; arm++) {
    const armOffset = (arm / numArms) * Math.PI * 2;
    
    // Draw stars along the spiral arm
    for (let theta = 0; theta < Math.PI * 4; theta += thetaStep) {
      // Logarithmic spiral formula: r = a * e^(b*θ)
      const r = a * Math.exp(b * theta);
      
      // Stop when we reach the galaxy size limit
      if (r > size) break;
      
      // Calculate position along spiral
      const angle = theta + armOffset;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      
      // Add some randomness to star positions for natural look
      const randomOffset = (Math.sin(theta * 7.3 + arm * 13.7) * 0.5 + 0.5) * size * 0.05;
      const randomAngle = Math.sin(theta * 5.1 + arm * 11.3) * 0.3;
      const finalX = x + Math.cos(angle + randomAngle) * randomOffset;
      const finalY = y + Math.sin(angle + randomAngle) * randomOffset;
      
      // Star size decreases with distance from core
      const distanceRatio = r / size;
      const starSize = (1 - distanceRatio * 0.7) * (quality === 'high' ? 1.5 : quality === 'medium' ? 1.2 : 1.0);
      
      // Star opacity decreases with distance from core
      const starOpacity = (1 - distanceRatio * 0.6) * opacity;
      
      // Draw star dot
      drawGalaxyStar(ctx, finalX, finalY, starSize, starOpacity);
    }
    
    // Draw arm glow for more visible spiral structure
    drawArmGlow(ctx, a, b, size, armOffset, opacity);
  }
}

/**
 * Draw a single star dot in the galaxy
 */
function drawGalaxyStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  opacity: number
): void {
  // Blue-white star color
  ctx.fillStyle = `rgba(200, 200, 255, ${opacity})`;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  
  // Add slight glow for brighter stars
  if (opacity > 0.6) {
    const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
    glowGradient.addColorStop(0, `rgba(220, 220, 255, ${opacity * 0.4})`);
    glowGradient.addColorStop(0.5, `rgba(200, 200, 255, ${opacity * 0.2})`);
    glowGradient.addColorStop(1, 'rgba(180, 180, 255, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Draw a glowing trail along the spiral arm for better visibility
 */
function drawArmGlow(
  ctx: CanvasRenderingContext2D,
  a: number,
  b: number,
  size: number,
  armOffset: number,
  opacity: number
): void {
  ctx.save();
  
  // Use lighter composite mode for glow blending
  ctx.globalCompositeOperation = 'lighter';
  
  // Draw the arm as a series of gradient circles along the spiral
  for (let theta = 0; theta < Math.PI * 4; theta += 0.3) {
    const r = a * Math.exp(b * theta);
    if (r > size) break;
    
    const angle = theta + armOffset;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    
    // Glow size and opacity decrease with distance
    const distanceRatio = r / size;
    const glowSize = (1 - distanceRatio * 0.5) * size * 0.08;
    const glowOpacity = (1 - distanceRatio * 0.7) * opacity * 0.15;
    
    // Draw soft glow
    const armGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
    armGradient.addColorStop(0, `rgba(200, 200, 255, ${glowOpacity})`);
    armGradient.addColorStop(0.5, `rgba(180, 180, 240, ${glowOpacity * 0.6})`);
    armGradient.addColorStop(1, 'rgba(160, 160, 220, 0)');
    ctx.fillStyle = armGradient;
    ctx.beginPath();
    ctx.arc(x, y, glowSize, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.restore();
}
