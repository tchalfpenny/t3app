import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPLoDuA7Uki1dP5nRmTEOfp2beaBJqDNh47UvA",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPxsB1MJPsFS2Z6u8Ic0NoBiDR9rbypEmHAtzX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPDgoQkoFu80MPSsHW7FEbCA3fY4rloVvdLwiX",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPuooyXNXYCK3aqd9Ve7i5I2w4YXDJ1jUHyMfQ",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbP6YoToSaDnso10RGhtW6bzIVeUaFPdK7wiyCr",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPPMbCnpfc0b7zyokMgvBT629dpxXufZenCQJW",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPIBwZEqLH0DKfmO3eUxy1ujP4YbSWikNRElrV",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPzm5sBAZGmW5ECXIvR7TKbLP0eo16JDcyuZFB",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbP6kdfYXDnso10RGhtW6bzIVeUaFPdK7wiyCrL",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPSRXbReiBD2I4FLAPUThRjNb7flc51pgSqGdz",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPnGJYK6WwxIVPtdEflJnCXsMiFceOZj19KaSr",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPoBIRzEFn9yqcsnh3Yzm8JTHdZ5uRtWUCFKew",
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
