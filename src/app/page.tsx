import Link from "next/link";

const mockUrls = [
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPlNNKU3VXJkVw7fvg6bYzuxOdeWhy98aSiU4R",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPNGWuV6QamkPKofnbAH1MuUIOLg7hwGeY6tj2",
  "https://3mxg08wsuw.ufs.sh/f/GZaRrrX9CTbPtPOzXfKeiD1jVfNAstUHCKg9JvWY2B5dT6ue",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">{
         [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
