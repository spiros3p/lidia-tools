import { Xliff } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import * as XLSX from "xlsx";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: "app-retriever",
  templateUrl: "./retriever.component.html",
  styleUrls: ["./retriever.component.scss"],
})
export class RetrieverComponent implements OnInit {
  excelData = new Subject();
  excelData$ = this.excelData.asObservable();
  requestedData = new BehaviorSubject<any[]>([]);
  requestedData$ = this.requestedData.asObservable();
  targetColumn = "Email";

  constructor(private clipBoard: Clipboard) {}

  ngOnInit(): void {
    // this.requestedData.val
    this.excelData$.subscribe((data) => this.resolveRequestedData(data));
  }

  readFile(event: any) {
    if (!event?.target?.files.length) return;
    console.log("File uploaded");

    const file = event.target.files[0]!;
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workbook = XLSX.read(fileReader.result, { type: "binary" });
      var sheetNames = workbook.SheetNames;
      this.excelData.next(
        XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
      );
    };
  }

  resolveRequestedData(data: any) {
    let list = [];
    for (let item of data) {
      list.push(item[this.targetColumn]);
    }
    this.requestedData.next(list);
  }

  copyResults() {
    if (!this.requestedData.value.length) return;
    this.clipBoard.copy(this.requestedData.value.join("\n"));
  }
}
