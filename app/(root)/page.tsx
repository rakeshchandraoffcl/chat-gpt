import { ModeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
	await auth.protect();
	return (
		<div>
			<h1>Hello World</h1>
			<ModeToggle />
			<UserButton />
		</div>
	);
}
