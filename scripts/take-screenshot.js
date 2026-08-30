import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const SCREENSHOTS_DIR = './screenshots';
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

const sections = [
  { name: 'hero', selector: 'main > :nth-child(1)' },
  { name: 'media', selector: '#media' },
  { name: 'members', selector: '#members' },
  { name: 'gigs', selector: '#gigs' },
];

async function takeScreenshots() {
  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  try {
    for (const viewport of viewports) {
      console.log(`\n📸 Capturing ${viewport.name} screenshots...`);
      
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      const page = await context.newPage();

      try {
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });

        // Full page screenshot
        const fullPagePath = path.join(
          SCREENSHOTS_DIR,
          `full-page-${viewport.name}.png`
        );
        await page.screenshot({ path: fullPagePath, fullPage: true });
        console.log(`  ✓ Full page: ${fullPagePath}`);

        // Section screenshots
        for (const section of sections) {
          const element = await page.$(section.selector);
          
          if (element) {
            const sectionPath = path.join(
              SCREENSHOTS_DIR,
              `${section.name}-${viewport.name}.png`
            );
            await element.screenshot({ path: sectionPath });
            console.log(`  ✓ ${section.name}: ${sectionPath}`);
          } else {
            console.log(`  ⚠ ${section.name}: element not found`);
          }
        }
      } finally {
        await context.close();
      }
    }

    console.log('\n✅ Screenshots completed successfully!');
    console.log(`📁 Screenshots saved to: ${SCREENSHOTS_DIR}/`);
  } catch (error) {
    console.error('❌ Error taking screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
