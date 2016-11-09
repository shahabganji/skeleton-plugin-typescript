export declare class Welcome {
    heading: string;
    firstName: string;
    lastName: string;
    private previousValue;
    readonly fullName: string;
    submit(): void;
    canDeactivate(): boolean;
}
export declare class UpperValueConverter {
    toView(value: any): any;
}
