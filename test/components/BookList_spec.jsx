import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import BookList from '../../src/components/BookList';
import {expect} from 'chai';

describe('BookList', () => {

  it('renders a list', () => {
    const component = renderIntoDocument(
      <BookList books={["Catch 22", "Lord of the Rings"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Catch 22');
    expect(buttons[1].textContent).to.equal('Lord of the Rings');
  });
});
