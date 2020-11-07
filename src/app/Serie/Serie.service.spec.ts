import { TestBed, getTestBed } from "@angular/core/testing";

import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";

import { SerieService } from "./serie.service";
import { Serie } from "./serie";
import { environment } from "../../environments/environment";

describe("SerieService", () => {
  let injector: TestBed;
  let service: SerieService;
  let httpMock: HttpTestingController;
  let apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SerieService],
    });

    injector = getTestBed();
    service = injector.get(SerieService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getSeries() should return 10 records", () => {
    let mockPosts: Serie[] = [];

    for (let i = 0; i < 10; i++) {
      let course = new Serie(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      mockPosts.push(course);
    }

    service.getSeries().subscribe((series) => {
      expect(series.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
