"use client";
import { Card, CardContent, CardFooter, CardHeader } from "../card";
import type React from "react";
import { Header } from "./header";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}
			</CardContent>
			<CardFooter>
				<Social/>

			</CardFooter>
			{showSocial && ()}
		</Card>
	);
};
