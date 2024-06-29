import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import remarkGfm from 'remark-gfm';
import {ReactElement, ReactNode} from "react";

interface ImgProps {
    src?: string;  // src is now optional
    alt?: string;
    children?: ReactNode;
}

const components = {
    img: ({src, alt, children}: ImgProps): ReactElement => <Image src={src!!} alt={alt!!} width={500} height={500}>{children}</Image>,
};

export default async function RemoteMdxPage({params}: { params: { id: string } }) {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    const id = params.id
    const res = await fetch("https://slide.moripa.nikomaru.dev/" + id + "/docs.md")
    const markdown = await res.text()


    const urlTransform = (url: string) => {
        if (!url.startsWith("./static")) {
            return url
        }
        return `https://slide.moripa.nikomaru.dev/${id}/${url.replace("./","")}`
    }

    return <ReactMarkdown urlTransform={urlTransform}
                          remarkPlugins={[remarkGfm]}
                          components={components}>{markdown}</ReactMarkdown>
}