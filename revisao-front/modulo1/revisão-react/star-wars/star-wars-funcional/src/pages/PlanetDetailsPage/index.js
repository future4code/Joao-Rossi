import react , {useState} from "react";


export default function PlanetDetailsPage(props) {
    const {planetUrl, setPlanetUrl} = props
    const [planetDetails, setPlanetDetails] = useState({state: 'Carregando'})
    

    return(
        <div>planetDetails.state</div>
    )
}
