import {Component} from 'angular2/core';

@Component({
	selector: 'meu-app',
	templateUrl: 'app/view/home.html'
})
export class AppComponent{
	
	//funcao para ir do primeiro para o segunda bg
	segundo(){
		var primeiro = document.getElementById('bg-1');
		primeiro.setAttribute("class", "hide");

		var segundo = document.getElementById('bg-2');
		segundo.classList.remove("hide");
		segundo.setAttribute("class", "col-sm-12 noPadding");
	}

	//funcao para voltar ao primeiro bg
	primeiro(){
		var primeiro = document.getElementById('bg-1');
		primeiro.classList.remove("hide");
		primeiro.setAttribute("class", "col-sm-12 noPadding");
		
		var segundo = document.getElementById('bg-2');
		segundo.setAttribute("class", "col-sm-12 noPadding hide");
	}

	//funcao para voltar ao segundo bg
	VoltaSegundo(){
		var segundo = document.getElementById('bg-2');
		segundo.classList.remove("hide");
		segundo.setAttribute("class", "col-sm-12 noPadding");
		
		var terceiro = document.getElementById('bg-3');
		terceiro.setAttribute("class", "col-sm-12 noPadding hide");
	}

	//funcao para ir ao terceiro bg
	terceiro(){
		var terceiro = document.getElementById('bg-3');
		terceiro.classList.remove("hide");
		terceiro.setAttribute("class", "col-sm-12 noPadding");
		
		var segundo = document.getElementById('bg-2');
		segundo.setAttribute("class", "col-sm-12 noPadding hide");
	}

}