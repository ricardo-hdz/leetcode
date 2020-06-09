export class Pin {
    public val: number;
    public friends: Array<Pin>;
    public visited: boolean;
    public degree: number;

    constructor(val: number) {
        this.val = val;
        this.friends = [];
        this.visited = false;
        this.degree = -1;
    }
}