import {CodeBlock} from "./code-block.class";
import {Statement} from "../../../model/block/statements/statement.class";
import {Block} from "../../../model/block/block.class";


export class RegularCodeBlock extends CodeBlock {

    private readonly _codeBlock: CodeBlock[] = [];

    constructor() {
        super();
    }

    public addBlock(statement: CodeBlock): void {
        this._codeBlock.push(statement);
    }

    getContent(): Block[] {
        return this._codeBlock.map(c => c.getContent());
    }


}
