export const cutUserInput = (inputText: string, limit: number) => {
    return inputText.length > limit ? inputText.slice(0, limit) + '...' : inputText;
}