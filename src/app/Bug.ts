import { PRIORITY } from "./PRIORITY";
import { SEVERITY } from "./SEVERITY";
import { STATUS } from "./STATUS";
import { TYPE } from "./TYPE";

export class Bug{
  id:string ='';
  name:string="Bug";
  status:STATUS=STATUS.NEW;
  priority:PRIORITY=PRIORITY.LOW;
  severity:SEVERITY=SEVERITY.LOW;
  type:TYPE=TYPE.FUNCTIONAL;
  submittedOn:Date=new Date();
  eta:Date=new Date();
  module:String="module";
  projectId:String="pro";
  description:String="desc";
  synopsis:String="syn";
}
