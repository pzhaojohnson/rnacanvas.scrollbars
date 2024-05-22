import { HorizontalScrollbarThumb } from './HorizontalScrollbarThumb';

/**
 * Represents the horizontal scrollbar of a target element.
 */
export class HorizontalScrollbar {
  readonly thumb: HorizontalScrollbarThumb;

  constructor(private targetElement: Element) {
    this.thumb = new HorizontalScrollbarThumb(targetElement);
  }
}
