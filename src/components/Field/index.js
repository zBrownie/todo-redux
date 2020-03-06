import React, { useRef } from 'react';

import { Container } from './styles';

export default function Field({ newTask }) {

    const inputRef = useRef('')

    return (
        <Container>
            <input type="text" name="task" id="task" ref={inputRef} />
            <button onClick={() => newTask(inputRef.current.value)}>+</button>
        </Container>
    );
}
