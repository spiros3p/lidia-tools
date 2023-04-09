import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MyAppsItemComponent } from './my-apps-item.component';

describe('MyAppsItemComponent', () => {
  let spectator: Spectator<MyAppsItemComponent>;
  const createComponent = createComponentFactory(MyAppsItemComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
