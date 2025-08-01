
const URL = "http://localhost:4000/plants";

export async function PlantLoader ({params}) {
    try{
    const response = await fetch(`${URL}/${params.id}`)
    if(!response.ok) {
        throw new Error (`ERROR ${response.status}`)
    }
    return await response.json()
    }
    catch(error){
        console.log(error)

    }
}