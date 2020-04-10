export interface Record {
    physicalName: string;
    id: number;
    type: string;
    typeAttributes: string;
    defaultValue: number;
    format:string;
    logicalName:string;
    description:string;
    fieldSize:number
    startPosition: number;
  }