import { render, screen, fireEvent } from '@testing-library/react';
import ReorderText from './index';
import '@testing-library/jest-dom';

const headingName = 'Reorder Text';
const textLabel = 'Type any text and reorder it to see how it looks.';
const buttonReorderName = 'Reorder';
const buttonClearName = 'Clear';
const givenText = 'TODAY';
const reverseText = 'YADOT';
const emptyValue = '';

describe('ReorderText', () => {
  beforeEach(() => {
    render(<ReorderText />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: headingName,
    });

    expect(heading).toBeInTheDocument();
  });

  it('has an empty input, button disabled and no reordered text', () => {
    expect(screen.getByLabelText(textLabel)).toHaveValue(emptyValue);
    expect(screen.getByRole('button', { name: buttonReorderName })).toBeDisabled();
    expect(screen.getByRole('button', { name: buttonClearName })).toBeDisabled();
  });

  it('receives a text TODAY and print YADOT on the screen', async () => {
    fireEvent.change(screen.getByLabelText(textLabel), {
      target: { value: givenText },
    });

    fireEvent.click(screen.getByRole('button', { name: buttonReorderName }));

    expect(await screen.findByText(reverseText)).toBeInTheDocument();
  });

  it('receives a text TODAY, print YADOT on the screen, and clear', async () => {
    fireEvent.change(screen.getByLabelText(textLabel), {
      target: { value: givenText },
    });

    fireEvent.click(screen.getByRole('button', { name: buttonReorderName }));
    fireEvent.click(screen.getByRole('button', { name: buttonClearName }));

    expect(screen.getByLabelText(textLabel)).toHaveValue(emptyValue);
    expect(screen.getByRole('button', { name: buttonReorderName })).toBeDisabled();
    expect(screen.getByRole('button', { name: buttonClearName })).toBeDisabled();
    expect(screen.queryByText(reverseText)).not.toBeInTheDocument();
  });
});
