declare module "plist" {
    export function parse(string: string): Object;
    export function build(json: Array<any>): string;
}