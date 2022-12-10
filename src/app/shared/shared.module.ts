import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { SuccessfulDialogComponent } from './successful-dialog/successful-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const materialModules = [
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
  MatTableModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule

];

const sharedComponents = [
  NavbarComponent,
  SuccessfulDialogComponent,
  FooterComponent,
  SidenavComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  exports: [
    ...sharedComponents, ...materialModules,
  ],
  providers: [
    NavbarComponent,
  ],

})
export class SharedModule { }
