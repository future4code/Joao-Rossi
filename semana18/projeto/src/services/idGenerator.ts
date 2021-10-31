export default function idGenerator () : string {
    const id = (Math.floor(Math.random() * 10 + 1) + Date.now()).toString();
    return id
  }