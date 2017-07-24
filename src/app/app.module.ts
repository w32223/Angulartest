import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from '../hero/hero.component';
import { RinComponent } from '../rin/rin.component';
import { SonComponent } from '../son/son.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

import { HighlightDirective } from './highlight.directive';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,HeroComponent,RinComponent,HighlightDirective,SonComponent,FirstComponent,SecondComponent,ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	RouterModule.forRoot([
	  {
	    path: 'rin',
	    component: RinComponent
	  },
	  {
	    path: 'first',
	    component: FirstComponent
	  },
	  {
	    path: 'second',
	    component: SecondComponent
	  },
	  {
	    path: 'third',
	    component: ThirdComponent
	  }
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
