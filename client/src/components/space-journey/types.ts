/**
 * Types for the Space Journey animation system
 */

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  progress: number; // Local progress for this object (0-1)
  quality: 'high' | 'medium' | 'low';
  time: number; // Animation time in ms
}

export type CosmicRenderer = (context: RenderContext) => void;

export interface CosmicStage {
  name: string;
  scrollStart: number; // 0.0 to 1.0
  scrollEnd: number; // 0.0 to 1.0
  renderer: CosmicRenderer;
  transitionIn: number; // Fade in duration (0.05 = 5% of scroll)
  transitionOut: number; // Fade out duration
}
