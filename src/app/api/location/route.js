import { getLocations } from "@/lib/data"

export async function GET() {
    const address = await getLocations()
    return Response.json(address)
}