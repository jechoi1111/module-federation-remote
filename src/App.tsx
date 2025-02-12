import React from 'react';
import {Button} from "./components/Button";
import {useExampleStore} from "./zustand/example/store";

export const App = () => {
    const {bears, addBear} = useExampleStore();
    return <div>REMOTE
        <div>
            Bears: {bears} {' '}
            <Button onClick={addBear} />
        </div>
    </div>
}