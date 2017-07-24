import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '我的第一个Angular App';

  hero: Hero = {
    id: 1,
    name: '双向绑定数据测试'
  };

  ngAfterViewInit(){
  	setTimeout(function(){
	  	var slideBox = document.getElementById('slide_box');
		var slideContain = document.getElementById('slide_contain');
		var containWidth = slideContain.offsetWidth;
		var current = 0;
		var lis = slideBox.getElementsByTagName('li');
		var li_len = lis.length;

		slideBox.style.width = li_len*100 + '%';
		for(var i=0;i<li_len;++i){
			lis[i].style.width = 100/li_len + '%';
		}

		setInterval(function(){
			current++;
			if(current<li_len){
				slideBox.style['margin-left'] = -containWidth*current + 'px';
			}
			else{
				slideBox.style['margin-left'] = '0px';
				current = 0;
			}
		},4000)
 },0);
  	
  }
}
