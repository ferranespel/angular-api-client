import{Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import {UserService} from '../../services/user.service';


@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	providers: [UserService]
})
export class RegiterComponent implements OnInit {
	public title: string;
	public user:User;
	public status: string;
	public ktext: string;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	) {
		this.title = 'Registrate';	
		this.user = new User(1, 'ROLE_USER', '', '', '', '');
		this.ktext = 'key-working';
	}
	ngOnInit(){
		console.log('register.component cargado correctamente!');
		localStorage.setItem( 'key' , 'new setup');
	}

	onSubmit(form){
		//console.log(this.user);
		//console.log(this._userService.pruebas());
		this._userService.register(this.user).subscribe(
			response => {
				if(response.status == 'success'){
					this.status = response.status;
					// Vaciar formulario
					this.user = new User(1, 'ROLE_USER', '', '', '', '');
					form.reset();

				}else{
					this.status = 'error';
				}

			},
			error => {
				console.log(<any>error);
			}
		);

	}
}