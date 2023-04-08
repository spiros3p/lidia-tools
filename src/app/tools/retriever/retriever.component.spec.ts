import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RetrieverComponent } from './retriever.component';

describe('RetrieverComponent', () => {
  let spectator: Spectator<RetrieverComponent>;
  const createComponent = createComponentFactory(RetrieverComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
