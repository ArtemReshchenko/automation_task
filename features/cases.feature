All cases are run on desktop browser and mobile device

TC001: Submit form with all required fields
Given I am on the public submission page
When I fill in all required fields with valid data
And I click the submit button
Then I should see "Incident reported successfully!" message

TC002: Submit form with all required and optional fields
Given I am on the public submission page
When I fill in all required fields with valid data
And I fill in all optional fields with valid data
And I click the submit button
Then I should see "Incident reported successfully!" message

TC003: Submit empty form
Given I am on the public submission page
When I don't fill in any fields
And I click the submit button
Then I should see "You have to fill in all required fields." message
And validation errors should be displayed for all required fields

TC004: Submit form with only name filled
Given I am on the public submission page
When I only fill in the name field
And I click the submit button
Then I should see "You have to fill in all required fields." message
And validation errors should be displayed for remaining required fields

TC005: Location dropdown validation
Given I am on the public submission page
When I click on the Location dropdown
Then I should see all available location options
And I should be able to select any location from the list

TC006: Type dropdown validation
Given I am on the public submission page
When I click on the Type dropdown
Then I should see all incident type options
And I should be able to select any type from the list

TC007: Person category dropdown validation
Given I am on the public submission page
When I click on the Person category dropdown
Then I should see all person category options
And I should be able to select any person category from the list

TC008: Near Miss type additional fields
Given I am on the public submission page
When I select "Near Miss" from the Type dropdown
Then I should see the "Cause of Injury or Near Miss" field
And all related fields should be mandatory

TC009: First Aid Injury type additional fields
Given I am on the public submission page
When I select "First Aid Injury" from the Type dropdown
Then I should see the following additional fields:
- Injury type
- What was the severity?
- Injury details
- Which part of the body was injured?
And all related fields should be mandatory

TC010: Upload valid file
Given I am on the public submission page
When I fill in all required fields
And I upload a valid file (PDF/Image) under 10MB
And I click the submit button
Then I should see "Incident reported successfully!" message

TC011: Upload invalid file type
Given I am on the public submission page
When I fill in all required fields
And I try to upload a file larger than 10MB
Then I should see an error message about file size limit