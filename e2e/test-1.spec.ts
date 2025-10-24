import { test, expect, Page } from '@playwright/test';

async function checkValues(page: Page, index: number) {
  //Only contains numbers, is 11 characters long, and has a dash after the sixth character
  await expect(page.locator(`#personCard-${index} .cprValue`)).toHaveText(/^\d{6}-\d{4}$/);
  await expect(page.locator(`#personCard-${index} .firstNameValue`)).toContainText(/\S+/);
  await expect(page.locator(`#personCard-${index} .lastNameValue`)).not.toBeEmpty();
  //Only be male or female
  await expect(page.locator(`#personCard-${index} .genderValue`)).toHaveText(/^(male|female)$/);
  await expect(page.locator(`#personCard-${index} .dobValue`)).not.toBeEmpty();
  await expect(page.locator(`#personCard-${index} .streetValue`)).not.toBeEmpty();
  await expect(page.locator(`#personCard-${index} .townValue`)).not.toBeEmpty();
  //Only numbers and be 8 characters long
  await expect(page.locator(`#personCard-${index} .phoneNumberValue`)).toHaveText(/^\d{8}$/);

}

async function CheckVisibility(page: Page, index: number) {
  await expect(page.locator(`#personCard-${index} .cprValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .firstNameValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .lastNameValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .genderValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .dobValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .streetValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .townValue`)).toBeVisible();
  await expect(page.locator(`#personCard-${index} .phoneNumberValue`)).toBeVisible();
}


test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  await expect(page.locator('#chkPerson')).toBeChecked();
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#txtNumberPersons')).toHaveValue('1');

  await checkValues(page, 0);
  await CheckVisibility(page, 0);

  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('50');
  await page.getByRole('button', { name: 'Generate' }).click();

  for(let i=0; i<50; i++) {
    await checkValues(page, i);
    await CheckVisibility(page, i);
  }

  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('100');
  await page.getByRole('button', { name: 'Generate' }).click();

  for(let i=0; i<100; i++) {
      await checkValues(page, i);
      await CheckVisibility(page, i);
  }
});

