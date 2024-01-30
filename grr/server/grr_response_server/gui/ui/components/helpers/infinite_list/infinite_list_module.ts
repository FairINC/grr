import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';

import {InfiniteList} from './infinite_list';

/**
 * Module for the InfiniteList component.
 */
@NgModule({
  imports: [
    // TODO: re-enable clang format when solved.
    // prettier-ignore
    // keep-sorted start block=yes
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule,
    // keep-sorted end
  ],
  declarations: [InfiniteList],
  exports: [InfiniteList],
})
export class InfiniteListModule {}
