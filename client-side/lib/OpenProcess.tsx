
export default class OpenProcessesDataManagerSingleton {
  private processesStatus: string[] | null = null;
  private processesStamp:Date | null=null;

  static instance: OpenProcessesDataManagerSingleton;

  private constructor() {}

  static getInstance() {
    if (!OpenProcessesDataManagerSingleton.instance) {
      OpenProcessesDataManagerSingleton.instance =
        new OpenProcessesDataManagerSingleton();
    }
    return OpenProcessesDataManagerSingleton.instance;
  }

  hasData() {
    return this.processesStatus !== null;
  }

  getData() {
    return this.processesStatus;
  }

  setData(processList:string[]){
    this.processesStatus=processList
    this.processesStamp=new Date()
  }
}
