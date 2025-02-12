
export type AddProps = {
    a: number;
    b: number;
}
export const Add = ({a, b}: AddProps) => {
    return `Result: ${a+b}`;
}
