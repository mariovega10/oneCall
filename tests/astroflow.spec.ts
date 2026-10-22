import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astroflow.wingflows.com/');
  await page.getByRole('link', { name: 'Request Quote' }).nth(1).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  const firstName = await page.getByRole('textbox', { name: 'First Name *' })
  await firstName.scrollIntoViewIfNeeded();
  await firstName.fill('mario');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('vega');
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('asds@fdgfg.com');
  await page.getByRole('textbox', { name: 'Phone Number *' }).click();
  await page.getByRole('textbox', { name: 'Phone Number *' }).fill('847889565');
  await page.getByRole('textbox', { name: 'Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('sugar');
  await page.getByLabel('Industry *').selectOption('technology');
  await page.getByRole('checkbox', { name: 'Transportation & Distribution' }).click();
  await page.getByLabel('Timeline *').selectOption('1-3-months');
  await page.getByRole('textbox', { name: 'Estimated Monthly Volume' }).click();
  await page.getByRole('textbox', { name: 'Estimated Monthly Volume' }).fill('45');
  await page.getByRole('textbox', { name: 'Project Details *' }).click();
  await page.getByRole('textbox', { name: 'Project Details *' }).fill('test');
// setup a listener for the dialog event before clicking the submit button
  page.on('dialog', dialog => {
    expect(dialog.message()).toEqual('Thank you for your request! We will contact you within 24 hours.');
    dialog.accept();
  });

  const submit = page.getByRole('button', { name: 'Submit Request' });
  await submit.scrollIntoViewIfNeeded();
  await submit.click();
});


