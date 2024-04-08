/**
 * Represents the horizontal and vertical scrollbars of a target element.
 */
export class Scrollbars {
  constructor(private targetElement: Element) {}

  /**
   * Centers the horizontal and vertical scrollbars of the target element
   * (i.e., centers the horizontal scrollbar on one-half the scroll width
   * and centers the vertical scrollbar on one-half the scroll height).
   */
  center(): void {
    // will result in scroll left being the scroll width (minus the width of the horizontal scrollbar)
    this.targetElement.scrollLeft = this.targetElement.scrollWidth;

    // will result in scroll top being the scroll height (minus the height of the vertical scrollbar)
    this.targetElement.scrollTop = this.targetElement.scrollHeight;

    // calculate the width and height of the horizontal and vertical scrollbars
    let horizontalScrollbarWidth = this.targetElement.scrollWidth - this.targetElement.scrollLeft;
    let verticalScrollbarWidth = this.targetElement.scrollHeight - this.targetElement.scrollTop;

    // center scrollbars
    this.targetElement.scrollLeft = (this.targetElement.scrollWidth / 2) - (horizontalScrollbarWidth / 2);
    this.targetElement.scrollTop = (this.targetElement.scrollHeight / 2) - (verticalScrollbarWidth / 2);
  }
}
