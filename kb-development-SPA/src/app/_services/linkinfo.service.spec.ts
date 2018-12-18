/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LinkinfoService } from './linkinfo.service';

describe('Service: Linkinfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkinfoService]
    });
  });

  it('should ...', inject([LinkinfoService], (service: LinkinfoService) => {
    expect(service).toBeTruthy();
  }));
});
