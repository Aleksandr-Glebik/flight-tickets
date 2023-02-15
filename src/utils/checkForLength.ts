export const checkForLength = (str: string) => {
    if (str.trim().length > 3) {
        return true
    } else {
        return false
    }
}