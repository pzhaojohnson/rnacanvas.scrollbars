/**
 * Represents the thumb of the vertical scrollbar for a target element.
 */
export class VerticalScrollbarThumb {
  constructor(private targetElement: Element) {}

  /**
   * The topmost Y coordinate of the vertical scrollbar thumb
   * (in the coordinate system of the vertical scrollbar).
   *
   * Is equal to the `scrollTop` property of the target element.
   */
  get topY() {
    return this.targetElement.scrollTop;
  }

  set topY(topY) {
    this.targetElement.scrollTop = topY;
  }

  /**
   * The length of the vertical scrollbar thumb
   * (in the coordinate system of the vertical scrollbar).
   *
   * Is equal to `bottomY` minus `topY`.
   */
  get length() {
    // cache `scrollTop`
    let scrollTop = this.targetElement.scrollTop;

    // scroll as far down as possible
    this.targetElement.scrollTop = this.targetElement.scrollHeight;

    // calculate the length of the vertical scrollbar thumb
    let length = this.targetElement.scrollHeight - this.targetElement.scrollTop

    // restore the positioning of the vertical scrollbar thumb
    this.targetElement.scrollTop = scrollTop;

    return length;
  }

  /**
   * The bottommost Y coordinate of the vertical scrollbar thumb
   * (in the coordinate system of the vertical scrollbar).
   */
  get bottomY() {
    return this.topY + this.length;
  }

  set bottomY(bottomY) {
    this.targetElement.scrollTop = bottomY - this.length;
  }

  /**
   * The center Y coordinate of the vertical scrollbar thumb
   * (in the coordinate system of the vertical scrollbar).
   */
  get centerY() {
    return this.targetElement.scrollTop + (this.length / 2);
  }

  set centerY(centerY) {
    this.targetElement.scrollTop = centerY - (this.length / 2);
  }
}
