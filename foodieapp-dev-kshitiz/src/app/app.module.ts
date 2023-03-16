import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RestaurantOwnerComponent } from './restaurant-owner/restaurant-owner.component';
import { UserdashComponent } from './userdash/userdash.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { RestaurentCardComponent } from './restaurent-card/restaurent-card.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateEditFormComponent } from './update-edit-form/update-edit-form.component';
import { AddMenuFormComponent } from './add-menu-form/add-menu-form.component';
import { RegisterRestaurentFormComponent } from './register-restaurent-form/register-restaurent-form.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { FavTabComponent } from './fav-tab/fav-tab.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FilterPipe,
    RestaurantOwnerComponent,
    UserdashComponent,
    RestaurentCardComponent,
    RestaurentDetailsComponent,
    UpdateEditFormComponent,
    AddMenuFormComponent,
    RegisterRestaurentFormComponent,
    CartComponent,
    FooterComponent,
    FavTabComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatAutocompleteModule,
    FormsModule,
    MatRippleModule,
    NgbModule,
    MatChipsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    // FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
