import { PublicSubmissionPage } from '../pages/public-submission-page';
import { test, expect } from '@playwright/test';

let submissionPage: PublicSubmissionPage;

test.describe('Base Page', () => {
    test.beforeEach(async ({ page }) => {
        submissionPage = new PublicSubmissionPage(page);
        await submissionPage.goto();
    });

    test('Submit form', { tag: ['@functional', '@desktop'] }, async ({ page }) => {
        await expect(submissionPage.nameInput).toBeVisible();
        await submissionPage.fillOptionalFields();
        await submissionPage.fillRequiredFields();
        await submissionPage.submitForm();
        await expect(page.getByText('Incident reported successfully!')).toBeVisible();
    });

    test('Submit form with invalid file', { tag: ['@functional', '@desktop'] }, async ({ page }) => {
        await expect(submissionPage.nameInput).toBeVisible();
        await submissionPage.fillOptionalFields();
        await submissionPage.fillRequiredFields();
        await submissionPage.uploadFile('./test-data/files/script.js');
        await submissionPage.submitForm();
        await expect(page.getByText('Incident reported successfully!')).toBeVisible(); // due to missing validation file uploaded successfully
    });
});
