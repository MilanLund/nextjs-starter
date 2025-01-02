export function getEnvironmentRequiredValue(variableName: string): string {
    // get value from environment variables first
    const value = process.env[variableName];

    if (!value) {
        throw new Error(`Missing environment variable '${variableName}'`);
    }

    return value;
}

export function getEnvironmentOptionalValue(variableName: string): string | undefined {
    // get value from environment variables first
    const value = process.env[variableName];

    if (!value) {
        return undefined;
    }

    return value;
}
