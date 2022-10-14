import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

// using composition pattern
// read the docs: https://reactjs.org/docs/composition-vs-inheritance.html
export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-1 ring-cyan-300'>
            {children}
        </div>
    )
};
// change display name in documentation
TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}
// change display name in documentation
TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent outline-none flex-1  text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />
    )
};
// change display name in documentation
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}