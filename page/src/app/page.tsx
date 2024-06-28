import {css} from '@/styled-system/css';
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
    let data: string[]| undefined = await fetch('https://page.moripa.nikomaru.dev/api/slide/list')
        .then((res) =>
            res.json()
        )

    console.log(data)
    if (data === undefined) {
        data = []
    }
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