import { HorizontalScrollbarThumb } from './HorizontalScrollbarThumb';

class ElementMock {
  #horizontalScrollbar = null;

  constructor({ horizontalScrollbar }) {
    this.#horizontalScrollbar = horizontalScrollbar;
  }

  get scrollLeft() {
    return this.#horizontalScrollbar.thumb.leftX;
  }

  set scrollLeft(scrollLeft) {
    scrollLeft = Math.min(scrollLeft, this.#horizontalScrollbar.track.length - this.#horizontalScrollbar.thumb.length);
    scrollLeft = Math.max(scrollLeft, 0);

    this.#horizontalScrollbar.thumb.leftX = scrollLeft;
  }

  get scrollWidth() {
    return this.#horizontalScrollbar.track.length;
  }
}

describe('HorizontalScrollbarThumb class', () => {
  test('leftX getter', () => {
    let targetElement = { scrollLeft: 938 };

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    expect(horizontalScrollbarThumb.leftX).toBe(938);
  });

  test('leftX setter', () => {
    let targetElement = { scrollLeft: 100 };

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    horizontalScrollbarThumb.leftX = 259;

    expect(targetElement.scrollLeft).toBe(259);
  });

  describe('length getter', () => {
    let targetElement = new ElementMock({ horizontalScrollbar: { thumb: { leftX: 108, length: 812 }, track: { length: 2533 } } });

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    it('returns the length of the horizontal scrollbar thumb', () => {
      expect(horizontalScrollbarThumb.length).toBe(812);
    });

    it('does not move the horizontal scrollbar thumb', () => {
      // use the getter
      let length = horizontalScrollbarThumb.length;

      expect(targetElement.scrollLeft).toBe(108);
    });
  });

  test('rightX getter', () => {
    let targetElement = new ElementMock({ horizontalScrollbar: { thumb: { leftX: 28, length: 106 }, track: { length: 2000 } } });

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    expect(horizontalScrollbarThumb.rightX).toBe(134);
  });

  test('rightX setter', () => {
    let targetElement = new ElementMock({ horizontalScrollbar: { thumb: { leftX: 88, length: 305 }, track: { length: 1250 } } });

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    horizontalScrollbarThumb.rightX = 931;

    expect(targetElement.scrollLeft).toBe(931 - 305);
  });

  test('centerX getter', () => {
    let targetElement = new ElementMock({ horizontalScrollbar: { thumb: { leftX: 512, length: 708 }, track: { length: 5188 } } });

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    expect(horizontalScrollbarThumb.centerX).toBeCloseTo(512 + (708 / 2));
  });

  test('centerX setter', () => {
    let targetElement = new ElementMock({ horizontalScrollbar: { thumb: { leftX: 304, length: 901 }, track: { length: 2879 } } });

    let horizontalScrollbarThumb = new HorizontalScrollbarThumb(targetElement);

    horizontalScrollbarThumb.centerX = 2082;

    expect(targetElement.scrollLeft).toBeCloseTo(2082 - (901 / 2));
  });
});
