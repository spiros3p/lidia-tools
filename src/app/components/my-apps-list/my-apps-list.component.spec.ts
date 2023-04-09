import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MyAppsListComponent } from './my-apps-list.component';

describe('MyAppsListComponent', () => {
  let spectator: Spectator<MyAppsListComponent>;
  const createComponent = createComponentFactory(MyAppsListComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
