import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  //Switch to partial generation
  await page.getByRole('radio', { name: 'Partial generation:' }).check();

  //CPR is default
  await page.getByRole('button', { name: 'Generate' }).click();
  //Expected values
  await expect(page.locator('.cprValue')).toHaveText(/^\d{6}-\d{4}$/);
  //Shown values
  await expect(page.locator('.cprValue')).toBeVisible();
  //Hidden values
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
  //Exprected values
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).toHaveText(/^(male|female)$/);
  //Shown values
  await expect(page.locator('.firstNameValue')).toBeVisible();
  await expect(page.locator('.lastNameValue')).toBeVisible();
  await expect(page.locator('.genderValue')).toBeVisible();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();
  
  //Name, Gender and DOB
  await page.locator('#cmbPartialOptions').selectOption('name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Expected values
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).toHaveText(/^(male|female)$/);
  await expect(page.locator('.dobValue')).not.toBeEmpty();
  //Shown values
  await expect(page.locator('.firstNameValue')).toBeVisible();
  await expect(page.locator('.lastNameValue')).toBeVisible();
  await expect(page.locator('.genderValue')).toBeVisible();
  await expect(page.locator('.dobValue')).toBeVisible();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //CPR, Name and Gender
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Expected values
  await expect(page.locator('.cprValue')).toHaveText(/^\d{6}-\d{4}$/);
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).toHaveText(/^(male|female)$/);
  //Shown values
  await expect(page.locator('.cprValue')).toBeVisible();
  await expect(page.locator('.firstNameValue')).toBeVisible();
  await expect(page.locator('.lastNameValue')).toBeVisible();
  await expect(page.locator('.genderValue')).toBeVisible();
  //Hidden values
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //CPR, Name, Gender and DOB
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Expected values
  await expect(page.locator('.cprValue')).toHaveText(/^\d{6}-\d{4}$/);
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).toHaveText(/^(male|female)$/);
  await expect(page.locator('.dobValue')).not.toBeEmpty();
  //Shown values
  await expect(page.locator('.cprValue')).toBeVisible();
  await expect(page.locator('.firstNameValue')).toBeVisible();
  await expect(page.locator('.lastNameValue')).toBeVisible();
  await expect(page.locator('.genderValue')).toBeVisible();
  await expect(page.locator('.dobValue')).toBeVisible();
  //Hidden values
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
  await expect(page.locator('.phoneNumberValue')).toBeHidden();

  //Address only
  await page.locator('#cmbPartialOptions').selectOption('address');
  await page.getByRole('button', { name: 'Generate' }).click();
  //Exprected values
  await expect(page.locator('.streetValue')).not.toBeEmpty();
  await expect(page.locator('.townValue')).not.toBeEmpty();
  //Shown values
  await expect(page.locator('.streetValue')).toBeVisible();
  await expect(page.locator('.townValue')).toBeVisible();
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
  //Expected values
  await expect(page.locator('.phoneNumberValue')).toHaveText(/^\d{8}$/);
  //Shown values
  await expect(page.locator('.phoneNumberValue')).toBeVisible();
  //Hidden values
  await expect(page.locator('.cprValue')).toBeHidden();
  await expect(page.locator('.firstNameValue')).toBeHidden();
  await expect(page.locator('.lastNameValue')).toBeHidden();
  await expect(page.locator('.genderValue')).toBeHidden();
  await expect(page.locator('.dobValue')).toBeHidden();
  await expect(page.locator('.streetValue')).toBeHidden();
  await expect(page.locator('.townValue')).toBeHidden();
});
