import {HomePage} from "./app.po";

const page = new HomePage();

fixture('Home')
  .page('http://localhost:4200');

test('Titles and toolbar are present', async t => {
  await t
    .expect(page.title.withText("Resources").exists).ok()
    .expect(page.title.withText("Next Steps").exists).ok()
    .expect(page.toobar.exists).ok();
});

test('Terminal views selected command', async t => {
  await t
    .click(page.angularMaterialButton)
    .expect(page.terminal.textContent).eql('ng add @angular/material')
    .click(page.newComponentButton)
    .expect(page.terminal.textContent).eql('ng generate component xyz');
});
