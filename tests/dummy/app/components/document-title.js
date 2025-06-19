/* eslint-disable ember/no-component-lifecycle-hooks, ember/require-super-in-lifecycle-hooks, prettier/prettier */
import { computed } from '@ember/object';
import { A } from '@ember/array';
import Wormhole from 'ember-wormhole/components/ember-wormhole';

var titles = A([]);
export default Wormhole.extend({
  init: function () {
    this._super();

    if (titles.length === 0) {
      document.title = '';
    }
    titles.push(this);
  },

  destinationElement: computed(function () {
    let head = document.head;
    let node = head.firstChild;
    while (node !== null) {
      if (node.nodeType === 1 && node.tagName === 'TITLE') {
        return node;
      }
      node = node.nextSibling;
    }
    node = document.createElement('title');
    head.appendChild(node);
    return node;
  }),

  willDestroyElement: function () {
    titles.removeObject(this);
    this._super.apply(this, arguments);
  }
});
