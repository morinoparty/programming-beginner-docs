import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import slideRouter from "@/src/app/api/[[...route]]/slideRoute";

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})

app.route("/slide",slideRouter)

export const GET = handle(app)