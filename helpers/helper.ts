import { Page, expect } from "@playwright/test";

export class TestHelper {
    static async takeDropdownScreenshot(page: Page, {
        testId,
        viewport,
        screenshotName,
        scrollSelector = '#multi-drop-down-field-listbox'
    }: {
        testId: string;
        viewport: string;
        screenshotName: string;
        scrollSelector?: string;
    }) {
        await page.getByTestId(testId).getByPlaceholder(/^Choose (?:an option|option\(s\))$/).click();
        await expect(page).toHaveScreenshot(`${screenshotName}-${viewport}.png`, {
            fullPage: true
        });
        
        if (scrollSelector) {
            await page.evaluate((selector) => {
                const element = document.querySelector(selector);
                if (!element) return;
                element.scrollTo(0, element.scrollHeight);
            }, scrollSelector);
            await expect(page).toHaveScreenshot(`${screenshotName}-${viewport}-scrolled.png`, {
                fullPage: true
            });
        }
    }
}