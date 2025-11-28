import styled from 'styled-components';

export const ListContainer = styled.ul`
    padding: 0;
    cursor: pointer;
    list-style: none; /* remove default bullets */
    display: flex;
    flex-direction: column;
    gap: 8px; /* space between todo items */
`;

export const Row = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    background-color: ${(props) =>
        props.isCompleted ? '#0CCE6B' : '#DCED31'}; /* red for completed, green for pending */
    transition: background-color 0.3s ease;
`;

export const Text = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
    color: ${(props) => (props.isCompleted ? 'white' : 'black')};
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

export const DeleteIcon = styled.span`
    color: red;
    cursor: pointer;
`;