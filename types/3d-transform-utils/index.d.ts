declare module "3d-transform-utils" {
  export interface ICube {
    /**
     * 三维坐标
     */
    position: {
      x: number;
      y: number;
      z: number;
    };
    /**
     * 欧拉角
     */
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    /**
     * 缩放比例
     */
    scale: {
      x: number;
      y: number;
      z: number;
    };
  }

  /**
   * 中心点坐标
   */
  export interface ICenter {
    x: number;
    y: number;
    z: number;
  }

  /**
   * 
   * @param cube 立方体
   * @param center 中心点
   * @param radius 半径序列
   */
  export default function cubeInAreas(
    cube: ICube,
    center?: ICenter,
    radius?: number[]
  ): { [key: string]: number };
}
