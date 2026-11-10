// Uso (na raiz do projeto): node scripts/gerar-icones.js assets/icons icons.css
// Gera icons.css: cada SVG vira data URI de máscara (funciona em file://).
const fs = require("fs"), path = require("path");
const dir = process.argv[2], out = process.argv[3];
let css = `/* ==========================================================================
   icons.css — ícones do kit do Figma embutidos como data URI.
   Gerado a partir de assets/icons/*.svg (kit de ícones do Derick, estilo preenchido). Data URI (em vez de url("arquivo.svg"))
   porque mask-image com arquivo externo é bloqueado ao abrir o site do disco
   (file://). A cor vem do tema via currentColor; a opacidade do duotone fica
   na máscara.
   ========================================================================== */
`;
for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".svg")).sort()) {
  let svg = fs.readFileSync(path.join(dir, f), "utf8")
    .replace(/<defs>[\s\S]*?<\/defs>/g, "")
    .replace(/ (id|clip-path)="[^"]*"/g, "")
    .replace(/currentColor/g, "#000")
    .replace(/<g>\s*/g, "<g>").replace(/\s*\n\s*/g, "")
  const uri = svg.replace(/"/g, "'").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/#/g, "%23");
  css += `.icon-${f.slice(0, -4)} { mask-image: url("data:image/svg+xml,${uri}"); }\n`;
}
fs.writeFileSync(out, css);
