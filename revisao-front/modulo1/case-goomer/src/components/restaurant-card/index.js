import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
`;

export const RestaurantCard = ({ restaurant, day, time }) => {
    const history = useHistory();

    const isOpen = () => {
        for(let hour of restaurant.hours) {
            if(hour.days.includes(day)) {
                if(time >= hour.from && time <= hour.to) {
                    return true;
                }
            }
        }
        return false;

    }
    return (
        <Container onClick={() => history.push(`/details/${restaurant.id}`)}>
            {restaurant.name}
            {restaurant.address}
            <br/>
            {restaurant.hours ? isOpen() ? 'Aberto' : 'Fechado' : 'Unkown'}
        </Container>
    )
}
