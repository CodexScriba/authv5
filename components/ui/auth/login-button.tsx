'use client'

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect", 
    asChild?: boolean;
}

export const LoginButton = ({
    children, 
    mode = "redirect", 
    asChild
}: LoginButtonProps) => {
    const onClick = () => {
        console.log("Login button clicked")
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    };

    return (
        <span 
            onClick={onClick} 
            onKeyDown={onKeyDown} 
            className="cursor-pointer"
            role="button" // Add role="button" for accessibility
        >
            {children}
        </span>
    )
}
