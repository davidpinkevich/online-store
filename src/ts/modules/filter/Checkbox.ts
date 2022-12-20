class Checkbox {
  name: string;
  parent: string;
  constructor(name: string, parent: string) {
    this.name = name;
    this.parent = parent;
  }

  render(): void {
    const div: HTMLDivElement = document.createElement("div");
    div.classList.add("checkbox");
    div.innerHTML = `
        <input id="${this.name}" type="checkbox" class="checkbox__input" value="${this.name}">
        <label for="${this.name}" class="checkbox__label">${this.name}</label>
    `;
    (document.querySelector(`${this.parent}`) as HTMLDivElement).append(div);
  }
}

export default Checkbox;
