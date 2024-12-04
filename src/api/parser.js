import { parse as esprimaParse } from "esprima";

const SCRIPT_TAG_OPEN = "<script>";
const SCRIPT_TAG_CLOSE = "</script>";
const HEAD_TAG_OPEN = "<head>";
export const extractScriptBody = (payload) => {
  const firstScriptTagOpenIndex = payload.indexOf(SCRIPT_TAG_OPEN);
  const firstScriptTagCloseIndex = payload.indexOf(SCRIPT_TAG_CLOSE);
  if (firstScriptTagOpenIndex === -1 || firstScriptTagCloseIndex === -1) {
    return null;
  }

  const headTagOpenIndex = payload.indexOf(HEAD_TAG_OPEN);
  if (headTagOpenIndex !== -1 && headTagOpenIndex < firstScriptTagCloseIndex) {
    return null;
  }

  return payload
    .slice(
      firstScriptTagOpenIndex + SCRIPT_TAG_OPEN.length,
      firstScriptTagCloseIndex,
    )
    .trim();
};

export const sUnknownValue = Symbol("Error Parsing Value");

const parseAstAsValue = (init) => {
  switch (init.type) {
    case "Literal":
      return init.value;

    case "ArrayExpression":
      return init.elements.map((element) => parseAstAsValue(element));

    case "ObjectExpression":
      return init.properties.reduce((acc, prop) => {
        acc[prop.key.name] = parseAstAsValue(prop.value);
        return acc;
      }, {});

    case "NewExpression":
      if (init.callee.name === "Array") {
        return init.arguments.map((argument) => argument.value);
      }

    case "UnaryExpression":
      if (init.operator === "-" && init.argument.type === "Literal") {
        return -init.argument.value;
      }
  }

  return sUnknownValue;
};

const parseVar = (declaration) => {
  return [declaration.id.name, parseAstAsValue(declaration.init)];
};

export const collectVariables = (script) => {
  const ast = esprimaParse(script);

  const declarations = ast.body
    .filter((node) => node.type === "VariableDeclaration")
    .flatMap((node) => node.declarations)
    .map((declaration) => parseVar(declaration));

  return Object.fromEntries(declarations);
};
