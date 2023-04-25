import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, filter, tap } from 'rxjs';
import * as XLSX from 'xlsx';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  faCheckCircle,
  faPencil,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

const DEFAULT_TARGET_COLUMN = 'Email';

@Component({
  selector: 'app-retriever',
  templateUrl: './retriever.component.html',
  styleUrls: ['./retriever.component.scss'],
})
export class RetrieverComponent implements OnInit {
  targetMainColumn = DEFAULT_TARGET_COLUMN;
  targetSecondaryColumn: string = '';
  excelData = new BehaviorSubject<any>(undefined);
  excelData$ = this.excelData.asObservable();
  requestedData = new BehaviorSubject<any[]>([]);
  requestedData$ = this.requestedData.asObservable();
  savedMain: boolean = false;
  savedSecondary: boolean = false;
  // Icons
  faCheckCircle = faCheckCircle;
  faPencil = faPencil;
  faPlus = faPlus;
  faTrashCan = faTrashCan;

  columnSelections = new FormGroup({
    mainColumn: new FormControl(DEFAULT_TARGET_COLUMN, [Validators.required]),
    secondaryColumn: new FormControl(''),
  });

  constructor(private clipBoard: Clipboard) {}

  ngOnInit(): void {
    this.subscribeToExcelData();
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges() {
    this.columnSelections.get('mainColumn')!.valueChanges.subscribe((data) => {
      this.savedMain = false;
    });
  }

  subscribeToExcelData() {
    this.excelData$
      .pipe(filter((d) => !!d))
      .subscribe((data) => this.resolveRequestedData(data));
  }

  setMainColumnName() {
    if (!this.columnSelections.value.mainColumn) return;
    if (!this.requestedData.value.length) return;

    this.targetMainColumn = this.columnSelections.value.mainColumn!;
    this.resolveRequestedData(this.excelData.value);
    this.savedMain = true;
  }

  setSecondaryColumnName() {
    if (!this.requestedData.value.length) return;
    if (this.savedSecondary) {
      this.savedSecondary = false;
      this.columnSelections.get('secondaryColumn')?.setValue('');

      this.targetSecondaryColumn = this.columnSelections.value.secondaryColumn!;
      this.resolveRequestedData(this.excelData.value);
      return;
    }
    if (!this.savedSecondary) {
      this.savedSecondary = true;

      this.targetSecondaryColumn = this.columnSelections.value.secondaryColumn!;
      this.resolveRequestedData(this.excelData.value);
      return;
    }
  }

  readFile(event: any) {
    if (!event?.target?.files.length) return;
    console.log('File uploaded');

    const file = event.target.files[0]!;
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workbook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workbook.SheetNames;
      this.excelData.next(XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]));
    };
  }

  resolveRequestedData(data: any) {
    let list = [];
    for (let item of data) {
      if (!!this.targetSecondaryColumn && !item[this.targetSecondaryColumn]) continue;
      list.push(`${item[this.targetMainColumn]};`);
    }
    this.requestedData.next(list);
  }

  copyResults() {
    if (!this.requestedData.value.length) return;
    this.clipBoard.copy(this.requestedData.value.join('\n'));
  }
}
