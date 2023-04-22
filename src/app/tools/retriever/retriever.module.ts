import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrieverComponent } from './retriever.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RetrieverComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [RetrieverComponent],
})
export class RetrieverModule {}
