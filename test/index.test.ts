import { cubeInAreas } from "3d-transform-utils";


const cube = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
};

const center = {x: 0, y: 0, z: 0}


describe("runs", () => {
  test('with cube and center', () => {
    const inArea = cubeInAreas(cube, center);
    expect(inArea).toMatchInlineSnapshot(`
  Object {
    "130": 1,
    "160": 1,
    "50": 1,
  }
  `)
  })

  test("with empty radius list", () => {
    const inArea = cubeInAreas(cube, center, []);
    expect(inArea).toMatchInlineSnapshot(`Object {}`);
  })
})
