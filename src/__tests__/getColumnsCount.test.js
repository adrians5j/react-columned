import getColumnsCount from "../utils/getColumnsCount";

describe("getColumnsCount test", () => {
    test("if integer passed, that means columns count is hard-coded, and we just return it", () => {
        expect(getColumnsCount(4)).toBe(4);
    });

    test("if object passed, that means we are dealing with separate columns count per parent width", () => {
        const columns = { "320": 1, "480": 2, "800": 3, "1366": 4 };
        expect(getColumnsCount(columns, 0)).toBe(1);
        expect(getColumnsCount(columns, 100)).toBe(1);
        expect(getColumnsCount(columns, 319)).toBe(1);
        expect(getColumnsCount(columns, 320)).toBe(1);
        expect(getColumnsCount(columns, 321)).toBe(2);
        expect(getColumnsCount(columns, 350)).toBe(2);
        expect(getColumnsCount(columns, 460)).toBe(2);
        expect(getColumnsCount(columns, 479)).toBe(2);
        expect(getColumnsCount(columns, 480)).toBe(2);
        expect(getColumnsCount(columns, 481)).toBe(3);
        expect(getColumnsCount(columns, 700)).toBe(3);
        expect(getColumnsCount(columns, 800)).toBe(3);
        expect(getColumnsCount(columns, 801)).toBe(4);
        expect(getColumnsCount(columns, 1000)).toBe(4);
        expect(getColumnsCount(columns, 1366)).toBe(4);
        expect(getColumnsCount(columns, 1367)).toBe(4);
        expect(getColumnsCount(columns, 1400)).toBe(4);
        expect(getColumnsCount(columns, 2000)).toBe(4);
        expect(getColumnsCount(columns, 10000)).toBe(4);
    });
});
