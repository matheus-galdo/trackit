import { Day, DaysContainer } from "../CreateHabitForm/style";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function WeekDays(props) {
    const { days, handleDayButton } = props;

    return <DaysContainer>
        {weekDays.map((day, index) => {
            const isSelected = days.includes(index);

            return <Day
                isSelected={isSelected}
                onClick={() => handleDayButton(index, isSelected)}
                key={index}
            >
                {day}
            </Day>
        })}
    </DaysContainer>;
}

