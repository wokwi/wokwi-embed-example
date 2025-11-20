import { test, expect } from '@playwright/test';

test('Wokwi embed: startup and simulation output', async ({ page }) => {
  // Open local dev server page
  await page.goto('http://localhost:2222/wokwi-embed-example/');

  // Wait 15s for the embed to initialize and update connection status
  await page.waitForTimeout(15000);

  // Expect the status to show "Connected" (not "Connecting...")
  await expect(page.getByText('Connected')).toBeVisible();

  const terminal = page.locator('pre');

  // On startup the MicroPython REPL should include this line
  await expect(terminal).toContainText('Type "help()" for more information.', { timeout: 15000 });

  // Start the simulation by clicking the button
  await page.getByRole('button', { name: 'Start Simulation' }).click();

  // Expect the firmware to print the greeting
  await expect(terminal).toContainText('Hello, ESP32!', { timeout: 15000 });
});
