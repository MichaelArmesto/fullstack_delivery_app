declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}

// global.d.ts
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
}
