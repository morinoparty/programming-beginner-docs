// import { MDXRemote } from 'next-mdx-remote/rsc'
// import {useRouter} from "next/router";
//
// export default async function RemoteMdxPage() {
//     // MDX text - can be from a local file, database, CMS, fetch, anywhere...
//     const router = useRouter()
//     const res = await fetch("https://slide.moripa.nikomaru.dev/" + router.query.id + "/docs.md")
//     const markdown = await res.text()
//     return <MDXRemote source={markdown} />
// }