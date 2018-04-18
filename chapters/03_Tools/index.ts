/**
 * This is MY CLASS - IT IS MINE MINE MINE
 */
export class MyClass {
    /**
     * You can define instance attributes within the constructor function!
     * Just like in C#!
     *
     * @param prefix
     */
    constructor(public prefix: string) {}

    /**
     * Say hi or something
     *
     * @param str
     */
    public sayHi(str: string) {
        this.sayHiPrivately(this.prefix + str)
    }

    /**
     * Say hi or something
     *
     * Wait, what is the _ in front of the variable name???
     *
     * @param str
     */
    public async sayHiAsync(_str: string) {
        // this.thisIsUnused( _str)
    }

    /**
     * Wait, line 28 is commented!
     *
     * @param str
     */
    public async thisIsUnusedCopy(str: string) {
      return new Promise((resolve) => {
          setTimeout(() => {
              console.log(this.prefix + str)
              resolve()
          }, 1000)
      })
  }

    /**
     * Say hi, privately
     *
     * @param str
     */
    private sayHiPrivately(str: string) {
        // tslint:disable:no-console
        console.log(this.prefix + str)
    }

    /**
     * Wait, line 28 is commented!
     *
     * @param str
     */
    private async thisIsUnused(str: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(this.prefix + str)
                resolve()
            }, 1000)
        })
    }
}
