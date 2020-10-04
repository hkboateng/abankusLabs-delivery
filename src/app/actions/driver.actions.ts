import { createAction, props } from '@ngrx/store';

export const loadDrivers = createAction(
  '[Driver] Load Drivers'
);

export const loadDriversSuccess = createAction(
  '[Driver] Load Drivers Success',
  props<{ data: any }>()
);

export const loadDriversFailure = createAction(
  '[Driver] Load Drivers Failure',
  props<{ error: any }>()
);
