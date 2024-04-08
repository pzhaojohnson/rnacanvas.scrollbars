import { Scrollbars } from './Scrollbars';

function createElementMock({ scrollWidth, horizontalScrollbarWidth, scrollHeight, verticalScrollbarHeight }) {
  let scrollLeft = 0;
  let scrollTop = 0;

  return {
    get scrollWidth() { return scrollWidth; },
    get scrollHeight() { return scrollHeight; },

    get scrollLeft() { return scrollLeft; },
    set scrollLeft(x) {
      scrollLeft = Math.min(x, scrollWidth - horizontalScrollbarWidth);
      scrollLeft = Math.max(scrollLeft, 0);
    },

    get scrollTop() { return scrollTop; },
    set scrollTop(y) {
      scrollTop = Math.min(y, scrollHeight - verticalScrollbarHeight);
      scrollTop = Math.max(scrollTop, 0);
    },
  };
}

describe('Scrollbars class', () => {
  test('center method', () => {
    let ele = createElementMock({
      scrollWidth: 11892,
      horizontalScrollbarWidth: 651,
      scrollHeight: 5022,
      verticalScrollbarHeight: 593,
    });

    let scrollbars = new Scrollbars(ele);

    ele.scrollLeft = 0;
    ele.scrollTop = 0;

    scrollbars.center();

    expect(ele.scrollLeft).toBeCloseTo((11892 / 2) - (651 / 2));
    expect(ele.scrollTop).toBeCloseTo((5022 / 2) - (593 / 2));
  });
});
