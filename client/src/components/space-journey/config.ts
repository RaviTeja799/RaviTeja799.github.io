/**
 * Cosmic stage configuration for the space journey animation
 * Defines scroll ranges and transitions for each celestial object
 */

import { CosmicStage } from './types';
import {
  renderEarthMoon,
  renderSun,
  renderBetelgeuse,
  renderNebula,
  renderBlackHole,
  renderGalaxies,
} from './renderers';

/**
 * Array of cosmic stages with scroll ranges and renderers
 * Each stage has a 5% transition overlap for smooth crossfading
 */
export const COSMIC_STAGES: CosmicStage[] = [
  {
    name: 'earth-moon',
    scrollStart: 0.0,
    scrollEnd: 0.15,
    renderer: renderEarthMoon,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
  {
    name: 'sun',
    scrollStart: 0.15,
    scrollEnd: 0.30,
    renderer: renderSun,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
  {
    name: 'betelgeuse',
    scrollStart: 0.35,
    scrollEnd: 0.50,
    renderer: renderBetelgeuse,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
  {
    name: 'nebula',
    scrollStart: 0.45,
    scrollEnd: 0.65,
    renderer: renderNebula,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
  {
    name: 'black-hole',
    scrollStart: 0.60,
    scrollEnd: 0.80,
    renderer: renderBlackHole,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
  {
    name: 'galaxies',
    scrollStart: 0.75,
    scrollEnd: 1.0,
    renderer: renderGalaxies,
    transitionIn: 0.05,
    transitionOut: 0.05,
  },
];
