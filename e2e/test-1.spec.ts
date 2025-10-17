import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  await expect(page.locator('#chkPerson')).toBeChecked();
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#txtNumberPersons')).toHaveValue('1');

  await expect(page.locator('.cprValue')).not.toBeEmpty();
  await expect(page.locator('.firstNameValue')).not.toBeEmpty();
  await expect(page.locator('.lastNameValue')).not.toBeEmpty();
  await expect(page.locator('.genderValue')).not.toBeEmpty();
  await expect(page.locator('.dobValue')).not.toBeEmpty();
  await expect(page.locator('.streetValue')).not.toBeEmpty();
  await expect(page.locator('.townValue')).not.toBeEmpty();
  await expect(page.locator('.phoneNumberValue')).not.toBeEmpty();
  
  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('50');
  await page.getByRole('button', { name: 'Generate' }).click();

  for(let i=0; i<50; i++) {
    await expect(page.locator(`#personCard-${i} .cprValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .firstNameValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .lastNameValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .genderValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .dobValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .streetValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .townValue`)).not.toBeEmpty();
    await expect(page.locator(`#personCard-${i} .phoneNumberValue`)).not.toBeEmpty();
  }

  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('100');
  await page.getByRole('button', { name: 'Generate' }).click();

    for(let i=0; i<100; i++) {
      await expect(page.locator(`#personCard-${i} .cprValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .firstNameValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .lastNameValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .genderValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .dobValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .streetValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .townValue`)).not.toBeEmpty();
      await expect(page.locator(`#personCard-${i} .phoneNumberValue`)).not.toBeEmpty();
  }
});

