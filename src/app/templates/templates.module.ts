import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWitdhComponent } from './template-full-witdh/template-full-witdh.component';
import { TemplateContainerComponent } from './template-container/template-container.component';



@NgModule({
  declarations: [TemplateFullWitdhComponent, TemplateContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateFullWitdhComponent, TemplateContainerComponent]
})
export class TemplatesModule { }
