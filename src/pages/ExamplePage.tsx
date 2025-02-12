import React from 'react';
import {useExampleStore} from "../zustand/example/store";
import {Button} from "../components/Button";

const ExamplePage = () => {
    const {bears, addBear} = useExampleStore();
    return (
        <div>
            REMOTE bears : {bears} {' '}
            <Button onClick={addBear} />
        </div>
    );
};

export {ExamplePage};
