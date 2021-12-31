export default class ApiError {
  constructor(error) {
    this.title = error.title;
    this.messages = this.getError(error.errors);
  }

  getError(errors) {
    const messages = [];
    for (const [, value] of Object.entries(errors)) {
      messages.push(...value);
    }
    return messages;
  }
}