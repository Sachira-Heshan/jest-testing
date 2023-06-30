import { render } from '@testing-library/react';
import Customer from './Customer';

test("Testing the customer component render with correct props", () => {
    const props = { name: "James", email: "james@gmail.com", age: 25 };
    const { getByText } = render(<Customer {...props} />);
    expect(getByText(`Name: ${props.name}`)).toBeInTheDocument();
    expect(getByText(`Email: ${props.email}`)).toBeInTheDocument();
    expect(getByText(`Age: ${props.age}`)).toBeInTheDocument();
});