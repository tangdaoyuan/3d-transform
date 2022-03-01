/* eslint-disable no-unused-vars */
import { transformMatrix4FromEuler, multiplyMatrix4, applyMatrix4 } from './matrix.js';
/**
 * 辅助计算2d/3d统计数据
 */
/**
 *
 * @param {object} cube 立方体
 * @param {object} cube.position 坐标
 * @param {object} cube.rotation 欧拉角
 * @param {object} cube.scale 缩放
 * @param {object} center
 * @param {Array} radiusArr
 * @returns
 */
function cubeInAreas(cube, center = { x: 0, y: 0, z: 0 }, radiusArr = [50, 130, 160]) {
  if (!radiusArr.length) {
    return {};
  }
  const { x, y } = center;

  const coordinates = getCubeVerticesCoordinate(cube)

  // TODO
  // 对radius排序后优化 减少平方次数
  const ret = radiusArr.reduce((acc, cur) => {
    acc[cur] = 0;

    const isInArea = coordinates.some(c => {
      return Math.pow(c.x - x, 2) + Math.pow(c.y - y, 2) <= Math.pow(cur, 2);
    });

    if (isInArea) {
      acc[cur]++;
    }
    return acc;
  }, {})
  return ret;
}

/**
 * 获得cube顶点的世界坐标
 *
 * @param {Object} cube
 * @returns
 */
function getCubeVerticesCoordinate(cube) {
  const { position, rotation, scale } = cube;
  // 旋转矩阵
  const rotationMatrix = transformMatrix4FromEuler(rotation);

  // 缩放矩阵
  const scaleMatrix = [
    scale.x, 0, 0, 0,
    0, scale.y, 0, 0,
    0, 0, scale.z, 0,
    0, 0, 0, 1
  ];

  // 平移矩阵
  const translateMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    position.x, position.y, position.z, 1
  ];

  const tempMatrix = multiplyMatrix4(rotationMatrix, scaleMatrix);
  const worldMatrix = multiplyMatrix4(translateMatrix, tempMatrix);

  // 对应于meg-label中cube的local坐标
  const vertices = [
    [0.5, 0.5, 0.5],
    [-0.5, 0.5, 0.5],
    [0.5, -0.5, 0.5],
    [0.5, 0.5, -0.5],
    [-0.5, -0.5, 0.5],
    [0.5, -0.5, -0.5],
    [-0.5, 0.5, -0.5],
    [-0.5, -0.5, -0.5],
  ]
  return vertices.map(v => {
    return applyMatrix4(v, worldMatrix);
  })
}

export {
  cubeInAreas
}
