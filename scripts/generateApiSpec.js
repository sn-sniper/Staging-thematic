import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { cwd } from "node:process";

const RAW_SPEC_PATH = join(cwd(), "API.json");
const OUTPUT_PATH = join(cwd(), "src", "api", "spec.js");

function buildSimplifiedSpec(rawSpec) {
  const resources = rawSpec?.docs?.resources ?? {};
  const simplified = {};

  for (const [resourceName, resource] of Object.entries(resources)) {
    const methods = resource.methods ?? [];
    const methodMap = {};

    for (const method of methods) {
      const apis = method.apis ?? [];
      if (!apis.length) continue;

      methodMap[method.name] = apis.map((api) => ({
        httpMethod: api.http_method,
        path: api.api_url,
        shortDescription: api.short_description ?? null,
        headers: (method.headers ?? []).map((header) => ({
          name: header.name,
          required: Boolean(header.options?.required),
        })),
        params: (method.params ?? []).map((param) => ({
          name: param.name,
          required: Boolean(param.required),
          expectedType: param.expected_type ?? null,
        })),
      }));
    }

    if (Object.keys(methodMap).length) {
      simplified[resourceName] = methodMap;
    }
  }

  return simplified;
}

function generate() {
  const rawSpec = JSON.parse(readFileSync(RAW_SPEC_PATH, "utf8"));
  const simplified = buildSimplifiedSpec(rawSpec);
  const content = `export const apiSpec = ${JSON.stringify(
    simplified,
    null,
    2
  )};\n`;

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, content, "utf8");
}

generate();
