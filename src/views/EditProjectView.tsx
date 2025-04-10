import { getProjectById } from "@/api/ProjectApi"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

export default function EditProjectView() { 
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, error, isError } = useQuery ({
            queryKey: [ 'editProject', projectId],
            queryFn: () => getProjectById(projectId),
            retry: false
    })
    console.log(data)
    console.log(isLoading)
    console.log(error)
    console.log(isError)

    return (
        <>
        <div> Vista de editor de proyecto </div>
        </>
    )

}