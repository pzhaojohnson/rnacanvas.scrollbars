import { VerticalScrollbarThumb } from './VerticalScrollbarThumb';

/**
 * Represents the vertical scrollbar of a target element.
 */
export class VerticalScrollbar {
  readonly thumb: VerticalScrollbarThumb;

  constructor(private targetElement: Element) {
    this.thumb = new VerticalScrollbarThumb(targetElement);
  }
}
