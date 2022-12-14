import { Block } from "../block.class";
import {RegularCodeBlock} from "../../../grammar/main/blocks/regular-code-block.class";

export enum ConditionBlockDestination {
  IF,
  ELSE
}

export class ModelCondition extends Block {
  // composition of block (first level of composition)
  protected childrenIf: Block[] = [];
  protected childrenElse: Block[] = [];

  // composition of conditions (second level of composition)
  protected parent: ModelCondition | null;

  // relative to block composition
  public addBlock(component: Block, blockDestination: ConditionBlockDestination): void {
    if (blockDestination === ConditionBlockDestination.IF) {
      this.childrenIf.push(component);
      // component.setParent(this);
    }
    if (blockDestination === ConditionBlockDestination.ELSE) {
      this.childrenElse.push(component);
      // component.setParent(this);
    }

  }

  public removeBlock(component: Block, blockDestination: ConditionBlockDestination): void {
    if (blockDestination === ConditionBlockDestination.IF) {
      const componentIndex = this.childrenIf.indexOf(component);
      this.childrenIf.splice(componentIndex, 1);
      // component.setParent(null);
    } else {
      const componentIndex = this.childrenElse.indexOf(component);
      this.childrenElse.splice(componentIndex, 1);
      // component.setParent(null);
    }
  }

  public isComposite(): boolean {
    return true;
  }

  // domain related
  protected exportAll(cond: string): string {
    // console.log(this.childrenIf)
    // console.log(this.childrenElse)

    let result: string = '';

    result += `if (${cond}) {` + `\n`;


    this.childrenIf.forEach(child => {
      // console.log(child)
      result += `\t${child.export()}` + `\n`;
    })

    if (this.childrenElse.length > 0) {
      result += `} else {` + `\n`;

      this.childrenElse.forEach(child => {
        result += `\t${child.export()}` + `\n`;
      })

      result += `}` + `\n`;
    } else {
      result += `}` + `\n`;
    }

    return result;
  }

  export(): string {
    return "";
  }
}
