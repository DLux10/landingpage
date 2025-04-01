import { useParams } from "react-router-dom"

export default function Work () {

    const { works } = useParams();

    return (

        <p>Work: { works }</p>

    )

}