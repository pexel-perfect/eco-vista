import { getLocationByName } from "@/lib/data";

export async function GET(request, { params: { name } }) {   

    const location = await getLocationByName(name); 
    return Response.json(location)
}