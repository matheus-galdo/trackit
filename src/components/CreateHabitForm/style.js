import styled from 'styled-components';

const CreateHabitFormContainer = styled.div`

`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${(props) => props.isSelected ? '#CFCFCF' : '#FFFFFF'};
    color: ${(props) => props.isSelected ? '#FFFFFF' : '#CFCFCF'};
`;

const DaysContainer = styled.div`
    display: flex;
`;



export {
    CreateHabitFormContainer,
    Day,
    DaysContainer
}