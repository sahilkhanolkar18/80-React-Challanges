// vite.config.ts
import react from "file:///C:/Users/Sahil%20K/Desktop/Projects/80-React-Challanges/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///C:/Users/Sahil%20K/Desktop/Projects/80-React-Challanges/node_modules/vite/dist/node/index.js";
import svgr from "file:///C:/Users/Sahil%20K/Desktop/Projects/80-React-Challanges/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Sahil K\\Desktop\\Projects\\80-React-Challanges";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "./src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@ui": path.resolve(__vite_injected_original_dirname, "./src/components/ui"),
      "@api": path.resolve(__vite_injected_original_dirname, "./src/api"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@scripts": path.resolve(__vite_injected_original_dirname, "./src/scripts"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles")
    }
  },
  plugins: [react(), svgr({})],
  server: {
    port: 3e3
  },
  build: {
    rollupOptions: {
      external: [/^node:\w+/]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYWhpbCBLXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcODAtUmVhY3QtQ2hhbGxhbmdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU2FoaWwgS1xcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXDgwLVJlYWN0LUNoYWxsYW5nZXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1NhaGlsJTIwSy9EZXNrdG9wL1Byb2plY3RzLzgwLVJlYWN0LUNoYWxsYW5nZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHQnfic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG5cdFx0XHQnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKSxcclxuXHRcdFx0J0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuXHRcdFx0J0B1aSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzL3VpJyksXHJcblx0XHRcdCdAYXBpJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2FwaScpLFxyXG5cdFx0XHQnQGhvb2tzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXHJcblx0XHRcdCdAc2NyaXB0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zY3JpcHRzJyksXHJcblx0XHRcdCdAc3RvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3RvcmUnKSxcclxuXHRcdFx0J0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9wYWdlcycpLFxyXG5cdFx0XHQnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdHlsZXMnKSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRwbHVnaW5zOiBbcmVhY3QoKSwgc3Zncih7fSldLFxyXG5cdHNlcnZlcjoge1xyXG5cdFx0cG9ydDogMzAwMCxcclxuXHR9LFxyXG5cdGJ1aWxkOiB7XHJcblx0XHRyb2xsdXBPcHRpb25zOiB7XHJcblx0XHRcdGV4dGVybmFsOiBbL15ub2RlOlxcdysvXSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1YsT0FBTyxXQUFXO0FBQ2pYLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3BDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNqRCxlQUFlLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUN6RCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUNwRCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDM0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUNsRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzNCLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsV0FBVztBQUFBLElBQ3ZCO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
