/**
 * Represents the thumb of the horizontal scrollbar for a target element.
 */
export class HorizontalScrollbarThumb {
  constructor(private targetElement: Element) {}

  /**
   * The leftmost X coordinate of the horizontal scrollbar thumb
   * (in the coordinate system of the horizontal scrollbar).
   *
   * Is equal to the `scrollLeft` property of the target element.
   */
  get leftX() {
    return this.targetElement.scrollLeft;
  }

  set leftX(leftX) {
    this.targetElement.scrollLeft = leftX;
  }

  /**
   * The length of the horizontal scrollbar thumb
   * (in the coordinate system of the horizontal scrollbar).
   *
   * Is equal to `rightX` minus `leftX`.
   */
  get length() {
    // cache `scrollLeft`
    let scrollLeft = this.targetElement.scrollLeft;

    // scroll as far right as possible
    this.targetElement.scrollLeft = this.targetElement.scrollWidth;

    // calculate the length of the horizontal scrollbar thumb
    let length = this.targetElement.scrollWidth - this.targetElement.scrollLeft;

    // restore the horizontal scrollbar thumb to its original position
    this.targetElement.scrollLeft = scrollLeft;

    return length;
  }

  /**
   * The rightmost X coordinate of the horizontal scrollbar thumb
   * (in the coordinate system of the horizontal scrollbar).
   */
  get rightX() {
    return this.leftX + this.length;
  }

  set rightX(rightX) {
    this.targetElement.scrollLeft = rightX - this.length;
  }

  /**
   * The center X coordinate of the horizontal scrollbar thumb
   * (in the coordinate system of the horizontal scrollbar).
   */
  get centerX() {
    return (this.leftX + this.rightX) / 2;
  }

  set centerX(centerX) {
    this.targetElement.scrollLeft = centerX - (this.length / 2);
  }
}
