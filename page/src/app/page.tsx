import {css} from '@/styled-system/css';
import * as Card from '~/components/ui/card'
import React from "react";
import Link from "next/link";
import {IconButton} from "~/components/ui/icon-button";
import {FileText, Presentation} from "lucide-react";
import Image from 'next/image'

export const runtime = "edge";

export default async function Home() {
    let bucket = process.env.BUCKET

    if (!bucket) {
        throw new Error("BUCKET is not defined in the environment");
    }
    let list = (await bucket.list()).objects.map((o) => o.key.split("/")[0])
    let data = Array.from(new Set(list))

    let slideList: SlideGroup[] = [
        {
            "Group": "環境構築",
            "list": [
                {slide: "git-1", title: "Git・GitHubの設定"},
                {slide: "java-1", title: "JDKのインストール"},
                {slide: "java-2", title: "統合開発環境のインストール"},
            ]
        }
    ]

    slideList.forEach((group) => {
        group.list.map((slide) => {
            data = data.filter(n => n !== slide.slide);
        })
    })

    if (data.length !== 0) {
        slideList.push({
            "Group": "その他",
            "list": data.map((slide) => {
                return {slide: slide, title: slide}
            })
        })
    }

    return (
        <>
            <div className={css({fontSize: "xl", fontWeight: 'bold', paddingBottom: "30px"})}>Slide List</div>

            {slideList.map((slide) => (
                <>
                    <h2 className={css({fontSize: "xl", fontWeight: 'bold', paddingBottom: "10px"})}>{slide.Group}</h2>
                    <ul>
                        {slide.list
                            .map((slideName) => getSlideInfo(slideName.slide, slideName.title))
                            .map((slideInfo) => (
                                <li key={slideInfo.slideTitle}>
                                    <Card.Root width="xs" className={css({
                                        outline: "1px solid",
                                        outlineColor: "gray.light.a5",
                                        margin: "20px"
                                    })}>
                                        <Card.Header className={css({
                                            padding: "0px 0px 0px 0px",
                                            outline: "1px solid",
                                            outlineColor: "black"
                                        })}>
                                            <Image width={1920} height={1080} src={slideInfo.imageUrl} alt={slideInfo.slideTitle}/>
                                        </Card.Header>
                                        <hr style={{
                                            color: "gray",
                                            backgroundColor: "gray",
                                            height: 2
                                        }}/>
                                        <Card.Body className={css({padding: "5px 0px 0px 20px"})}>
                                            <div className={css({fontSize: "xl"})}>{slideInfo.slideTitle}</div>
                                        </Card.Body>

                                        <Card.Footer gap="3">
                                            <Link href={slideInfo.slideUrl} target="_blank"
                                                  rel="noopener noreferrer">
                                                <IconButton className={css({
                                                    backgroundColor: "white",
                                                    outline: "1px solid",
                                                    outlineColor: "black"
                                                })} aria-label="Show slidev">
                                                    <Presentation color="black"/>
                                                </IconButton>
                                            </Link>
                                            <Link href={slideInfo.pdfUrl} target="_blank"
                                                  rel="noopener noreferrer">
                                                <IconButton className={css({
                                                    backgroundColor: "white",
                                                    outline: "1px solid",
                                                    outlineColor: "black"
                                                })} aria-label="Download pdf">
                                                    <FileText color="black"/>
                                                </IconButton>
                                            </Link>
                                        </Card.Footer>
                                    </Card.Root>
                                </li>
                            ))}
                    </ul>
                </>
            ))
            }
        </>
    )
}

type SlideInfo = {
    slideTitle: string;
    slideUrl: string;
    pdfUrl: string;
    imageUrl: string;
}

type SlideGroup = {
    Group: string;
    list: slide[];
}

type slide = {
    slide: string;
    title: string;
}

function getSlideInfo(slide: string, title: string): SlideInfo {
    return {
        slideTitle: title,
        slideUrl: `https://slide.moripa.nikomaru.dev/${slide}/index.html`,
        pdfUrl: `https://slide.moripa.nikomaru.dev/${slide}/slidev-exported.pdf`,
        imageUrl: `https://slide.moripa.nikomaru.dev/${slide}/picture/1.png`,
    }
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BUCKET: R2Bucket;
        }
    }
}