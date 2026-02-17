import { test } from "@playwright/test";

test.use({ viewport: { width: 1920, height: 1080 } });

test("verify staggered reveal animations", async ({ page }) => {
  // Screenshot at 0s (before animations)
  await page.goto("http://localhost:3000", { waitUntil: "commit" });
  await page.screenshot({
    path: "tests/screenshots/reveal-0s.png",
    fullPage: false,
  });

  // 500ms - name should be visible, rest still fading
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "tests/screenshots/reveal-500ms.png",
    fullPage: false,
  });

  // 1s - all elements should be appearing
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "tests/screenshots/reveal-1s.png",
    fullPage: false,
  });

  // 2s - everything fully revealed
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "tests/screenshots/reveal-2s.png",
    fullPage: false,
  });

  console.log("Captured reveal sequence!");
});
