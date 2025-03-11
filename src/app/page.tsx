import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above.</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {[...images, ...images, ...images, ...images].map((image, index) => (
            <div key={image.id + '-' + index} className="w-48">
              <img src={image.url} alt="image" />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
