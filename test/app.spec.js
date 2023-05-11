describe("Triangle periferia calc", () => {
    it("30 -> 120", () => {
        let act = calcPeri(30);
        expect(act).toBe(120);
    });
    it("10 -> 40", () => {
        let act = calcPeri(10);
        expect(act).toBe(40);
    });
    it("0 -> 0", () => {
        let act = calcPeri(0);
        expect(act).toBe(0);
    });
});
describe("Triangle area calc", () => {
    it("30, 35 -> 516.22", () => {
        let act = calcArea(30, 35);
        expect(act).toBeCloseTo(516.22, 0.001)
    });
    it("130, 135 -> 11950.1", () => {
        let act = calcArea(130, 135);
        expect(act).toBeCloseTo(11950.1, 0.001)
    });
    it("1, 135 -> 0.71", () => {
        let act = calcArea(1, 135);
        expect(act).toBeCloseTo(0.71, 0.001)
    });
});