import axios from "axios";
import { useState } from "react";
import { createHabit } from "../../service/api";
import WeekDays from "../WeekDays/weekDays";
import { CreateHabitFormContainer, Day, DaysContainer } from "./style";

export default function CreateHabitForm() {
    const [showing, setShowing] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);

    function handleDayButton(index, savedInArray) {
        if (savedInArray) {
            const position = days.indexOf(index);
            days.splice(position, 1);
            setDays([...days])
        }

        if (!savedInArray) {
            setDays([...days, index]);
        }
    }

    function create() {
        const body = { name, days };

        if (name === '') {
            alert('O nome é obrigatório');
            return;
        }

        if (days.length === 0) {
            alert('é obrigatório adicionar pelo menos um dia da semana');
            return;
        }

        createHabit(body)
            .then(response => {
                setName('');
                setDays([]);
                setShowing(false);
            }).catch(err => {
                alert('Ocorreu um erro');
            });
    }

    return <CreateHabitFormContainer>
        <div>
            <h1>Meus hábitos</h1>
            <button onClick={() => setShowing(true)}>+</button>
        </div>

        {showing && <form onSubmit={ev => ev.preventDefault()}>
            <input value={name} type="text" placeholder="nome do hábito" onChange={(ev) => setName(ev.target.value)} />

            <WeekDays days={days} handleDayButton={handleDayButton} />

            <div>
                <button onClick={() => setShowing(false)}>Cancelar</button>
                <button onClick={create}>Salvar</button>
            </div>
        </form>}

    </CreateHabitFormContainer >
}