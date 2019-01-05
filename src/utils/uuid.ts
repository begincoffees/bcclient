class Uuid {
  static generate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (char: string) => {
        const r = Math.floor(Math.random() * 16);

        if (char === 'x') {
          return r.toString(16);
        }

        // tslint:disable-next-line
        return ((r & 0x3) | 0x8).toString(16);
      },
    );
  }
}

export { Uuid };
