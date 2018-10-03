import { MyTrailsModule } from './my-trails.module';

describe('MyTrailsModule', () => {
  let myTrailsModule: MyTrailsModule;

  beforeEach(() => {
    myTrailsModule = new MyTrailsModule();
  });

  it('should create an instance', () => {
    expect(myTrailsModule).toBeTruthy();
  });
});
