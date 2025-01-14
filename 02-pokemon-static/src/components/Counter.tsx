import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
    initValue: number;
    children: JSX.Element;
}

export const Counter: Component<Props> = (props) => {

    const [count, setCount] = createSignal(props.initValue);
    
    return (
        <>
            {props.children}
            <h3 class="text-xl">Value: {count()}</h3>

            <button onclick={() => setCount((prev: number) => --prev)} class="bg-blue-500 p-2 mr-2 rounded">-1</button>
            <button onclick={() => setCount((prev: number) => ++prev)} class="bg-blue-500 p-2 mr-2 rounded">+1</button>
        </>
    )
};
