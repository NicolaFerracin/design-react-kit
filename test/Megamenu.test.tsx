import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  Megamenu,
  MegamenuItem,
  MegamenuFooter,
  MegamenuHighlightColumn
} from '../src';

describe('Megamenu component', () => {
  it('should work as container for children elements', () => {
    render(<Megamenu>Content</Megamenu>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(
      <Megamenu className='myclass'>Content</Megamenu>
    );

    expect(container.firstChild).toHaveClass('myclass');
  });
});

describe('MegamenuItem component', () => {
  it('should work as container for children elements', () => {
    render(<MegamenuItem itemName='Label'>Content</MegamenuItem>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(
      <MegamenuItem itemName='Label' className='myclass'>
        Content
      </MegamenuItem>
    );

    expect(container.firstChild).toHaveClass('myclass');
  });
});

describe('MegamenuFooter component', () => {
  it('should work as container for children elements', () => {
    render(<MegamenuFooter>Content</MegamenuFooter>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should append the passed className to the container', () => {
    const { container } = render(
      <MegamenuFooter className='myclass'>Content</MegamenuFooter>
    );

    expect(container.firstChild).toHaveClass('myclass');
  });
});

describe('MegamenuHighlightColumn component', () => {
  it('should work as container for children elements', () => {
    render(<MegamenuHighlightColumn>Content</MegamenuHighlightColumn>);

    expect(screen.getByText('Content')).not.toBe(null);
  });

  it('should wrapping content inside additional element when add description prop', () => {
    const { container } = render(
      <MegamenuHighlightColumn description>Content</MegamenuHighlightColumn>
    );

    expect(container.getElementsByClassName('description-content').length).toBe(
      1
    );
  });
});
