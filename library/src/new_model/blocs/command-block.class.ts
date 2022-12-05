import {Block} from "./block.class";
import {Command} from "../utils/command.class";


export class CommandBlock extends Block {

    private readonly _commands: Command[];

    constructor(commands: Command[]) {
        super();
        this._commands = commands;
    }

    export(): string {
        let result: string = "";

        this._commands.forEach(command => {
            result += (`${command.value}` + `\n`)
        })

        return result;
    }
}
