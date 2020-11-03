export default class ImportOrSaveLocalFile {
  constructor() {
    this._currentFolderName = '';
    this._currentFiles = new Array();
  }

  setCurrentProjectData(projectName){
    this._currentFolderName = projectName;
    console.log(projectName);
  }

  setCurrentFiles(files){
    this._currentFiles = files;
    console.log(files);
  }

}
