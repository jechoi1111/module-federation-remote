import React from 'react';
import {Button} from "./components/Button";
import {useExampleStore} from "./zustand/example/store";
import {ExamplePage} from "./pages/ExamplePage";

export const App = () => {
    const {bears, addBear} = useExampleStore();
    return <div>REMOTE
        <div>
            Bears: {bears} {' '}
            <Button onClick={addBear} />
            <ExamplePage />
        </div>
    </div>
}