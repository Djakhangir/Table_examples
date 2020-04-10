import { Record } from './record';

export const EXAMPLE_DATA: Record[] = [
    {id: 1, physicalName: 'LoremIpsum', logicalName: 'column 1', description: 'string', type: 'Data', typeAttributes: 'NONE', defaultValue:20, format:'MM/DD/YY', fieldSize:5, startPosition: 0 },
    {id: 2, physicalName: 'Column 1', logicalName: 'column 2', description: 'string', type: 'Decimal', typeAttributes: 'NONE', defaultValue:15, format:'Text', fieldSize:1, startPosition: 0 },
    {id: 3, physicalName: 'File_Process_date', logicalName: 'column 5', description: 'string', type: 'Date', typeAttributes: 'NONE', defaultValue:20, format:'abc', fieldSize:8, startPosition: 0 },
    {id: 5, physicalName: 'Filler', logicalName: 'data', description: 'string', type: 'Alpha', defaultValue:15, typeAttributes: 'NONE', format:'', fieldSize:7, startPosition: 0 }
];

export const EXAMPLE_DATA2: Record[] = [
    {id: 1, physicalName: 'LoremIpsum', logicalName: 'Filler', description: 'NONE', type: 'Data', typeAttributes: 'NONE', defaultValue:20, format:'1234', fieldSize:1, startPosition: 0 },
    {id: 2, physicalName: 'Column 1', logicalName: 'Something', description: 'No Info', type: 'Date', typeAttributes: 'NONE', defaultValue: 0, format:'abc', fieldSize:8, startPosition: 0 },
    {id: 3, physicalName: 'Filler', logicalName: 'Information', description: 'string', type: 'Numeric', typeAttributes: 'NONE', defaultValue: 20, format:'Text', fieldSize:7, startPosition: 0 }  
];

export const EXAMPLE_DATA3: Record[] = [
    {id: 1, physicalName: 'LoremIpsum', logicalName: 'None', description: 'NONE', type: 'Numeric', typeAttributes: 'NONE', defaultValue:0, format:'MM/DD/YY', fieldSize:100, startPosition: 0 },
    {id: 2, physicalName: 'LoremIpsum', logicalName: 'None', description: 'NONE', type: 'Numeric', typeAttributes: 'NONE', defaultValue:125, format:'abc', fieldSize:10, startPosition: 0 }
];