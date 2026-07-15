"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onBoard = async () => {
	const clerkUser = await currentUser();
	if (!clerkUser) {
		throw new Error("Unauthorized");
	}
	const userEmail = clerkUser.emailAddresses[0]?.emailAddress ?? null;
	return prisma.user.upsert({
		where: {
			email: userEmail,
		},
		update: {
			email: userEmail,
			firstName: clerkUser.firstName ?? null,
			lastName: clerkUser.lastName ?? null,
			imageUrl: clerkUser.imageUrl ?? null,
		},
		create: {
			email: userEmail,
			clerkId: clerkUser.id,
			firstName: clerkUser.firstName ?? null,
			lastName: clerkUser.lastName ?? null,
			imageUrl: clerkUser.imageUrl ?? null,
		},
	});
};
