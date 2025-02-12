import React from 'react';
import {useExampleStore} from "../zustand/example/store";

const ExamplePage = () => {
    const {bears} = useExampleStore();
    return (
        <div>
            Example Page!!!
            <div>bears : {bears}</div>
        </div>
    );
};

export {ExamplePage};
