import { test, expect } from '@playwright/test';
import { PublicSubmissionPage } from '../pages/public-submission-page';
import { TestData as data } from '../test-data/submission-data';
import { TestHelper as helper } from '../helpers/helper';

let submissionPage: PublicSubmissionPage;

test.describe('Base Page - VR', () => {
    test.beforeEach(async ({ page }) => {
        submissionPage = new PublicSubmissionPage(page);
        await submissionPage.goto();
    });

    test.describe('Default Page Views', () => {
        for (const viewport of ['desktop', 'mobile', 'tablet'] as const) {
            test(`Default Page View - ${viewport}`, { tag: ['@visual-regression', `@${viewport}`] }, async ({ page }) => {
                await expect(page).toHaveScreenshot(data.screenshots[viewport].defaultView, { fullPage: true });
            });
        }
    });

    test.describe('Field Validation', () => {
        for (const viewport of ['desktop', 'mobile']) {
            test(`Field Validation - ${viewport}`, { tag: ['@visual-regression', `@${viewport}`] }, async ({ page }) => {
                await submissionPage.fillName(data.testName);
                await submissionPage.submitForm();
                await expect(page.getByText('You have to fill in all required fields.')).toBeVisible();
                await expect(page).toHaveScreenshot(data.screenshots[viewport as keyof typeof data.screenshots].fieldValidation, { fullPage: true });
            });
        }
    });


    test.describe('Dropdown Interactions', () => {
        const dropdowns = [
            { name: 'Location', testId: 'Location' },
            { name: 'Type', testId: 'Type' },
            { name: 'Person category', testId: 'Person category' }
        ];

        for (const dropdown of dropdowns) {
            for (const viewport of ['desktop', 'mobile']) {
                test(`${dropdown.name} Dropdown Values - ${viewport}`, {
                    tag: ['@visual-regression', `@${viewport}`]
                }, async ({ page }) => {
                    await page.setViewportSize(data.viewports[viewport as keyof typeof data.viewports]);
                    await helper.takeDropdownScreenshot(page, {
                        testId: dropdown.testId,
                        viewport,
                        screenshotName: `dropdown-values-${dropdown.name.toLowerCase()}`
                    });
                });
            }
        }
    });

    test.describe('Type-specific Content', () => {
        const typeTests = [
            {
                type: 'Near Miss',
                additionalField: 'Cause of Injury or Near Miss',
                screenshotPrefix: 'near-miss-additional'
            },
            {
                type: 'First Aid Injury',
                additionalFields: ['Injury type', 'What was the severity?', 'Injury details', 'Which part of the body was injured?'],
                screenshotPrefix: 'first-aid-injury'
            }
        ];

        for (const typeTest of typeTests) {
            for (const viewport of ['desktop', 'mobile']) {
                test(`${typeTest.type} Additional Content - ${viewport}`, {
                    tag: ['@visual-regression', `@${viewport}`]
                }, async ({ page }) => {
                    await page.setViewportSize(data.viewports[viewport as keyof typeof data.viewports]);
                    await submissionPage.selectType(typeTest.type);
                    await page.evaluate(() => window.scrollTo(0, 200));
                    await expect(page).toHaveScreenshot(
                        `${typeTest.screenshotPrefix}-content-${viewport}.png`
                    );
                });
            }
        }
    });
});