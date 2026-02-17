import { test } from "@playwright/test";

test.use({ viewport: { width: 1920, height: 1080 } });

test("study lendwise-react reveal animations", async ({ page }) => {
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });

  // Screenshot immediately on load (before animations)
  await page.screenshot({
    path: "tests/screenshots/lendwise-load-0s.png",
    fullPage: false,
  });

  // Wait 1s for initial reveals
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "tests/screenshots/lendwise-load-1s.png",
    fullPage: false,
  });

  // Wait 2s more
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: "tests/screenshots/lendwise-load-3s.png",
    fullPage: false,
  });

  // Wait for full animation settle
  await page.waitForTimeout(3000);
  await page.screenshot({
    path: "tests/screenshots/lendwise-load-6s.png",
    fullPage: false,
  });

  console.log("Captured lendwise-react reveal sequence!");
});
