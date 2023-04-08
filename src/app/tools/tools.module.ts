import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RetrieverModule } from "./retriever/retriever.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, RetrieverModule],
  exports: [RetrieverModule],
})
export class ToolsModule {}
