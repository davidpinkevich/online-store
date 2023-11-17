class Checkbox {
  name: string;
  parent: string;
  constructor(name: string, parent: string) {
    this.name = name;
    this.parent = parent;
  }

  render(): void {
    const div: HTMLDivElement = document.createElement("div");
    div.setAttribute("value", this.name);
    div.classList.add("checkbox");
    div.innerHTML = `
        <input id="${this.name}" type="checkbox" class="checkbox__input" value="${this.name}">
        <label for="${this.name}" class="checkbox__label">${this.name} <p><span class="first__items"></span>:<span class="full__items"></span></p></label>
    `;
    (document.querySelector(`${this.parent}`) as HTMLDivElement).append(div);
  }
}

export default Checkbox;
