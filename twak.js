export class Tawk {
  constructor({ position = "bottom-right" } = {}) {
    this.position = this.getPosition(position);
    this.open = false;
    this.intialise();
    this.createStyles();
  }

  getPosition(position) {
    const [vertical, horizonatal] = position.split("-");

    return {
      [vertical]: "30px",
      [horizonatal]: "30px",
    };
  }

  intialise() {
    const container = document.createElement("div");
    container.style.position = "fixed";

    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    const butoonContainer = document.createElement("div");
    butoonContainer.classList.add("button-container");

    const chaticon = document.createElement("img");
    chaticon.src = "assets/chat.svg";
    chaticon.classList.add("icon");
    this.chaticon = chaticon;

    const closeicone = document.createElement("img");
    closeicone.src = "assets/cross.svg";
    closeicone.classList.add("icon", "hidden");
    this.closeicone = closeicone;

    this.messageContainer = document.createElement("div");
    this.messageContainer.classList.add("hidden", "message-container");

    // handle message form
    this.createStylesmessageContainer();

    butoonContainer.appendChild(this.chaticon);
    butoonContainer.appendChild(this.closeicone);
    butoonContainer.addEventListener("click", this.togglebtn.bind(this));
    container.appendChild(this.messageContainer);
    container.appendChild(butoonContainer);
  }
  createStylesmessageContainer() {
    const title = document.createElement("h3");
    title.textContent = "Leave us an email";

    const form = document.createElement("form");
    form.classList.add("content");
    // email
    const email = document.createElement("input");
    email.id = "email";
    email.placeholder = "Your email";
    email.type = "email";
    email.required = true;

    // message
    const message = document.createElement("textarea");
    message.required = true;
    message.id = "message";
    message.placeholder = "Your message";

    const submiybtn = document.createElement("button");
    submiybtn.textContent = "Submit";

    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(submiybtn);
    this.messageContainer.appendChild(title);
    this.messageContainer.appendChild(form);
  }

  togglebtn() {
    this.open = !this.open;
    if (this.open) {
      this.chaticon.classList.add("hidden");
      this.closeicone.classList.remove("hidden");
      this.messageContainer.classList.remove("hidden");
    } else {
      // this.createStylesmessageContainer();
      this.chaticon.classList.remove("hidden");
      this.closeicone.classList.add("hidden");
      this.messageContainer.classList.add("hidden");
    }
  }
  createStyles() {
    const styles = document.createElement("style");

    styles.innerHTML = ``;
    styles.innerHTML = `
    .icon {
      cursor: pointer;
      width: 70%;
      position: absolute;
      top: 9px;
      left: 9px;
      transition: transform .3s ease;
  }
  .hidden {
      transform: scale(0);
  }
  .button-container {
      background-color: #04b73f;
      width: 60px;
      height: 60px;
      border-radius: 50%;
  }
  .message-container {
      box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
      width: 400px;
      right: -25px;
      bottom: 75px;
      max-height: 400px;
      position: absolute;
      transition: max-height .2s ease;
      font-family: Helvetica, Arial ,sans-serif;
  }
  .message-container.hidden {
      max-height: 0px;
  }
  .message-container h2 {
      margin: 0;
      padding: 20px 20px;
      color: #fff;
      background-color: #04b73f;
  }
  .message-container .content {
      margin: 20px 10px ;
      border: 1px solid #dbdbdb;
      padding: 10px;
      display: flex;
      background-color: #fff;
      flex-direction: column;
  }
  .message-container form * {
      margin: 5px 0;
  }
  .message-container form input {
      padding: 10px;
  }
  .message-container form textarea {
      height: 100px;
      padding: 10px;
  }
  .message-container form textarea::placeholder {
      font-family: Helvetica, Arial ,sans-serif;
  }
  .message-container form button {
      cursor: pointer;
      background-color: #04b73f;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 10px;
  }
  .message-container form button:hover {
      background-color: #16632f;
  }`;

    document.head.appendChild(styles);
  }
}
