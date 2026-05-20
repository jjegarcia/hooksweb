export function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() {
      count += 1;
      return count;
    },
    value() {
      return count;
    }
  };
}

export function setupCounter(buttonElement: HTMLButtonElement) {
  const counter = createCounter();

  const render = () => {
    buttonElement.textContent = `count is ${counter.value()}`;
  };

  buttonElement.addEventListener("click", () => {
    counter.increment();
    render();
  });

  render();
}

