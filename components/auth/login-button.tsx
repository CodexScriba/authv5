"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
}

export const LoginButton = ({
	children,
	mode = "redirect",
	asChild,
}: LoginButtonProps) => {
	const router = useRouter();

	const onClick = () => {
		router.push("/auth/login");
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			onClick();
		}
	};

	if (mode === "modal") {
		return <span>TODO: implement modal</span>;
	}

	return (
		<span
			onClick={onClick}
			onKeyDown={onKeyDown}
			className="cursor-pointer"
			role="button" // Add role="button" for accessibility
		>
			{children}
		</span>
	);
};
