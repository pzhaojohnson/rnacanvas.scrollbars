import { VerticalScrollbarThumb } from './VerticalScrollbarThumb';

class ElementMock {
  #verticalScrollbar = null;

  constructor({ verticalScrollbar }) {
    this.#verticalScrollbar = verticalScrollbar;
  }

  get scrollTop() {
    return this.#verticalScrollbar.thumb.topY;
  }

  set scrollTop(scrollTop) {
    scrollTop = Math.min(scrollTop, this.#verticalScrollbar.track.length - this.#verticalScrollbar.thumb.length);
    scrollTop = Math.max(scrollTop, 0);

    this.#verticalScrollbar.thumb.topY = scrollTop;
  }

  get scrollHeight() {
    return this.#verticalScrollbar.track.length;
  }
}

describe('VerticalScrollbarThumb class', () => {
  test('topY getter', () => {
    let targetElement = { scrollTop: 804 };

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    expect(verticalScrollbarThumb.topY).toBe(804);
  });

  test('topY setter', () => {
    let targetElement = { scrollTop: 100 };

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    verticalScrollbarThumb.topY = 672;

    expect(targetElement.scrollTop).toBe(672);
  });

  describe('length getter', () => {
    let targetElement = new ElementMock({ verticalScrollbar: { thumb: { topY: 105, length: 449 }, track: { length: 1812 } } });

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    it('returns the length of the vertical scrollbar thumb', () => {
      expect(verticalScrollbarThumb.length).toBe(449);
    });

    it('does not move the vertical scrollbar thumb', () => {
      // use the getter
      let length = verticalScrollbarThumb.length;

      expect(targetElement.scrollTop).toBe(105);
    });
  });

  test('bottomY getter', () => {
    let targetElement = new ElementMock({ verticalScrollbar: { thumb: { topY: 844, length: 732 }, track: { length: 2195 } } });

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    expect(verticalScrollbarThumb.bottomY).toBe(844 + 732);
  });

  test('bottomY setter', () => {
    let targetElement = new ElementMock({ verticalScrollbar: { thumb: { topY: 300, length: 408 }, track: { length: 1612 } } });

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    verticalScrollbarThumb.bottomY = 542;

    expect(targetElement.scrollTop).toBe(542 - 408);
  });

  test('centerY getter', () => {
    let targetElement = new ElementMock({ verticalScrollbar: { thumb: { topY: 2109, length: 688 }, track: { length: 3277 } } });

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    expect(verticalScrollbarThumb.centerY).toBe(2109 + (688 / 2));
  });

  test('centerY setter', () => {
    let targetElement = new ElementMock({ verticalScrollbar: { thumb: { topY: 50, length: 647 }, track: { length: 2480 } } });

    let verticalScrollbarThumb = new VerticalScrollbarThumb(targetElement);

    verticalScrollbarThumb.centerY = 1641;

    expect(targetElement.scrollTop).toBeCloseTo(1641 - (647 / 2));
  });
});
