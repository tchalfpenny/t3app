import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id)
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>
           
            <div className="flex w-48 flex-shrink-0 flex-col border-l">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    );
}