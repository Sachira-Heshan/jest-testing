import { render, fireEvent } from '@testing-library/react';
import ButtonClick from './ButtonClick';

test("Test the state changes correctly working or not", () => {
    const { getByText } = render(<ButtonClick />);
    const btn = getByText("Click Me!");
    fireEvent.click(btn);
    expect(getByText("You Clicked!")).toBeInTheDocument();
});