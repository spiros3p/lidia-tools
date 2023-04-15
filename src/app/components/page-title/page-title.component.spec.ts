import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageTitleComponent } from './page-title.component';

describe('PageTitleComponent', () => {
  let spectator: Spectator<PageTitleComponent>;
  const createComponent = createComponentFactory(PageTitleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
