import { expect, Page } from "@playwright/test";
import { TestData as data } from "../test-data/submission-data";
export class PublicSubmissionPage {
    constructor(private page: Page) {}

    // Locators
    public nameInput = this.page.getByPlaceholder('Name of person involved');
    private readonly submitButton = this.page.getByText('Submit');
    private readonly locationDropdown = this.page.getByTestId('Location');
    private readonly typeDropdown = this.page.getByTestId('Type');
    private readonly dateInput = this.page.getByTestId('Date and time');
    private readonly descriptionInput = this.page.getByPlaceholder('Description');
    private readonly otherInjuryTypeInput = this.page.getByTestId('If other, please specify the type');
    private readonly otherInjuryInput = this.page.getByTestId('If other, please specify the injury');
    private readonly personCategoryDropdown = this.page.getByTestId('Person category');
    private readonly additionalNoteInput = this.page.locator('.sc-feUZmu');
    // Actions
    async goto() {
        await this.page.goto(data.baseURL);
        await expect(this.locationDropdown).toBeVisible({ timeout: data.waitTime });
    }

    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async selectType(type: string) {
        await this.typeDropdown.getByPlaceholder('Choose an option').click();
        await this.page.getByText(type).click();
    }

    async openDatePicker() {
        await this.dateInput.getByPlaceholder('DD/MM/YYYY hh:mm').click();
    }

    async selectDate(day: string) {
        await this.page.getByPlaceholder('DD/MM/YYYY hh:mm').click();
        await this.page.getByRole('gridcell', { name: day }).click();
        await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async fillDescription(description: string) {
        await this.descriptionInput.fill(description);
    }

    async fillOtherInjuryType(otherInjuryType: string) {
        await this.otherInjuryTypeInput.fill(otherInjuryType);
    }

    async fillOtherInjury(otherInjury: string) {
        await this.otherInjuryInput.fill(otherInjury);
    }

    async selectLocation(location: string) {
        await this.locationDropdown.getByPlaceholder('Choose an option').click();
        await this.page.getByText(location).click();
    }

    async selectPersonCategory(personCategory: string) {
        await this.personCategoryDropdown.getByPlaceholder('Choose an option').click();
        await this.page.getByText(personCategory).click();
    }

    async fillAdditionalNote(additionalNote: string) {
        await this.additionalNoteInput.fill(additionalNote);
    }

    async uploadFile(filePath: string) {
        await this.page.setInputFiles('input[type="file"]', filePath);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async fillRequiredFields() {
        await this.selectLocation(data.defaultData.locationValue);
        await this.selectType(data.defaultData.typeValue);
        await this.fillDescription(data.defaultData.description);
        await this.selectDate(data.defaultData.dayValue);
        await this.selectPersonCategory(data.defaultData.personCategoryValue);
    }

    async fillOptionalFields() {
        await this.fillName(data.defaultData.name);
        await this.fillAdditionalNote(data.defaultData.additionalNote);
    }
}