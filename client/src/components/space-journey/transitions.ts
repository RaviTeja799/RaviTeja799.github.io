/**
 * Transition calculation functions for smooth crossfading between cosmic stages
 */

import { CosmicStage } from './types';

/**
 * Calculate the opacity for a stage based on global scroll progress
 * Handles fade in and fade out transitions
 * 
 * @param globalProgress - Normalized scroll progress (0-1)
 * @param stage - The cosmic stage to calculate opacity for
 * @returns Opacity value (0-1)
 */
export function calculateStageOpacity(
  globalProgress: number,
  stage: CosmicStage
): number {
  const { scrollStart, scrollEnd, transitionIn, transitionOut } = stage;
  
  // Before stage starts
  if (globalProgress < scrollStart) {
    return 0;
  }
  
  // Fade in period
  if (globalProgress < scrollStart + transitionIn) {
    return (globalProgress - scrollStart) / transitionIn;
  }
  
  // Full visibility period
  if (globalProgress < scrollEnd - transitionOut) {
    return 1;
  }
  
  // Fade out period
  if (globalProgress < scrollEnd) {
    return (scrollEnd - globalProgress) / transitionOut;
  }
  
  // After stage ends
  return 0;
}

/**
 * Calculate local progress within a stage (0-1)
 * Normalizes the global progress to the stage's scroll range
 * 
 * @param globalProgress - Normalized scroll progress (0-1)
 * @param stage - The cosmic stage to calculate local progress for
 * @returns Local progress value (0-1)
 */
export function calculateLocalProgress(
  globalProgress: number,
  stage: CosmicStage
): number {
  const { scrollStart, scrollEnd } = stage;
  
  // Clamp progress to stage bounds
  if (globalProgress <= scrollStart) {
    return 0;
  }
  
  if (globalProgress >= scrollEnd) {
    return 1;
  }
  
  // Normalize progress within stage range
  const stageRange = scrollEnd - scrollStart;
  const progressInStage = globalProgress - scrollStart;
  
  return progressInStage / stageRange;
}

/**
 * Get all stages that are currently active (opacity > 0)
 * 
 * @param globalProgress - Normalized scroll progress (0-1)
 * @param stages - Array of cosmic stages
 * @returns Array of active stages with their opacity and local progress
 */
export function getActiveStages(
  globalProgress: number,
  stages: CosmicStage[]
): Array<{
  stage: CosmicStage;
  opacity: number;
  localProgress: number;
}> {
  return stages
    .map(stage => ({
      stage,
      opacity: calculateStageOpacity(globalProgress, stage),
      localProgress: calculateLocalProgress(globalProgress, stage),
    }))
    .filter(({ opacity }) => opacity > 0);
}
