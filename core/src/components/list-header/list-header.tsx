import { Component, Prop } from '@stencil/core';
import { Color, Mode } from '../../interface';
import { createThemedClasses } from '../../utils/theme';

@Component({
  tag: 'ion-list-header',
  styleUrls: {
    ios: 'list-header.ios.scss',
    md: 'list-header.md.scss'
  }
})
export class ListHeader {
  /**
   * The color to use for the background.
   */
  @Prop() color?: Color;

  /**
   * The mode determines which platform styles to use.
   * Possible values are: `"ios"` or `"md"`.
   */
  @Prop() mode!: Mode;

  hostData() {
    return {
      class: createThemedClasses(this.mode, this.color, 'list-header')
    };
  }
}
