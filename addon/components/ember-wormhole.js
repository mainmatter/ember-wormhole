/* eslint-disable ember/classic-decorator-no-classic-methods, ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';

import { findElementById, getDOM } from '../utils/dom';

export default class EmberWormwholeComponent extends Component {
  get _destination() {
    let renderInPlace = this.get('renderInPlace');
    if (renderInPlace) {
      return this.element;
    }

    let destinationElement = this.get('destinationElement');
    if (destinationElement) {
      return destinationElement;
    }
    let destinationElementId =
      this.get('destinationElementId') || this.get('to');
    if (destinationElementId) {
      let result = findElementById(this._dom, destinationElementId);

      // fall through to the error handlers below if we didn't find the element
      if (result) {
        return result;
      }
    }

    if (destinationElementId) {
      throw new Error(
        `ember-wormhole failed to render into '#${destinationElementId}' because the element is not in the DOM`,
      );
    }
    throw new Error(
      'ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.',
    );
  }

  constructor() {
    super(...arguments);

    this._dom = getDOM(this);
  }
}
