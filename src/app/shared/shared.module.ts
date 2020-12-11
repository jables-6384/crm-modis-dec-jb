import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextsModule } from '../texts/texts.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective],
  imports: [CommonModule],
  exports: [
    TemplatesModule,
    IconsModule,
    TextsModule,
    ReactiveFormsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
