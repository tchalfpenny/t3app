import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPxsB1MJPsFS2Z6u8Ic0NoBiDR9rbypEmHAtzX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPDgoQkoFu80MPSsHW7FEbCA3fY4rloVvdLwiX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPuooyXNXYCK3aqd9Ve7i5I2w4YXDJ1jUHyMfQ",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPxsB1MJPsFS2Z6u8Ic0NoBiDR9rbypEmHAtzX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPDgoQkoFu80MPSsHW7FEbCA3fY4rloVvdLwiX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPuooyXNXYCK3aqd9Ve7i5I2w4YXDJ1jUHyMfQ",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPxsB1MJPsFS2Z6u8Ic0NoBiDR9rbypEmHAtzX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPDgoQkoFu80MPSsHW7FEbCA3fY4rloVvdLwiX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPuooyXNXYCK3aqd9Ve7i5I2w4YXDJ1jUHyMfQ",
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
        {[...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
