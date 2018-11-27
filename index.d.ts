/// <reference types="node" />

import * as React from 'react';

declare module 'react-mobile-app' {
  type ComponentsWithOrientation = [React.ComponentType<any>] | [React.ComponentType<any>, React.ComponentType<any>]

  export function mobileDetector(desktop: React.ComponentType<any>,
    [portrait, landscape]?: ComponentsWithOrientation,
    [tablePortrait, tableLandscape]?: ComponentsWithOrientation): React.ComponentType<any>;

  export function onlyForDesktop(desktop: React.ComponentType<any>): React.ComponentType<any>;

  export function onlyForMobile(portrait: React.ComponentType<any>, landscape?: React.ComponentType<any>): React.ComponentType<any>;

  export function onlyForTablet(portrait: React.ComponentType<any>, landscape?: React.ComponentType<any>): React.ComponentType<any>;

  export function orientationDetector(portrait: React.ComponentType<any>, landscape?: React.ComponentType<any>): React.ComponentType<any>;

  export function isMobile(): boolean;
  export function isTablet(): boolean;
  export function isLandscape(): boolean;
}
