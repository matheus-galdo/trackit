import {getHabits} from "../../service/api";
import { useEffect, useState } from "react";
import CreateHabitForm from "../../components/CreateHabitForm";
import WeekDays from "../../components/WeekDays/weekDays";
import { HabitCard, PageContainer } from "./styles";

export default function Habits() {
    const [habitsList, setHabitsList] = useState([]);

    useEffect(() => {
        const promise = getHabits();
        promise.then(response => setHabitsList(response.data));
        promise.catch(err => console.log('deu erro'));
    }, []);
    
    console.log(habitsList)

    return <PageContainer>
        <CreateHabitForm/>

        {habitsList.length === 0 && <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!    
        </p>}

        {habitsList.map(habit => <HabitCard>
            <h1>{habit.name}</h1>
            <WeekDays days={habit.days} handleDayButton={() => {}} />
        </HabitCard>)}

        

        
    </PageContainer>;
}