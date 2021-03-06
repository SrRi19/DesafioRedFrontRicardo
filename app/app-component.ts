import {Component} from 'angular2/core';

@Component({
	selector: 'meu-app',
	templateUrl: 'app/view/home.html'
})
export class AppComponent{
	
	//funcao rolando para baixo
	CimaBaixo(){
		ini = window.scrollY;
	    var pos = ini;
	    var id = setInterval(frame, 5);
	    function frame() {
	        if (pos == 700 || pos > 700) {
	            clearInterval(id);
	        } else {
	            pos = pos + 10;
	            window.scrollTo(0,pos);
	        }
	    }
	}

	//funcao baixo para cima
	BaixoCima(){
		ini = window.scrollY;
	    var pos = ini;
	    var id = setInterval(frame, 5);
	    function frame() {
	        if (pos == 700 || pos < 700) {
	            clearInterval(id);
	        } else {
	            pos = pos - 10;
	            window.scrollTo(0,pos);
	        }
	    }
	}

}