import { forkJoin, lastValueFrom, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

export const AppInitializerFactory = (
  usersService: UsersService
): (() => Promise<void>) => {
  const initData$: Observable<void> = forkJoin([
    usersService.initCurrentUser(),
  ]).pipe(
    map(() => void 0),
    catchError(() => of(void 0))
  );

  return (): Promise<void> => lastValueFrom(initData$);
};
