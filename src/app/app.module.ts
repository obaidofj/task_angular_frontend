import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
