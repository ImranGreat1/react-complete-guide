function ErrorChild() {
    const random = Math.random();

    if (random > 0.7) {
        throw new Error('Errorrrr.....');
    }

    return <div>Hello, I am the Error Component</div>;
}

export default ErrorChild;
