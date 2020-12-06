declare namespace MigrationProjectModuleScssNamespace {
  export interface IMigrationProjectModuleScss {
    container: string;
  }
}

declare const MigrationProjectModuleScssModule: MigrationProjectModuleScssNamespace.IMigrationProjectModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MigrationProjectModuleScssNamespace.IMigrationProjectModuleScss;
};

export = MigrationProjectModuleScssModule;
