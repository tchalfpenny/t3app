import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPlNNKU3VXJkVw7fvg6bYzuxOdeWhy98aSiU4R",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPNGWuV6QamkPKofnbAH1MuUIOLg7hwGeY6tj2",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPtPOzXfKeiD1jVfNAstUHCKg9JvWY2B5dT6ue",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
          ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
