import {create} from 'zustand'
import {devtools, persist} from "zustand/middleware";

export type ExampleState = {
    bears: number;
    fishes: number;
    addFish: () => void;
    addBear: () => void;
    eatFish: () => void;
}

export const useExampleStore = create<ExampleState>()(
    devtools(
        (set) => ({
            bears: 0,
            fishes: 0,
            addFish: () => set((state) => ({fishes: state.fishes + 1})),
            addBear: () => set((state) => ({bears: state.bears + 1})),
            eatFish: () => set((state) => ({fishes: state.fishes - 1}))
        }),
        {name: 'example-store'}
    )
)