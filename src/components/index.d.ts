import type { App } from 'vue';

export interface ComponentPlugin {
  install: (app: App) => void;
}

export const componentPlugin: ComponentPlugin;
