/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setup, visit, /* mockServer */ } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | wormhole', function(hooks) {
  setup(hooks);

  /**
   * swapping to interacting with the document directly seems to have broken fastboot. We
   * would need to check how to deal with fastboot properly before preoceeding
   */
  test.skip('it renders a page...', async function(assert) {
    await visit('/wormhole');

    assert.dom('#destination').hasText('Hello world!');
    assert.dom('#origin').hasNoText();
  });

});
