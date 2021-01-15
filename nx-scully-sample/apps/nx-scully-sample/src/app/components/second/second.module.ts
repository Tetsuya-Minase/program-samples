import { SecondRoutingModule } from './second-router.module';
import { SecondComponent } from './second.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SecondComponent],
  imports: [SecondRoutingModule],
  exports: [SecondComponent]
})
export class SecondModule {}
