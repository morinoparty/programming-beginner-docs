import {Hono} from "hono";

const slideRouter = new Hono()

slideRouter.get('/hello', (c) => {
    return c.json({
        message: 'Hello Slide!',
    })
})

slideRouter.get('/info/:id', (c) => {
    return c.json({
        message: 'Hello Slide!',
    })
})

slideRouter.get("/list", async (c) => {
    let bucket = process.env.BUCKET

    if (!bucket) {
        throw new Error("BUCKET is not defined in the environment");
    }
    let list =(await bucket.list()).objects.map((o) => o.key.split("/")[0])
    let set = Array.from(new Set(list))
    return c.json(set)
})

export default slideRouter

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BUCKET: R2Bucket;
        }
    }
}