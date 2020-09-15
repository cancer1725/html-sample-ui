/* Copyright (c) 2018-2019 VMware, Inc. All rights reserved. */

import {Component, Input} from '@angular/core';

@Component({
   selector: 'app-chassis-status',
   templateUrl: './status.component.html'
})
export class StatusComponent {
   @Input()
   isActive: boolean;
}
