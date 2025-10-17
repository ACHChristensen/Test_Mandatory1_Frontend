import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  //Switch to partial generation
  await page.getByRole('radio', { name: 'Partial generation:' }).check();
  await page.getByRole('button', { name: 'Generate' }).click();

  // Verify that by default only CPR is shown
  await expect(page.locator('.cprValue')).not.toBeEmpty();
  // The rest should be hidden
  await expect(page.locator('.firstNameValue')).toBeHidden();
  await expect(page.locator('.lastNameValue')).toBeHidden();
  await expect(page.locator('.genderValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //Name and Gender
  await page.locator('#cmbPartialOptions').selectOption('name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();
  
  //Name, Gender and DOB
  await page.locator('#cmbPartialOptions').selectOption('name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).not.toBeEmpty();
  await expect(page.locator('.dobValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //CPR, Name and Gender
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.cprValue')).not.toBeEmpty();
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //CPR, Name, Gender and DOB
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.cprValue')).not.toBeEmpty();
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).not.toBeEmpty();
  await expect(page.locator('.dobValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //Address only
  await page.locator('#cmbPartialOptions').selectOption('address');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.streetValue')).not.toBeEmpty();
  await expect(page.locator('.townValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.firstNameValue')).toBeHidden();
  await expect(page.locator('.lastNameValue')).toBeHidden();
  await expect(page.locator('.genderValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //Phone only
  await page.locator('#cmbPartialOptions').selectOption('phone');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Shown values
  await expect(page.locator('.phoneNumberValue')).not.toBeEmpty();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.firstNameValue')).toBeHidden();
  await expect(page.locator('.lastNameValue')).toBeHidden();
  await expect(page.locator('.genderValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
});
