const { build } = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  plugins: [pnpPlugin()],
  outfile: "./dist/bot.js",
});
