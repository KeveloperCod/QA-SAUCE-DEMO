import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  context!: BrowserContext;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    try {
      this.browser = await chromium.launch({ 
        headless: false,
        slowMo: 100,
        channel: 'chrome',
        timeout: 60000
      });

      this.context = await this.browser.newContext({
        viewport: { width: 1280, height: 1024 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ignoreHTTPSErrors: true,
        recordVideo: { dir: 'videos/' } // 🎥 Grabación de video activada
      });

      this.page = await this.context.newPage();
      this.page.setDefaultTimeout(this.parameters.actionTimeout);
      this.page.setDefaultNavigationTimeout(this.parameters.navigationTimeout);

      this.page.on('console', msg => console.log('PAGE LOG:', msg.text()));
      this.page.on('response', response => 
        console.log(`Response: ${response.status()} ${response.url()}`));
        
    } catch (error) {
      console.error('Browser initialization failed:', error);
      throw error;
    }
  }

  async close() {
    try {
      const videoPath = await this.page.video()?.path();
      if (videoPath) {
        console.log('Video guardado en:', videoPath);
      }
      await this.page?.close();
      await this.context?.close();
      await this.browser?.close();
    } catch (error) {
      console.error('Cleanup error:', error);
    }
  }
}

setWorldConstructor(CustomWorld);
