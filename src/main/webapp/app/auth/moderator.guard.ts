import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap, take} from 'rxjs/operators';

import {AuthService} from './auth.service';
import {AuthGuard} from "./auth.guard";

@Injectable({providedIn: 'root'})
export class ModeratorGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private authGuard: AuthGuard) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Promise<boolean | UrlTree>
        | Observable<boolean | UrlTree> {


        return this.authService.user.pipe(
            take(1),
            map(user => {

                const isAuth = !!user;
                if (!isAuth) {
                    return this.router.createUrlTree(['/signin']);
                }

                const hasNeededRole = user.role === 'ROLE_MODERATOR' || user.role === 'ROLE_ADMIN' || user.role === 'ROLE_ROOT_ADMIN';
                if (hasNeededRole) {
                    return true;
                }
                return this.router.createUrlTree(['/home']);
            })
        );
    }
}
