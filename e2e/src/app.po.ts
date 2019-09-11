import {Selector} from "testcafe";

export class HomePage {
  title = Selector('h2');
  toobar = Selector('div.toolbar');
  newComponentButton = Selector('.e2e-new-component-button');
  angularMaterialButton = Selector('.e2e-angular-material-button');
  terminal = Selector('div.terminal');
}
