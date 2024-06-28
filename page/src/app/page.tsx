import {css} from '@/styled-system/css';
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
    let bucket = process.env.BUCKET

    if (!bucket) {
        throw new Error("BUCKET is not defined in the environment");
    }
    let list =(await bucket.list()).objects.map((o) => o.key.split("/")[0])
    let data = Array.from(new Set(list))


    return (
        <>
            <div className={css({fontSize: "2xl", fontWeight: 'bold'})}>Hello 🐼!</div>

            <div className={css({fontSize: "xl", fontWeight: 'bold'})}>Slide List</div>
            <ul>
                {data.map((slide) => (
                    <li key={slide}>
                        <Link href={`https://slide.moripa.nikomaru.dev/${slide}/index.html`} rel="noopener noreferrer"
                              target="_blank">
                            {slide}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BUCKET: R2Bucket;
        }
    }
}