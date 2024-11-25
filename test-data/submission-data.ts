export const TestData = {
    baseURL: 'https://workspace.stage.vatix.com/publicSubmission/731ff348-c742-4f5a-8fee-58013ccaecfe/',
    waitTime: 20000,
    testName: 'This is a test',
    defaultData: {
        name: 'This is a test',
        locationValue: 'A2 Offices',
        typeValue: 'Fatality',
        description: 'This is a test description',
        personCategoryValue: 'Employee',
        dayValue: '20',
        additionalNote: 'This is a test additional note',
    },
    viewports: {
        desktop: { width: 1920, height: 1080 },
        tablet: { width: 768, height: 1024 },
        mobile: { width: 375, height: 812 }
    },
    screenshots: {
        desktop: {
            defaultView: 'default-page-view.png',
            fieldValidation: 'field-validation-desktop.png',
            dropdownValues: {
                location: 'dropdown-values-location-desktop.png',
                type: 'dropdown-values-type-desktop.png',
                personCategory: 'dropdown-values-person-category-desktop.png',
                nearMissAdditionalDropdownValues: {
                    upper: 'near-miss-additional-dropdown-values-upper.png',
                    lower: 'near-miss-additional-dropdown-values-lower.png',
                },
                firstAidInjuryAdditionalContent: 'first-aid-injury-additional-content-desktop.png',
                firstAidInjuryFieldError: 'first-aid-injury-additional-content-desktop-field-error.png',
                injuryTypeDropdownValues: {
                    upper: 'injury-type-dropdown-desktop-upper.png',
                    lower: 'injury-type-dropdown-desktop-lower.png',
                },
                injuryDetailsDropdownValues: {
                    upper: 'injury-details-dropdown-desktop-upper.png',
                    lower: 'injury-details-dropdown-desktop-lower.png',
                },
                bodyPartDropdownValues: {
                    upper: 'body-part-dropdown-desktop-upper.png',
                    lower: 'body-part-dropdown-desktop-lower.png',
                }
            }
        },
        mobile: {
            defaultView: 'default-page-view-mobile.png',
            fieldValidation: 'field-validation-mobile.png',
            dropdownValues: {
                location: 'dropdown-values-location-mobile.png',
                type: 'dropdown-values-type-mobile.png',
                personCategory: 'dropdown-values-person-category-mobile.png',
                nearMissAdditionalDropdownValues: {
                    upper: 'near-miss-additional-dropdown-values-upper.png',
                    lower: 'near-miss-additional-dropdown-values-lower.png',
                },
                firstAidInjuryAdditionalContent: 'first-aid-injury-additional-content-mobile.png',
                firstAidInjuryFieldError: 'first-aid-injury-additional-content-mobile-field-error.png',
                injuryTypeDropdownValues: {
                    upper: 'injury-type-dropdown-mobile-upper.png',
                    lower: 'injury-type-dropdown-mobile-lower.png',
                },
                severityDropdownValues: 'severity-dropdown-mobile.png',
            }
        },
        tablet: {
            defaultView: 'default-page-view-tablet.png',
            fieldValidation: 'field-validation-tablet.png',
            dropdownValues: {
                location: 'dropdown-values-location-tablet.png',
                type: 'dropdown-values-type-tablet.png',
            }
        }
    }
};