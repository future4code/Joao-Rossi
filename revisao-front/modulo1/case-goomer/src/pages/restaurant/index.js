import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMenu } from '../../utils/api';
export const RestaurantDetailPage = () => {

    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const { response } = await getMenu(id);
            const details = {};
            for(let promo of response) {
                if(!details[promo.group]) {
                    details[promo.group] = [promo];
                } else {
                    details[promo.group].push(promo);
                }
            }
            setDetails(details);
        };
        fetch().catch(err => console.log(err));
    }, [id]);
    
    return (
        <div>
            {Object.keys(details).map((groupName,i) => (
            <Accordion key={i}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>{groupName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {details[groupName].map(promo => <div>{JSON.stringify(promo)}</div>)}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </div>
    )
}