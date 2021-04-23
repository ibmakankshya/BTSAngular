import { PRIORITY } from "./PRIORITY";
import { SEVERITY } from "./SEVERITY";
import { STATUS } from "./STATUS";
import { TYPE } from "./TYPE";

export class Bug{
  id:string ='';
  name:string="Local Host Error";
  status:STATUS=STATUS.NEW;
  priority:PRIORITY=PRIORITY.LOW;
  severity:SEVERITY=SEVERITY.LOW;
  type:TYPE=TYPE.FUNCTIONAL;
  submittedOn:Date=new Date();
  eta:Date=new Date();
  module:String="M7.1";
  projectId:String="ProjectID1";
  description:String="This is caused by..";
  synopsis:String="Begins with ";
}
