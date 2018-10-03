import { TrailsModule } from './trails.module';

describe('TrailsModule', () => {
  let trailsModule: TrailsModule;

  beforeEach(() => {
    trailsModule = new TrailsModule();
  });

  it('should create an instance', () => {
    expect(trailsModule).toBeTruthy();
  });
});
