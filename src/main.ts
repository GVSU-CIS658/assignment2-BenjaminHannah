import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  // TODO: implement this function
}

function setupSyrupListeners(): void {
  // TODO: implement this function
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const inputs = document.querySelectorAll<HTMLInputElement>('input[name="cream"]');

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        console.log(`selected ${input.value}`);
        applyCream(input);
      }
    });
  });
}

setupCreamListeners();

function setupTemperatureListeners(): void {
  const inputs = document.querySelectorAll<HTMLInputElement>('input[name="temperature"]');

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        console.log(`selected ${input.value}`);
        applyTemperature(input);
      }
    });
  });
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  const inputs = document.querySelectorAll<HTMLInputElement>('input[name="base"]');

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        console.log(`selected ${input.value}`);
        applyBase(input);
      }
    });
  });
}

setupBaseListeners();
