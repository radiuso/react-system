import React from 'react';

export interface ButtonProps {
    isDisabled?: boolean
    type?: 'button' | 'submit'
}

export const Button: React.FC<ButtonProps> = ({ isDisabled, type = 'button', children, ...rest }) => {
    return <button disabled={isDisabled} type={type} {...rest}>{children}</button>
}
