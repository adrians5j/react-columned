// @flow

export default function getColumnsCount(
    params: number | { [string]: number },
    width: number
): number {
    if (typeof params === "number") {
        return parseInt(params);
    }

    const sortedWidths = Object.keys(params).sort(function(a, b) {
        return parseInt(a) - parseInt(b);
    });

    for (let i = 0; i < sortedWidths.length; i++) {
        const current = sortedWidths[i];
        if (width <= parseInt(current)) {
            return params[current];
        }
    }

    // Return last.
    return params[sortedWidths[sortedWidths.length - 1]];
}
