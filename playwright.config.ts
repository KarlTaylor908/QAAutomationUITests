import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: path.join(__dirname, 'tests'),
 
  reporter: 'html',
  use: { 
    headless: false, 
    trace: 'on-first-retry', 
     baseURL: 'https://www.argos.co.uk/',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
