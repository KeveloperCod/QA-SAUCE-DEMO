import fs from 'fs';
import path from 'path';
import { After, Before } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED') {
    const dir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const fileName = `failed-${scenario.pickle.name}-${new Date().toISOString()}.png`.replace(/[^\w.-]/g, '');
    const filePath = path.join(dir, fileName);
    await this.page.screenshot({ path: filePath });
  }

  await this.close();
});
