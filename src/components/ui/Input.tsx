import { VariantProps, cva } from 'class-variance-authority';
import { FC, InputHTMLAttributes } from 'react';
import { cn } from '../utils/utils';

const inputVariants = cva(['w-full', 'outline-0'], {
    variants: {
        variant: {
            searchBar: ['bg-transparent', 'placeholder:text-info'],
        },
        sizes: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-sm', 'py-2', 'px-4'],
        },
    },
    defaultVariants: {
        variant: 'searchBar',
        sizes: 'small',
    },
});

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}

const Input: FC<InputProps> = ({
    type,
    variant,
    sizes,
    className,
    placeholder,
}) => {
    return (
        <input
            type={type || 'text'}
            placeholder={placeholder}
            className={cn(inputVariants({ variant, sizes, className }))}
        />
    );
};

export default Input;
