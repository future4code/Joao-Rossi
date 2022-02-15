import { useEffect, useState } from "react"
import { getRestaurants } from "../../utils/api";
import { 
    PageContainer,
    ListContainer,
} from './styles';
import {
    RestaurantCard,
    SearchBox
} from '../../components';
import { useHistory } from 'react-router-dom';
import { useDate } from '../../hooks/date';

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const history = useHistory();
    const {
        day, time
    } = useDate();

    useEffect(() => {
        const fetch = async () => {
            const { response, error } = await getRestaurants();
            if(!error) {
                setRestaurants(response);
            }
            else {
                alert(error);
            }
        }
        fetch();
    }, []);

    const onClickRestaurant = (id) => {
        history.push(id);
    }
    
    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const hasSearchTerm = (restaurant) => {
        if(searchTerm === "") return true
        return restaurant.name.includes(searchTerm);
    }

    return (
        <PageContainer>
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm}/>
            <ListContainer>
                {restaurants.filter(hasSearchTerm).map(restaurant => (
                    <RestaurantCard 
                        restaurant={restaurant} 
                        onClick={() => onClickRestaurant(restaurant.id)}
                        day={day}
                        time={time}
                    />
                ))}
            </ListContainer>
        </PageContainer>
    )
}